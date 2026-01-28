import { supabase } from "@/lib/supabaseClient";
import { Reservation } from "./updateReservation";

export const getAllReservations = async (): Promise<Reservation[]> => {
  const { data, error } = await supabase.rpc("get_all_reservations");

  if (error) throw new Error(error.message);
  return (data ?? []) as Reservation[];
};