import { supabase } from "@/lib/supabaseClient";

export type Reservation = {
  id: string;
  user_id: string | null;
  reservation_date: string; // YYYY-MM-DD
  reservation_time: string; // HH:mm:ss
  name: string;
  phone: string;
  total_persons: number;
  created_at: string;
  updated_at: string;
};

// 1) make reservation
export const makeReservation = async (payload: {
  userId: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm or HH:mm:ss
  name: string;
  phone: string;
  totalPersons: number;
}): Promise<string> => {
  const { data, error } = await supabase.rpc("make_reservation", {
    p_user_id: payload.userId,
    p_date: payload.date,
    p_time: payload.time,
    p_name: payload.name,
    p_phone: payload.phone,
    p_total_persons: payload.totalPersons,
  });

  if (error) throw new Error(error.message);
  return data as string; // reservation id
};