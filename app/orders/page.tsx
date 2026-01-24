export const metadata = {
  title: "Bistro Bliss | My Orders",
  description:
    "View your order history and track your current orders at Bistro Bliss.",
};

import { getMe } from "@/services/user/getMe";
import MyOrdersTable from "./_components/MyOrdersTable";

const MyOrders = async () => {
  const profile = await getMe();

  return (
    <main className="py-20 container min-h-screen">
      <h1 className="text-[55px] font-playfair text-center">My Orders</h1>
      <div className="mt-10">
        <MyOrdersTable userId={profile.id} />
      </div>
    </main>
  );
};
export default MyOrders;
