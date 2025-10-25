import { useState } from "react";
import { useCart } from "../context/useCart";
interface CardProps {
  title: string;
  img?: string;
  description: string;
}
export default function Card({ title, img, description }: CardProps) {
  const { addToCart } = useCart();
  const [clicked, setClicked] = useState(false);

  const handleAdd = () => {
    setClicked(true);
    addToCart({ title, img, description, quantity: 1 });
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <div className="bg-gray-100 w-full max-w-[230px] rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col overflow-hidden">
      <figure className="w-full h-44 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover rounded-t-3xl"
        />
      </figure>

      <div className="flex flex-col justify-between flex-grow p-4">
        <div>
          <h2 className="text-base font-semibold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-600 mt-1 line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 justify-end mt-3">
          <button
            onClick={handleAdd}
            className={`btn btn-sm btn-secondary w-full sm:w-auto transition-transform duration-200 ${
              clicked ? "scale-90 bg-secondary-focus" : "scale-100"
            }`}
          >
            {clicked ? "✔ Añadido!" : "Añadir"}
          </button>
        </div>
      </div>
    </div>
  );
}
