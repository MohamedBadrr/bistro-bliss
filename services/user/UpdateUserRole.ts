import { supabase } from "@/lib/supabaseClient";

type UpdateUserRoleProps = {
  userId: string;
  currentRole: "USER" | "ADMIN";
};

export const UpdateUserRole = async ({
  userId,
  currentRole,
}: UpdateUserRoleProps): Promise<"USER" | "ADMIN"> => {
  const nextRole: "USER" | "ADMIN" = currentRole === "ADMIN" ? "USER" : "ADMIN";

  const { data, error } = await supabase
    .from("users")
    .update({ role: nextRole })
    .eq("id", userId)
    .select("role")
    .single();

  if (error) throw new Error(error.message);
  return data.role;
};
