import { supabase } from "@/lib/supabaseClient";
import { UserProfile } from "@/types";

export const getAllUsers = async (): Promise<UserProfile[]> => {
  const { data, error } = await supabase
    .from("users")
    .select(
      "id,email,name,image,phone,street_address,postal_code,city,country,role,created_at,updated_at"
    )
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data ?? [];
};
