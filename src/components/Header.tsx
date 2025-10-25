import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Logo-removebg-preview.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: "smooth" });
};

  return (
    <header  className="fixed top-0 left-0 w-full z-[60]">
      {/* Navbar principal */}
      <div className="navbar bg-gradient-to-l from-[#0E4D92] via-[#0077B6] to-[#00B4D8] shadow-md text-white px-6">
        <div className="flex-1 flex items-center gap-2">
          <img
            src={logo}
            alt="Logo Snacks del Mar"
            className="w-28 h-16 object-contain"
          />
        </div>

        {/* Menú escritorio */}
        <div className="hidden md:flex flex-none">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li><a href="#productos">Productos</a></li>
            <li><a href="#pedidos">Pedidos</a></li>
            <li><a href="#contacto">Contacto</a></li>
           <li><button onClick={() => scrollToSection("footer")}>Sobre Nosotros</button></li>

          </ul>
          <button className="ml-4 btn btn-sm bg-white text-[#0077B6] hover:bg-[#CAF0F8] font-bold">
            Ordenar Ahora
          </button>
        </div>

        {/* Botón menú móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-ghost"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menú móvil animado */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Fondo desenfocado (ahora más claro y debajo del header) */}
            <motion.div
              className="fixed inset-0 bg-[#0077B6]/40 backdrop-blur-sm z-[40]"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Contenedor del menú */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#0096C7] text-white shadow-lg rounded-b-2xl absolute top-[64px] right-0 left-0 p-4 z-[60]"
            >
              <ul className="space-y-3 text-center font-semibold">
                
                <li><a href="#productos" onClick={() => setMenuOpen(false)}>Productos</a></li>
                <li><a href="#pedidos" onClick={() => setMenuOpen(false)}>Pedidos</a></li>
                <li><a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a></li>
                <li><a href="#footer" onClick={() => setMenuOpen(false)}>Sobre Nosotros</a></li>
                <li>
                  <button
                    className="btn btn-sm bg-white text-[#0077B6] mt-2 font-bold w-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    Ordenar Ahora
                  </button>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
