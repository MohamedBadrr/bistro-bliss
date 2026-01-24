import { auth } from "@/auth";
import { supabase } from "@/lib/supabaseClient";

const isUuid = (v?: string) =>
  !!v &&
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(v);

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
export const getMe = async () : Promise<UserProfile> => {
  const session = await auth();

  const userId = session?.user?.id as string | undefined;
  const emailRaw = session?.user?.email as string | undefined;
  const email = emailRaw?.toLowerCase();


  if (!userId && !email) return null;

  const base = supabase
    .from("users")
    .select("id,name,email,phone,image,street_address,city,role,country");

  const query = isUuid(userId)
    ? base.eq("id", userId!)
    : base.eq("email", email!);

  const { data, error } = await query.maybeSingle();


  if (error || !data) return null;
  return data;
};
