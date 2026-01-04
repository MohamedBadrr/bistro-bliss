import { ProductExtra, ProductSize } from "@/types/Products";
import { create } from "zustand";
export type CartItem = {
  name: string;
  id: string;
  image: string;
  basePrice: number;
  quantity?: number;
  size?: ProductSize;
  extras?: ProductExtra[];
};
type Store = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeItemFromCart: (item: CartItem) => void;
  removeItemCart: (item: CartItem) => void;
  clearCart: ()=>void
};

export const useCart = create<Store>()((set) => ({
  cart: [],
  addToCart: (item) => {
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? {
                  ...cartItem,
                  quantity: (cartItem.quantity ?? 0) + 1,
                  size: item.size,
                  extras: item.extras,
                }
              : cartItem
          ),
        };
      }

      return {
        cart: [...state.cart, { ...item, quantity: 1 }],
      };
    });
  },
  removeItemFromCart: (item) => {
    set((state) => {
      const existItem = state.cart.find((cartItem) => cartItem.id === item.id);
      if (existItem) {
        if (existItem.quantity === 1)
          return {
            cart: state.cart.filter((cartItem) => cartItem.id !== item.id),
          };
      }

      return {
        cart: state.cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: (cartItem.quantity ?? 0) - 1 }
            : cartItem
        ),
      };
    });
  },
  removeItemCart:(item)=>{
    set((state)=>{
       const existItem = state.cart.find((cartItem) => cartItem.id === item.id);
       if(existItem){
        return {
          cart: state.cart.filter((cartItem)=> cartItem.id !== item.id)
        }
       } 
       return {
        cart : state.cart
       }
    })
  },
  clearCart:()=>{
    set(()=>({cart:[]}))
  }
}));
