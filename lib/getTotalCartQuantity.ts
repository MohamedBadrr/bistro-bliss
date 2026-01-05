import { CartItem } from "@/store/cart.store";

export const getTotalCartQuantity = (cart: CartItem[]) => {
  return cart.reduce((quantity, item) => item.quantity! + quantity, 0);
};
