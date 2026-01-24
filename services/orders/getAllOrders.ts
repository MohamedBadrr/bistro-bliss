import { supabase } from "@/lib/supabaseClient";
import { OrderWithRelations } from "@/types/Orders";

export const getAllOrders = async (): Promise<OrderWithRelations[]> => {
  const { data, error } = await supabase
    .from("orders")
    .select(`
      id, paid, status, total, created_at, user_id,
      order_addresses(*),
      order_products(
        id, quantity, size_id,
        products(id, name, image, price, categories(id, name)),
        product_sizes!order_products_size_id_fkey(id, size, price),
        order_product_extras(
          id, price,
          product_extras!order_product_extras_extra_id_fkey(id, name, price)
        )
      )
    `)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data as unknown as OrderWithRelations[];
};
