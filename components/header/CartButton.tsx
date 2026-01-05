"use client";
import { ShoppingCart, Trash } from "lucide-react";
import * as React from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { getTotalCartQuantity } from "@/lib/getTotalCartQuantity";
import { useCart } from "@/store/cart.store";
import Image from "next/image";
import NoData from "../shared/NoData";
import { formatCurrency } from "@/lib/formatter";
import { getSubTotal } from "@/lib/getSubTotal";
import { useRouter } from "next/navigation";

const deliveryFee = 5;
const CartButton = () => {
  const { cart, removeItemFromCart, addToCart, clearCart, removeItemCart } =
    useCart();
  const router = useRouter();
  const subTotal = getSubTotal(cart);
  return (
    // <Drawer direction="right">
    // {/* <DrawerTrigger asChild className="bg-white"> */}
    <div onClick={() => router.push("/cart")} className="relative block">
      {/* <div className="bg-primary absolute  -right-2.5 -top-3.75! text-white text-[11px] items-center justify-center flex p-1 rounded-full"> */}
      <div className="bg-primary absolute  start-4 -top-3.75! text-white text-[11px] items-center justify-center flex px-1 py-px rounded-full">
        {getTotalCartQuantity(cart)}
      </div>
      <ShoppingCart
        size={32}
        className=" cursor-pointer text-[45px]! hover:text-primary transition-all duration-300"
      />
    </div>
    //   </DrawerTrigger>
    //   <DrawerContent className="bg-white">
    //     <div className="mx-auto w-full max-w-md h-[100dvh] flex flex-col">
    //       <DrawerHeader className="border-b">
    //         <DrawerTitle className="text-xl font-bold">Your Cart</DrawerTitle>
    //         <DrawerDescription>Review your order</DrawerDescription>
    //       </DrawerHeader>

    //       {/* Cart Items */}
    //       <div className="flex-1 overflow-y-auto p-4 space-y-4">
    //         {cart.length === 0 && <NoData message="Your cart is empty" />}

    //         {cart.map((item) => (
    //           <div
    //             key={item.id}
    //             className="flex items-center gap-3 border-b pb-4"
    //           >
    //             <Image
    //               src={item.image}
    //               className="w-16 h-16 rounded-md"
    //               alt={item.name}
    //               width={300}
    //               height={400}
    //             />

    //             <div className="flex-1">
    //               <h3 className="font-semibold">{item.name}</h3>

    //               {item.size && (
    //                 <p className="text-sm text-gray-600">
    //                   <span className="text-black"> Size:</span>{" "}
    //                   {item.size.size}
    //                 </p>
    //               )}

    //               {item.extras && item.extras.length > 0 && (
    //                 <p className="text-sm text-gray-600">
    //                   <span className="text-black"> Extras: </span>

    //                   {item.extras
    //                     .map((e) => `${e.name} ${formatCurrency(e.price)}`)
    //                     .join(", ")}
    //                 </p>
    //               )}

    //               <div className="flex items-center gap-2 mt-2">
    //                 <Button
    //                   size="icon"
    //                   variant="default"
    //                   onClick={() => removeItemFromCart(item)}
    //                 >
    //                   <Minus size={14} />
    //                 </Button>

    //                 <span className="w-6 text-center font-semibold">
    //                   {item.quantity}
    //                 </span>

    //                 <Button
    //                   size="icon"
    //                   variant="default"
    //                   onClick={() => addToCart(item)}
    //                 >
    //                   <Plus size={14} />
    //                 </Button>
    //               </div>
    //             </div>

    //             <div className="text-right">
    //               <p className="font-semibold">
    //                 {formatCurrency(
    //                   (item.basePrice + (item.size?.price || 0)) *
    //                     (item.quantity ?? 1) +
    //                     (item.extras?.reduce(
    //                       (total, extra) => (extra.price ?? 0) + total,
    //                       0
    //                     ) ?? 0)
    //                 )}
    //               </p>

    //               <Button
    //                 size="icon"
    //                 variant="ghost"
    //                 onClick={() => removeItemCart(item)}
    //               >
    //                 <Button
    //                   className="rounded-sm! p-1! px-3! mt-5!"
    //                   variant={"outline"}
    //                 >
    //                   <Trash />
    //                 </Button>
    //               </Button>
    //             </div>
    //           </div>
    //         ))}
    //       </div>

    //       <div className="flex flex-col justify-end items-start ms-5 pt-6">
    //         <span className="text-accent font-medium">
    //           Subtotal:
    //           <strong className="text-primary">
    //             {formatCurrency(subTotal)}
    //           </strong>
    //         </span>
    //         <span className="text-accent font-medium">
    //           Delivery:
    //           <strong className="text-primary">
    //             {formatCurrency(deliveryFee)}
    //           </strong>
    //         </span>
    //         <span className="text-accent font-medium">
    //           Total:
    //           <strong className="text-primary">
    //             {formatCurrency(subTotal + deliveryFee)}
    //           </strong>
    //         </span>
    //       </div>

    //       {/* Footer */}
    //       <div className="border-t p-4">
    //         <Button className="w-full rounded-full text-lg">Checkout</Button>
    //       </div>
    //     </div>
    //   </DrawerContent>
    // </Drawer>
  );
};

export default CartButton;
