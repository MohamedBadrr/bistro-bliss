import { supabase } from "@/lib/supabaseClient";
import { getImageUrl } from "../user/getImageURL";

export type UpdateProductFormValues = {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
  sizes: { name: string; price: number }[]; 
  extras: { name: string; price: number }[];
  file: File | null;
};

export const updateProduct = async (data: UpdateProductFormValues) => {
  const { id, file, sizes, extras, price, category, ...rest } = data;

  // 1) upload image only if user selected a new file
  const uploadedUrl = file ? await getImageUrl(file) : null;

  const payload: {
    name: string;
    description: string;
    price: number;
    category_id: string;
    image?: string;
  } = {
    name: rest.name,
    description: rest.description || "",
    price,
    category_id: category,
    ...(uploadedUrl ? { image: uploadedUrl } : {}),
  };

  // 2) update product row
  const { data: updated, error: productErr } = await supabase
    .from("products")
    .update(payload)
    .eq("id", id)
    .select("id")
    .single();

  if (productErr) throw new Error(productErr.message);

  // 3) replace sizes (delete then insert)
  const { error: delSizesErr } = await supabase
    .from("product_sizes")
    .delete()
    .eq("product_id", id);

  if (delSizesErr) throw new Error(delSizesErr.message);

  if (sizes?.length) {
    const { error: insSizesErr } = await supabase.from("product_sizes").insert(
      sizes.map((s) => ({
        product_id: id,
        size: s.name,
        price: s.price,
      }))
    );
    if (insSizesErr) throw new Error(insSizesErr.message);
  }

  // 4) replace extras (delete then insert)
  const { error: delExtrasErr } = await supabase
    .from("product_extras")
    .delete()
    .eq("product_id", id);

  if (delExtrasErr) throw new Error(delExtrasErr.message);

  if (extras?.length) {
    const { error: insExtrasErr } = await supabase.from("product_extras").insert(
      extras.map((e) => ({
        product_id: id,
        name: e.name,
        price: e.price,
      }))
    );
    if (insExtrasErr) throw new Error(insExtrasErr.message);
  }

  return updated.id;
};
