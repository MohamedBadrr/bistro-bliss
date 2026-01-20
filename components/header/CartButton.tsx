"use client";
import { ShoppingCart } from "lucide-react";
import { getTotalCartQuantity } from "@/lib/getTotalCartQuantity";
import { useCart } from "@/store/cart.store";
import { useRouter } from "next/navigation";

const CartButton = () => {
  const { cart } = useCart();
  const router = useRouter();
  return (
    <div onClick={() => router.push("/cart")} className="relative block">
     {getTotalCartQuantity(cart) > 0 ?  <div className="bg-primary absolute  start-4 -top-3.75! text-white text-[11px] items-center justify-center flex px-1 py-px w-5! h-5! rounded-full">
        {getTotalCartQuantity(cart)}
      </div> : <></>}
      <ShoppingCart
        size={28}
        className=" cursor-pointer text-[45px]! hover:text-primary transition-all duration-300"
      />
    </div>
  );
};

export default CartButton;
