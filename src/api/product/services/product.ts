import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::product.product', ({ strapi }) => ({
  // Custom method to find a product by its slug
  async findBySlug(slug: string) {
    // Query the product by slug
    const product = await strapi.db.query('api::product.product').findOne({
      where: { slug },
      populate: {
        categories: {
          populate: ['relatedCategoryField'], // Replace with actual nested relations
        },
        relatedProducts: true, // Automatically populates deeply related products
      },
    });

    return product;
  },
}));