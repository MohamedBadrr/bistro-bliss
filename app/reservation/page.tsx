import { getMe } from "@/services/user/getMe";
import ReservationForm from "./ReservationForm";

const Reservation = async () => {
  const profile = await getMe();
  return (
    <div className="container min-h-screen!">
      <div className="pt-20  items-center justify-center flex flex-col gap-2 ">
        <h1 className="text-[55px] font-playfair text-center">Reservation </h1>
        <p className="w-[90%] md:w-1/2 text-center">
          Hi, I’d like to make a reservation. Looking forward to your
          confirmation. Thanks!
        </p>
      </div>
      <ReservationForm userId={profile?.id ?? ""} />
    </div>
  );
};

export default Reservation;
