import { supabase } from "@/lib/supabaseClient";
import { CartItem } from "@/store/cart.store";

export type CreateOrderInput = {
  user_email: string;
  phone: string;
  street_address: string;
  postal_code: string;
  city: string;
  country: string;
  delivery_fee: number;
  cart: CartItem[];
};

export const createOrder = async (input: CreateOrderInput): Promise<string> => {
  const sub_total = input.cart.reduce((sum, item) => {
    const extrasTotal = (item.extras ?? []).reduce((s, e) => s + e.price, 0);
    const unitPrice = item.basePrice + (item.size?.price ?? 0) + extrasTotal;
    return sum + unitPrice * (item.quantity ?? 1);
  }, 0);

  const total_price = sub_total + input.delivery_fee;

  const items = input.cart.map((i) => ({
    product_id: i.id,
    quantity: i.quantity ?? 1,
    size_id: i.size?.id ?? null,
    extras: (i.extras ?? []).map((e) => ({
      extra_id: e.id,
      price: e.price,
    })),
  }));

  const { data, error } = await supabase.rpc("create_order_from_cart_v2", {
    p_paid: false,
    p_sub_total: sub_total,
    p_delivery_fee: input.delivery_fee,
    p_total_price: total_price,
    p_user_email: input.user_email,
    p_phone: input.phone,
    p_street_address: input.street_address,
    p_postal_code: input.postal_code,
    p_city: input.city,
    p_country: input.country,
    p_items: items,
  });

  if (error) throw new Error(error.message);
  return data as string;
};
