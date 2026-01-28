import { supabase } from "@/lib/supabaseClient";
import { Reservation } from "./updateReservation";

// 2) get reservations for person
export const getMyReservations = async (userId: string): Promise<Reservation[]> => {
  const { data, error } = await supabase.rpc("get_reservations_by_user", {
    p_user_id: userId,
  });

  if (error) throw new Error(error.message);
  return (data ?? []) as Reservation[];
};