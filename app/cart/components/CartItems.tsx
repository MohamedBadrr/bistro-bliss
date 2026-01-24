"use client";

import NoData from "@/components/shared/NoData";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/formatter";
import { getSubTotal } from "@/lib/getSubTotal";
import { CartItem, useCart } from "@/store/cart.store";
import { ProductExtra } from "@/types/Product";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import CheckoutForm from "./CheckoutForm";
import { UserProfile } from "@/services/user/getMe";

function CartItems({ profile }: { profile: UserProfile }) {
  const deliveryFee = 5;
  const { cart, removeItemCart, updateQuantity } = useCart();
  const subTotal = getSubTotal(cart);
  const router = useRouter();

  const handleIncreaseQuantity = (
    uniqueId: string,
    currentQuantity: number
  ) => {
    updateQuantity(uniqueId, currentQuantity + 1);
    toast.success("item added Successfully");
  };

  const handleDecreaseQuantity = (
    uniqueId: string,
    currentQuantity: number
  ) => {
    if (currentQuantity > 1) {
      updateQuantity(uniqueId, currentQuantity - 1);
      toast.success("item removed Successfully");
    } else {
      removeItemCart(uniqueId);
      toast.success("item removed Successfully");
    }
  };

  const getItemTotalPrice = (item: CartItem) => {
    const extrasTotal =
      item.extras?.reduce(
        (sum: number, extra: ProductExtra) => sum + (extra.price || 0),
        0
      ) || 0;
    return item.basePrice + (item.size?.price || 0) + extrasTotal;
  };

  return (
    <div
      className={`${
        cart.length > 0 ? "grid grid-cols-1 lg:grid-cols-2 gap-10" : ""
      }`}
    >
      <div className="">
        {cart && cart.length > 0 ? (
          <>
            <ul className="space-y-6">
              {cart.map((item) => {
                const itemPrice = getItemTotalPrice(item);
                return (
                  <li
                    key={item.uniqueId}
                    className="border border-gray-200 rounded-lg p-4 w-full hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col lg:flex-row md:flex-wrap gap-4 justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden border border-gray-100">
                          <Image
                            src={item.image}
                            className="object-cover"
                            alt={item.name}
                            fill
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-lg text-primary mb-2">
                            {item.name}
                          </h4>

                          <div className="space-y-1.5 mb-3">
                            {item.size && (
                              <div className="flex items-center gap-2 text-sm">
                                <span className="font-semibold text-gray-700">
                                  Size:
                                </span>
                                <span className="text-accent">
                                  {item.size.size}
                                </span>
                                <span className="text-primary font-medium">
                                  {formatCurrency(
                                    item.size.price + item.basePrice
                                  )}
                                </span>
                              </div>
                            )}

                            {item.extras && item.extras.length > 0 && (
                              <div className="text-sm">
                                <span className="font-semibold text-gray-700">
                                  Extras:
                                </span>
                                <ul className="mt-1 space-y-1 ml-4">
                                  {item.extras.map((extra) => (
                                    <li
                                      key={extra.id}
                                      className="flex items-center gap-2"
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                      <span className="text-accent">
                                        {extra.name}
                                      </span>
                                      <span className="text-primary font-medium">
                                        {formatCurrency(extra.price)}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>

                          <div className="flex items-center gap-3 bg-gray-50 rounded-full w-fit px-2 py-1">
                            <Button
                              onClick={() =>
                                handleDecreaseQuantity(
                                  item.uniqueId!,
                                  item.quantity!
                                )
                              }
                              variant="ghost"
                              size="sm"
                              className="h-7 w-7 p-0 rounded-full hover:bg-primary hover:text-white"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </Button>
                            <span className="font-bold text-base min-w-[2rem] text-center">
                              {item.quantity}
                            </span>
                            <Button
                              onClick={() =>
                                handleIncreaseQuantity(
                                  item.uniqueId!,
                                  item.quantity!
                                )
                              }
                              variant="ghost"
                              size="sm"
                              className="h-7 w-7 p-0 rounded-full hover:bg-primary hover:text-white"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className=" w-full flex lg:flex-row items-center lg:items-center gap-4 justify-between lg:justify-between lg:min-w-[140px]">
                        <div className="text-right">
                          <div className="text-xs text-gray-500 mb-1">
                            {formatCurrency(itemPrice)} × {item.quantity}
                          </div>
                          <div className="font-bold text-xl text-primary">
                            {formatCurrency(itemPrice * item.quantity!)}
                          </div>
                        </div>
                        <Button
                          onClick={() => {
                            removeItemCart(item.uniqueId!);
                            toast.success("Item deleted successfully.");
                          }}
                          variant="outline"
                          size="sm"
                          className="h-9 w-9 p-0 border-red-200 hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 pt-6 border-t-2 border-gray-200">
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center text-base">
                  <span className="text-gray-700 font-medium">Subtotal:</span>
                  <strong className="text-black text-lg">
                    {formatCurrency(subTotal)}
                  </strong>
                </div>
                <div className="flex justify-between items-center text-base">
                  <span className="text-gray-700 font-medium">Delivery:</span>
                  <strong className="text-black text-lg">
                    {formatCurrency(deliveryFee)}
                  </strong>
                </div>
                <div className="border-t-2 border-gray-300 pt-3 flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">
                    Total:
                  </span>
                  <span className="text-2xl font-bold text-primary">
                    {formatCurrency(subTotal + deliveryFee)}
                  </span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full items-center justify-center flex flex-col py-12">
            <NoData
              className="text-accent w-full"
              message="There are no items in your cart. Add some delicious dishes!"
            />
            <Button
              variant="link"
              onClick={() => router.push("/menu")}
              className="mt-6 rounded-full px-8"
            >
              Go To Menu
            </Button>
          </div>
        )}
      </div>

      {cart.length > 0 && <CheckoutForm profile={profile} />}
    </div>
  );
}

export default CartItems;
