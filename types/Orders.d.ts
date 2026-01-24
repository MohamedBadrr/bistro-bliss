export type UUID = string;

export type OrderStatus =
  | "PENDING"
  | "CONFIRMED"
  | "PREPARING"
  | "DELIVERING"
  | "COMPLETED"
  | "CANCELLED"
  | string;

export type ProductSize = "SMALL" | "MEDIUM" | "LARGE" | string;

export interface Category {
  id: UUID;
  name: string;
}

export interface Product {
  id: UUID;
  name: string;
  image: string;
  price: number; // matches your select(products(..., price, ...))
  categories: Category | null; // nested categories(id,name)
}

export interface SelectedSize {
  id: UUID;
  size: ProductSize; // matches your select(selected_size: ... (.., size, ..))
  price: number;
}

export interface ProductExtra {
  id: UUID;
  name: string; // enum text in DB is fine as string here
  price: number;
}

export interface OrderProductExtra {
  id: UUID;
  price: number;
  product_extras: ProductExtra | null; // product_extras!order_product_extras_extra_id_fkey(...)
}

export interface OrderProduct {
  id: UUID;
  quantity: number;
  size_id: UUID | null;
  products: Product | null;
  selected_size: SelectedSize | null;
  order_product_extras: OrderProductExtra[]; // can be [] if none
}

export interface OrderAddress {
  id: UUID;
  order_id: UUID;
  user_email: string;
  phone: string;
  street_address: string;
  postal_code: string | null;
  city: string;
  country: string;
  created_at: string;
}

export interface OrderWithRelations {
  id: UUID;
  paid: boolean;
  status: OrderStatus;
  total: number;
  created_at: string;
  order_addresses: OrderAddress[];
  order_products: OrderProduct[];
}


// optional: strongly type your query result
// const { data } = await supabase.from("orders").select<OrderWithRelations>(`...`);
