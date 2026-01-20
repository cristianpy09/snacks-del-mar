import { useState } from "react";
import { useCart } from "../context/useCart";
import { Plus, Check } from "lucide-react";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  img?: string;
  description: string;
  price: number;
}

export default function Card({ title, img, description, price }: CardProps) {
  const { addToCart } = useCart();
  const [clicked, setClicked] = useState(false);

  const handleAdd = () => {
    setClicked(true);
    addToCart({ title, img, description, quantity: 1 });
    setTimeout(() => setClicked(false), 800);
  };

  const formattedPrice = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white/70 backdrop-blur-md border border-white/20 w-full max-w-[320px] rounded-[2rem] shadow-xl shadow-slate-200/50 flex flex-col overflow-hidden group"
    >
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-lg border border-white/50">
          <span className="font-black text-primary text-lg">
            {formattedPrice}
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-between flex-grow p-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800 leading-tight mb-2 group-hover:text-primary transition-colors">
            {title}
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        <div className="mt-6">
          <button
            onClick={handleAdd}
            disabled={clicked}
            className={`w-full py-3 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
              clicked
                ? "bg-emerald-500 text-white"
                : "bg-slate-900 text-white hover:bg-primary hover:shadow-lg hover:shadow-primary/30"
            }`}
          >
            {clicked ? (
              <>
                <Check className="w-5 h-5 animate-in zoom-in duration-300" />
                <span>¡Agregado!</span>
              </>
            ) : (
              <>
                <Plus className="w-5 h-5" />
                <span>Agregar al Carrito</span>
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
