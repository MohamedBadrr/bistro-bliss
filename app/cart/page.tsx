export const metadata = {
  title: "Bistro Bliss | Shopping Cart",
  description: "Review and manage the items in your shopping cart.",
};

import { getMe } from "@/services/user/getMe";
import CartItems from "./components/CartItems";

const Page = async () => {
  const profile = await getMe();
  return (
    <main>
      <section className="pt-25 pb-5 min-h-screen">
        <div className="container">
          <h2 className="text-[50px] text-primary mb-10 font-playfair text-center ">
            Shopping Cart
          </h2>

          <CartItems profile={profile} />
        </div>
      </section>
    </main>
  );
};

export default Page;
