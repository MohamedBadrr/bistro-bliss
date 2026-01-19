import { supabase } from "@/lib/supabaseClient";
import { Product } from "@/types/Product";

export const getProductById = async (productId: string): Promise<Product> => {
  const { data, error } = await supabase
    .from("products")
    .select(`
      id,
      name,
      description,
      image,
      price,
      category_id,
      created_at,
      updated_at,
      category:categories (
        id,
        name
      ),
      product_sizes (id, size, price),
      product_extras (id, name, price)
    `)
    .eq("id", productId)
    .single();

  if (error) throw new Error(error.message);

  return data as unknown as Product;
};
