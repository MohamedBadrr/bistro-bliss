import { supabase } from "@/lib/supabaseClient";
import { getImageUrl } from "../user/getImageURL";

export type AddProductFormValues = {
  name: string;
  description?: string;
  price: number;  
  category: string;  
  sizes: { name: string; price: number }[];
  extras: { name: string; price: number }[];
  file: File | null;
};

export const addProduct = async (data: AddProductFormValues) => {
  const { file, sizes, extras, price, category, ...rest } = data;

  const imageUrl = await getImageUrl(file);

  if (!imageUrl) throw new Error("Image upload failed");

  const { data: product, error: productErr } = await supabase
    .from("products")
    .insert({
      name: rest.name,
      description: rest.description || "",
      image: imageUrl,
      price: price,
      category_id: category,
    })
    .select("id")
    .single();

  if (productErr) throw new Error(productErr.message);

  const productId = product.id;

  if (sizes?.length) {
    const { error: sizesErr } = await supabase.from("product_sizes").insert(
      sizes.map((s) => ({
        product_id: productId,
        size: s.name,
        price: s.price,
      }))
    );
    if (sizesErr) throw new Error(sizesErr.message);
  }

  // 3) insert extras
  if (extras?.length) {
    const { error: extrasErr } = await supabase.from("product_extras").insert(
      extras.map((e) => ({
        product_id: productId,
        name: e.name,  
        price: e.price,
      }))
    );
    if (extrasErr) throw new Error(extrasErr.message);
  }

  return productId;
};
