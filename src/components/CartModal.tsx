import { X, Trash2, ShoppingBag, Send } from "lucide-react";
import { useCart } from "../context/useCart";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: Props) {
  const { cart, clearCart, removeFromCart } = useCart();

  const total = cart.reduce((acc, p) => {
    // We try to get price from p or default to a reasonable value if not present
    // Note: p in cart should ideally have price, but if not we assume a base price for safety
    const price = (p as any).price || 15000;
    return acc + p.quantity * price;
  }, 0);

  const formattedTotal = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(total);

  const handleWhatsApp = () => {
    if (cart.length === 0) return;

    const itemsText = cart
      .map((p) => `• ${p.title} (${p.quantity}x)`)
      .join("\n");
    const message = `*Snacks del Mar - Nuevo Pedido*\n\nHola, me gustaría ordenar:\n\n${itemsText}\n\n*Total estimado:* ${formattedTotal}\n\nPor favor, confírmenme para coordinar la entrega. 🙏`;
    const phone = "573002453021"; // Keeping the original phone

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white/90 backdrop-blur-2xl w-full max-w-md rounded-[2.5rem] shadow-2xl border border-white/50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2.5 rounded-2xl">
                  <ShoppingBag className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-black text-slate-800">
                  Tu Carrito
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-slate-400" />
              </button>
            </div>

            {/* List */}
            <div className="p-8 max-h-[50vh] overflow-y-auto custom-scrollbar">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border border-dashed border-slate-200">
                    <ShoppingBag className="w-8 h-8 text-slate-300" />
                  </div>
                  <p className="text-slate-400 font-medium">
                    Tu carrito está vacío
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-4 text-primary font-bold hover:underline"
                  >
                    Ir a ver el menú
                  </button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {cart.map((p, i) => (
                    <motion.li
                      key={i}
                      layout
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-4 group"
                    >
                      <img
                        src={p.img}
                        alt={p.title}
                        className="w-20 h-20 object-cover rounded-2xl shadow-sm"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-800 line-clamp-1">
                          {p.title}
                        </h3>
                        <p className="text-slate-400 text-sm">
                          Cantidad: {p.quantity}
                        </p>
                        <p className="text-primary font-black mt-1">
                          {new Intl.NumberFormat("es-CO", {
                            style: "currency",
                            currency: "COP",
                            maximumFractionDigits: 0,
                          }).format(
                            (p as any).price * p.quantity || 15000 * p.quantity,
                          )}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(p.title)}
                        className="p-2 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all opacity-0 group-hover:opacity-100"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-8 bg-slate-50/50 border-t border-slate-100">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-slate-500 font-medium">
                    Total a pagar
                  </span>
                  <span className="text-3xl font-black text-slate-800">
                    {formattedTotal}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <button
                    onClick={handleWhatsApp}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center gap-3 active:scale-95"
                  >
                    <Send className="w-5 h-5" />
                    Enviar Pedido por WhatsApp
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full py-3 text-slate-400 hover:text-slate-600 font-bold transition-colors text-sm"
                  >
                    Vaciar Carrito
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
