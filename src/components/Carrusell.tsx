import { motion, AnimatePresence } from "framer-motion";
import { Brand } from "../data";

interface Props {
  activeBrand: Brand;
}

export default function Carrusell({ activeBrand }: Props) {
  const content = {
    "Snacks del Mar": {
      title: "Snacks",
      subtitle: "del Mar",
      description:
        "Disfruta de la frescura del océano en cada bocado. Cocteles premium y ceviches frescos con la mejor sazón del Caribe.",
      badge: "🌊 Sabor Fresco del Mar",
      image:
        "https://cdn.pixabay.com/photo/2018/04/10/18/21/seafood-3308292_1280.jpg",
      gradient: "from-slate-900/80 via-slate-900/40 to-transparent",
    },
    "Fritos de la Casa": {
      title: "Fritos",
      subtitle: "de la Casa",
      description:
        "Arepas de huevo, caribañolas y deditos de queso. Crujientes, calienticos y con ese sabor tradicional que te encanta.",
      badge: "🥟 Crujientes y Sabrosos",
      image:
        "https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg", // Example fritos-like background
      gradient: "from-amber-950/80 via-transparent to-transparent",
    },
  };

  const current = content[activeBrand];

  return (
    <div
      className="relative h-[85vh] sm:h-[90vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center pt-24 sm:pt-20"
      id="home"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeBrand}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 scale-105"
            style={{
              backgroundImage: `url(${current.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${current.gradient}`}
            ></div>
            <div className="absolute inset-0 bg-slate-900/20"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content Area */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBrand}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-block py-1.5 px-5 rounded-full bg-white/20 backdrop-blur-xl text-white font-black text-xs sm:text-sm mb-6 border border-white/30 uppercase tracking-widest">
                {current.badge}
              </span>
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-white leading-[0.95] mb-6 tracking-tighter">
                {current.title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">
                  {current.subtitle}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-10 max-w-xl text-balance font-medium">
                {current.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() =>
                    document
                      .getElementById("productos")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn btn-lg bg-primary hover:bg-primary-focus text-white border-none rounded-[1.5rem] px-10 shadow-2xl shadow-primary/40 transition-all hover:scale-105 h-auto py-4"
                >
                  Explorar el Menú
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("footer")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn btn-lg bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 rounded-[1.5rem] px-10 transition-all hover:scale-105 h-auto py-4"
                >
                  ¿Dónde estamos?
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 z-20">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[80px] sm:h-[120px] fill-white transition-all"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
  );
}
