import CheckoutForm from "./components/CheckoutForm";
import CartItems from "./components/CartItems";

const Page = () => {
  return (
    <main>
      <section className="pt-25 pb-5 min-h-screen">
        <div className="container">
          <h2 className="text-[50px] text-primary mb-10 font-playfair text-center ">
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
