import { supabase } from "@/lib/supabaseClient";

export const getAllOrders = async () => {
  const { data, error } = await supabase
    .from("orders")
    .select(`
      id, paid, status, total, created_at, user_id,
      order_addresses(*),
      order_products(
        id, quantity, size_id,
        products(id, name, image, base_price, categories(id, name)),
        product_sizes!order_products_size_id_fkey(id, name, price),
        order_product_extras(
          id, price,
          product_extras!order_product_extras_extra_id_fkey(id, name, price)
        )
      )
    `)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};
