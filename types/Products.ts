export interface ProductSize {
  id: string;
  size: "SMALL" | "MEDIUM" | "LARGE";        // e.g., "SAMLL" (likely a typo for "SMALL"), "MEDIUM", "LARGE"
  price: number;
  product_id: string;
}

export interface ProductExtra {
  id: string;
  name: string;        // e.g., "Cola", "Fries"
  price: number;
  product_id: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;       // URL to the product image
  created_at: string;  // ISO timestamp string
  product_sizes: ProductSize[];
  product_extras: ProductExtra[];
  category_id: string,
}

