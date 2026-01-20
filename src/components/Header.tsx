import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, PhoneCall, Info, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Logo-removebg-preview.png";
import { Brand } from "../data";

interface HeaderProps {
  activeBrand: Brand;
  onBrandChange: (brand: Brand) => void;
}

export default function Header({ activeBrand, onBrandChange }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const menuItems = [
    { name: "Inicio", id: "home", icon: MapPin },
    { name: "Productos", id: "productos", icon: ShoppingBag },
    { name: "Nosotros", id: "footer", icon: Info },
    { name: "Contacto", id: "contacto", icon: PhoneCall },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4 sm:py-6"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <nav
          className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-500 ${
            isScrolled
              ? "bg-white/80 backdrop-blur-lg shadow-lg border border-white/20"
              : "bg-primary text-white shadow-xl shadow-primary/20"
          }`}
        >
          {/* Logo Area */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <img
              src={logo}
              alt="Logo"
              className={`object-contain transition-all duration-300 ${isScrolled ? "w-16 h-10" : "w-20 h-12 sm:w-24 sm:h-14"}`}
            />
            <span
              className={`font-black text-lg sm:text-xl tracking-tighter ${!isScrolled ? "block" : "hidden lg:block"}`}
            >
              {activeBrand === "Snacks del Mar"
                ? "Snacks del Mar"
                : "Fritos de la Casa"}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6 font-bold">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm tracking-wide transition-all relative py-1 hover:scale-105 active:scale-95 ${
                      isScrolled
                        ? "text-slate-600 hover:text-primary"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="h-6 w-px bg-slate-200/50 mx-2 hidden lg:block"></div>
            <button
              onClick={() =>
                onBrandChange(
                  activeBrand === "Snacks del Mar"
                    ? "Fritos de la Casa"
                    : "Snacks del Mar",
                )
              }
              className={`btn btn-xs rounded-full font-black border-none transition-all ${
                isScrolled
                  ? "bg-slate-100 text-slate-800 hover:bg-slate-200"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              Cambiar a{" "}
              {activeBrand === "Snacks del Mar" ? "🥟 Fritos" : "🍹 Cocteles"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2.5 rounded-xl transition-colors ${
                isScrolled
                  ? "text-primary hover:bg-sky-50"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden absolute top-20 left-4 right-4 z-[70]"
          >
            <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 p-8 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">
                  Secciones
                </span>
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 text-slate-700 font-black transition-all active:scale-95"
                  >
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    {item.name}
                  </button>
                ))}
              </div>

              <div className="h-px bg-slate-100 mx-2"></div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">
                  Nuestro Negocio
                </span>
                <button
                  onClick={() => {
                    onBrandChange(
                      activeBrand === "Snacks del Mar"
                        ? "Fritos de la Casa"
                        : "Snacks del Mar",
                    );
                    setMenuOpen(false);
                  }}
                  className={`flex items-center gap-4 p-4 rounded-2xl font-black transition-all border-2 ${
                    activeBrand === "Snacks del Mar"
                      ? "border-amber-100 bg-amber-50 text-amber-700 hover:bg-amber-100"
                      : "border-sky-100 bg-sky-50 text-sky-700 hover:bg-sky-100"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg ${activeBrand === "Snacks del Mar" ? "bg-amber-200" : "bg-sky-200"}`}
                  >
                    {activeBrand === "Snacks del Mar" ? "🥟" : "🍹"}
                  </div>
                  Ver{" "}
                  {activeBrand === "Snacks del Mar"
                    ? "Fritos de la Casa"
                    : "Snacks del Mar"}
                </button>
              </div>

              <button
                className="btn bg-primary hover:bg-primary-focus text-white border-none rounded-2xl font-black py-4 shadow-xl shadow-primary/20 h-auto"
                onClick={() => scrollToSection("productos")}
              >
                Ordenar Ahora
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
