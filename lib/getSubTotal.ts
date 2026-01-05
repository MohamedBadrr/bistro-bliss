import { CartItem } from "@/store/cart.store";

export const getSubTotal = (cart: CartItem[]) => {
  return cart.reduce((total, cartItem) => {
    // item.basePrice + item.size.price + extra prices
    const extrasTotal = cartItem.extras?.reduce(
      (sum, extra) => sum + (extra.price || 0),
      0
    );

    const itemTotal =
      cartItem.basePrice + (extrasTotal || 0) + (cartItem.size?.price || 0);

    return total + itemTotal * cartItem.quantity!;
  }, 0);
};