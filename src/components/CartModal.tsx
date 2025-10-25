"use client";

import { X } from "lucide-react";
import { useCart } from "../context/useCart";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: Props) {
  const { cart, clearCart } = useCart();

  if (!isOpen) return null;

  const total = cart.reduce((acc, p) => acc + p.quantity * 20000, 0);

  const handleWhatsApp = () => {
    const text = cart.map(p => `${p.title} x${p.quantity}`).join(", ");
    const message = `Hola, quiero comprar: ${text}. Total estimado: $${total}`;
     const phone = "573002453021";
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-3xl shadow-2xl w-11/12 sm:w-[420px] p-6 relative animate-fadeIn">
        {/* Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition"
        >
          <X size={22} />
        </button>

        {/* Título */}
        <h2 className="text-2xl font-semibold mb-5 text-center text-gray-800">
          🛍️ Tu carrito
        </h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500 py-6">
            Aún no tienes productos en el carrito.
          </p>
        ) : (
          <>
            {/* Lista de productos */}
            <ul className="max-h-72 overflow-y-auto divide-y divide-gray-200 mb-4">
              {cart.map((p, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 py-3 transition-all hover:bg-gray-50 rounded-lg px-2"
                >
                  {/* Imagen */}
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-14 h-14 object-cover rounded-lg shadow-sm border border-gray-200"
                  />

                  {/* Info */}
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{p.title}</p>
                    <p className="text-sm text-gray-500">
                      Cantidad: {p.quantity}
                    </p>
                  </div>

                  {/* Precio */}
                  <p className="font-semibold text-blue-600 text-sm">
                    ${p.quantity * 20000}
                  </p>
                </li>
              ))}
            </ul>

            {/* Total */}
            <div className="border-t pt-4 flex justify-between text-lg font-semibold text-gray-700">
              <span>Total</span>
              <span className="text-blue-600">${total}</span>
            </div>

            {/* Botones */}
            <div className="mt-6 flex flex-col gap-3">
              <button
                onClick={handleWhatsApp}
                className="bg-green-500 text-white py-2.5 rounded-xl font-medium shadow-md hover:bg-green-600 transition-all"
              >
                📲 Enviar pedido por WhatsApp
              </button>

              <button
                onClick={clearCart}
                className="bg-gray-100 text-gray-700 py-2.5 rounded-xl font-medium hover:bg-gray-200 transition-all"
              >
                🗑️ Vaciar carrito
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
