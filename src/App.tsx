import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import Carrusell from "./components/Carrusell";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FloatCartButton from "./components/FloatCartButton";
import { products, Brand } from "./data";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [activeBrand, setActiveBrand] = useState<Brand>("Snacks del Mar");
  const [activeCategory, setActiveCategory] = useState<string>("Todos");

  const brandCategories = {
    "Snacks del Mar": ["Todos", "Cocktails"],
    "Fritos de la Casa": ["Todos", "Arepas", "Deditos", "Fritos", "Snacks"],
  };

  const categories = brandCategories[activeBrand];

  useEffect(() => {
    setActiveCategory("Todos");
    document.documentElement.setAttribute(
      "data-theme",
      activeBrand === "Fritos de la Casa" ? "fritos" : "default",
    );
  }, [activeBrand]);

  const filteredProducts = products.filter(
    (p) =>
      p.brand === activeBrand &&
      (activeCategory === "Todos" || p.category === activeCategory),
  );

  return (
    <div className="premium-gradient min-h-screen">
      <Header activeBrand={activeBrand} onBrandChange={setActiveBrand} />
      <Carrusell activeBrand={activeBrand} />

      <main className="container mx-auto px-4 py-16 sm:py-20" id="productos">
        {/* Business Selector / Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/50 backdrop-blur-md p-1.5 rounded-2xl border border-white/50 shadow-lg flex gap-1">
            {(["Snacks del Mar", "Fritos de la Casa"] as Brand[]).map(
              (brand) => (
                <button
                  key={brand}
                  onClick={() => setActiveBrand(brand)}
                  className={`px-6 py-3 rounded-xl font-black text-sm transition-all duration-300 ${
                    activeBrand === brand
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "text-slate-500 hover:bg-white/50"
                  }`}
                >
                  {brand === "Snacks del Mar"
                    ? "🍹 Coctelería"
                    : "🥟 Fritos & Arepas"}
                </button>
              ),
            )}
          </div>
        </div>

        <div className="text-center mb-16">
          <motion.h2
            key={activeBrand}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-black text-slate-800 mb-4 tracking-tight"
          >
            {activeBrand === "Snacks del Mar"
              ? "Snacks del Mar"
              : "Fritos de la Casa"}
          </motion.h2>
          <div className="w-24 h-2 bg-primary mx-auto rounded-full mb-8"></div>

          {/* Categories Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white/70 text-slate-500 hover:bg-white shadow-sm border border-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 place-items-center"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-[340px]"
              >
                <Card
                  title={product.name}
                  img={product.image}
                  description={product.description}
                  price={product.price}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      <FloatCartButton />
      <Footer />
    </div>
  );
}

export default App;
