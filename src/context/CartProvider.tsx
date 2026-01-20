import { useState, ReactNode } from "react";
import { CartContext } from "./CartContext";

interface Product {
  title: string;
  img?: string;
  description: string;
  quantity: number;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.title === product.title);
      if (existing) {
        return prev.map((p) =>
          p.title === product.title ? { ...p, quantity: p.quantity + 1 } : p,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productTitle: string) => {
    setCart((prev) => prev.filter((p) => p.title !== productTitle));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
