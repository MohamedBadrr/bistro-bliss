import { CartItem } from "@/store/cart.store";
import { getSubTotal } from "./getSubTotal";

export const getTotalAmount = (cart: CartItem[]) => {
  const deliveryFee = 5;
  return getSubTotal(cart) + deliveryFee;
};
