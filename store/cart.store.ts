"use client";

import { ProductExtra, ProductSize } from "@/types/Product";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type CartItem = {
  name: string;
  id: string;
  image: string;
  basePrice: number;
  quantity?: number;
  size?: ProductSize;
  extras?: ProductExtra[];
  uniqueId?: string;
};

const generateUniqueId = (item: CartItem): string => {
  const sizeId = item.size?.id || "no-size";
  const extrasIds = item.extras?.map((e) => e.id).sort().join("-") || "no-extras";
  return `${item.id}-${sizeId}-${extrasIds}`;
};

type Store = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeItemFromCart: (uniqueId: string) => void;
  removeItemCart: (uniqueId: string) => void;
  clearCart: () => void;
  updateQuantity: (uniqueId: string, quantity: number) => void;
};

export const useCart = create<Store>()(
  persist(
    (set) => ({
      cart: [],

      addToCart: (item) => {
        set((state) => {
          const uniqueId = generateUniqueId(item);
          const existingItem = state.cart.find((c) => c.uniqueId === uniqueId);

          if (existingItem) {
            return {
              cart: state.cart.map((c) =>
                c.uniqueId === uniqueId
                  ? { ...c, quantity: (c.quantity ?? 0) + 1 }
                  : c
              ),
            };
          }

          return {
            cart: [...state.cart, { ...item, quantity: 1, uniqueId }],
          };
        });
      },

      removeItemFromCart: (uniqueId) => {
        set((state) => {
          const existItem = state.cart.find((c) => c.uniqueId === uniqueId);
          if (!existItem) return { cart: state.cart };

          if ((existItem.quantity ?? 0) <= 1) {
            return { cart: state.cart.filter((c) => c.uniqueId !== uniqueId) };
          }

          return {
            cart: state.cart.map((c) =>
              c.uniqueId === uniqueId
                ? { ...c, quantity: (c.quantity ?? 0) - 1 }
                : c
            ),
          };
        });
      },

      removeItemCart: (uniqueId) =>
        set((state) => ({
          cart: state.cart.filter((c) => c.uniqueId !== uniqueId),
        })),

      updateQuantity: (uniqueId, quantity) => {
        set((state) => {
          if (quantity <= 0) {
            return { cart: state.cart.filter((c) => c.uniqueId !== uniqueId) };
          }
          return {
            cart: state.cart.map((c) =>
              c.uniqueId === uniqueId ? { ...c, quantity } : c
            ),
          };
        });
      },

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cartItems",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ cart: state.cart }),
    }
  )
);
