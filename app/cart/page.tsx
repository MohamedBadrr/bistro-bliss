import HeadingWithTitle from "@/components/shared/HeadingWithTitle";
import CartItems from "./components/CartItems";
import CheckoutForm from "./components/CheckoutForm";
import Heading from "@/components/shared/Heading";

const Page = () => {
  return (
    <main>
      <section className="py-5 ">
        <div className="container">
          <h2 className="text-[50px] text-primary mb-5 font-playfair text-center ">
            Shopping Cart
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <CartItems />
            <CheckoutForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
