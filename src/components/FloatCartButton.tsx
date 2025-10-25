"use client";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";


import { useCart } from "../context/useCart";
import CartModal from "./CartModal";

export default function FloatButton() {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const isEmpty = totalItems === 0;
  const btnColor = isEmpty
    ? "bg-gray-400 hover:bg-gray-500"
    : "bg-blue-600 hover:bg-blue-700";

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md animate-bounce">
              {totalItems}
            </span>
          )}
          <button
            onClick={() => !isEmpty && setOpen(true)}
            className={`btn rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 ${btnColor}`}
            disabled={isEmpty}
            title={isEmpty ? "Carrito vacío" : "Ver carrito"}
          >
            <ShoppingCart
              className={`w-6 h-6 ${
                isEmpty ? "text-gray-200" : "text-white"
              } transition-colors duration-300`}
            />
          </button>
        </div>
      </div>

      {/* Modal */}
      <CartModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
