import { supabase } from "@/lib/supabaseClient";

export const deleteProduct = async (productId: string) => {
  if (!productId) throw new Error("productId is required");

  const { error: sizesErr } = await supabase
    .from("product_sizes")
    .delete()
    .eq("product_id", productId);

  if (sizesErr) throw new Error(sizesErr.message);

  const { error: extrasErr } = await supabase
    .from("product_extras")
    .delete()
    .eq("product_id", productId);

  if (extrasErr) throw new Error(extrasErr.message);

  const { error: productErr } = await supabase
    .from("products")
    .delete()
    .eq("id", productId);

  if (productErr) throw new Error(productErr.message);

  return true;
};
