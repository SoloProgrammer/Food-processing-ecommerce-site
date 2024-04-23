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

type ProductSpecifications = {
  TSS: string;
  Acidity: string;
  pH: string;
  Salt: string;
};

type ProductNutritionalValues = {
  Energy: string;
  Carbohydrates: string;
  Proteins: string;
  Fats: string;
  Sugar: string;
  "Vitamin-A": string;
  "Vitamin-C": string;
};

export type ProductDetails = {
  "Nature of products": string;
  Ingredients: string;
  Specifications: Partial<ProductSpecifications>;
  "Nutritional values per 100gm of product": Partial<ProductNutritionalValues>;
};

export type Product = {
  images: string[];
  title: string;
  cat_slug: string;
  details: Partial<ProductDetails>;
};
