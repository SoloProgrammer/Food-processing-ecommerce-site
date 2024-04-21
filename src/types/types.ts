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
  details: {
    "Nature of products": string;
    "Packing size": Object;
    Ingredients: string;
    Specifications: {
      TSS: string;
      Acidity: string;
      pH: string;
      Salt?: string;
    };
    "Nutritional values per 100gm of product": {
      Energy: string;
      Carbohydrates: string;
      Proteins: string;
      Fats: string;
      Sugar: string;
    };
  };
};
