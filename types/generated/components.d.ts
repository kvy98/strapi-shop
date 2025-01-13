import type { Schema, Struct } from '@strapi/strapi';

export interface CommonComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_common_components_buttons';
  info: {
    description: '';
    displayName: 'Button';
    icon: 'code';
  };
  attributes: {
    size: Schema.Attribute.Enumeration<['sm', 'md', 'lg', 'full']>;
    theme: Schema.Attribute.Enumeration<['primary', 'secondary']>;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['normal', 'outline', 'text']>;
    uri: Schema.Attribute.String;
  };
}

export interface CommonComponentsImageBox extends Struct.ComponentSchema {
  collectionName: 'components_common_components_image_boxes';
  info: {
    description: '';
    displayName: 'Image';
    icon: 'code';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    uri: Schema.Attribute.String;
  };
}

export interface SectionBrandSection extends Struct.ComponentSchema {
  collectionName: 'components_section_brand_sections';
  info: {
    description: '';
    displayName: 'BrandSection';
  };
  attributes: {
    image_brand_list: Schema.Attribute.Component<
      'common-components.image-box',
      true
    >;
  };
}

export interface SectionCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_section_cta_buttons';
  info: {
    displayName: 'CTAButton';
  };
  attributes: {
    action_buttons: Schema.Attribute.Component<
      'common-components.button',
      true
    >;
    content: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_banners';
  info: {
    displayName: 'HeroBanner';
  };
  attributes: {
    image_banner_list: Schema.Attribute.Component<
      'common-components.image-box',
      true
    >;
  };
}

export interface SectionHightLightProductSection
  extends Struct.ComponentSchema {
  collectionName: 'components_section_hight_light_product_sections';
  info: {
    displayName: 'HightLightProductSection';
  };
  attributes: {
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common-components.button': CommonComponentsButton;
      'common-components.image-box': CommonComponentsImageBox;
      'section.brand-section': SectionBrandSection;
      'section.cta-button': SectionCtaButton;
      'section.hero-banner': SectionHeroBanner;
      'section.hight-light-product-section': SectionHightLightProductSection;
    }
  }
}
