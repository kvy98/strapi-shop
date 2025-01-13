import slugify from 'slugify';

export default {
  async beforeCreate(event) {
    const { data } = event.params;

    // Check if the slug is provided, otherwise generate it
    if (!data.slug) {
      data.slug = slugify(data.name, { lower: true, strict: true });

      // Ensure the generated slug is unique
      const existingProduct = await strapi.db.query('api::product.product').findOne({ where: { slug: data.slug } });
      if (existingProduct) {
        data.slug = `${data.slug}-${Date.now()}`; // Add timestamp to ensure uniqueness
      }
    }
  },

  async beforeUpdate(event) {
    const { data } = event.params;

    // Generate slug only if the product name is changed and no slug is provided
    if (data.name && !data.slug) {
      data.slug = slugify(data.name, { lower: true, strict: true });
    }
  },
};