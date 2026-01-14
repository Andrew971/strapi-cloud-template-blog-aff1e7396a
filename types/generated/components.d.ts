import type { Schema, Struct } from '@strapi/strapi';

export interface ProductProductInformation extends Struct.ComponentSchema {
  collectionName: 'components_product_product_informations';
  info: {
    displayName: 'Product Information';
    icon: 'briefcase';
  };
  attributes: {
    avantages: Schema.Attribute.JSON;
    brief: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.JSON;
  };
}

export interface ProductTechnicalInformation extends Struct.ComponentSchema {
  collectionName: 'components_product_technical_informations';
  info: {
    displayName: 'Technical Information';
  };
  attributes: {
    appearance: Schema.Attribute.String;
    cocnentration: Schema.Attribute.String;
    fragrance: Schema.Attribute.String;
    packaging: Schema.Attribute.String;
    ph: Schema.Attribute.String;
    safety: Schema.Attribute.Text;
    securityFile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    technicalFile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.product-information': ProductProductInformation;
      'product.technical-information': ProductTechnicalInformation;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
