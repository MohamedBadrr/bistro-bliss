import { auth } from "@/auth";
import { supabase } from "@/lib/supabaseClient";
export type UserProfile = {
  id: string;
  name: string;
  email: string;
  phone: string;
  image: string;
  street_address: string;
  city: string;
  country: string;
  role: "ADMIN" | "USER";
  file?: File | null
};
export const getMe = async (): Promise<UserProfile>=> {
  const session = await auth();

  if (!session?.user?.id) {
    return null ;
  }

  const { data, error } = await supabase
    .from("users")
    .select(
      `
      id,
      name,
      email,
      phone,
      image,
      street_address,
      city,
      role,
      country
    `
    )
    .eq("id", session.user.id)
    .single();

  if (error || !data) {
    throw new Error(error instanceof Error ?  error.message :"User not found");
  }

  return data;
};
