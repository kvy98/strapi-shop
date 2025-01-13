import { factories } from '@strapi/strapi';
import { Context } from 'koa';

export default factories.createCoreController('api::product.product', ({ strapi }) => ({
  async findBySlug(ctx: Context) {
    const { slug } = ctx.query; // Extract slug from the query parameters

    if (!slug) {
      return ctx.badRequest('Slug query parameter is required'); // Return a 400 error if no slug is provided
    }

    // Use the service method to fetch the product by slug
    const product = await strapi.service('api::product.product').findBySlug(slug);

    if (!product) {
      return ctx.notFound('Product not found'); // Return 404 if no product found
    }

    return ctx.send(product); // Return the found product
  },
}));
