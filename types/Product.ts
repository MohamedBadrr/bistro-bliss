// types/Product.ts

export type ProductSize = {
  id: string;
  product_id: string;
  size: "SMALL" | "MEDIUM" | "LARGE";
  price: number;
};
export type Category = {
  id: string;
  name: string;
};
export type ProductExtra = {
  id: string;
  product_id: string;
  name: string;
  price: number;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category_id: string;
 categories: Category | null;
  created_at: string;
  updated_at: string;

  product_sizes: ProductSize[];
  product_extras: ProductExtra[];
};
