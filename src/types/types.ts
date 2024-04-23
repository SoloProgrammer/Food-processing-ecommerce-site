export type ImageType = {
  src: string;
  title: string;
};

export type ProductCategory = {
  title: string;
  short_desc: string;
  image: string;
  slug: string;
};

export type Product = {
  images: string[];
  title: string;
  cat_slug: string;
  details: {
    "Nature of products"?: string;
    Ingredients?: string;
    Specifications?: {
      TSS: string;
      Acidity: string;
      pH: string;
      Salt?: string;
    };
    "Nutritional values per 100gm of product"?: {
      Energy?: string;
      Carbohydrates?: string;
      Proteins?: string;
      Fats?: string;
      Sugar?: string;
      "Vitamin-A"?: string;
      "Vitamin-C"?: string;
    };
    Uses?: string;
  };
};
