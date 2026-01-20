import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import logo from "../assets/Logo-removebg-preview.png";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-slate-900 text-slate-400 py-20 px-6 font-sans"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-slate-800 pb-16">
          {/* Brand Area */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Logo Snacks del Mar"
                className="w-24 h-14 object-contain brightness-0 invert"
              />
              <span className="text-white font-black text-2xl tracking-tighter">
                Snacks del Mar
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8 text-balance">
              Llevamos la frescura del Caribe directamente a tu puerta. Calidad,
              sabor y tradición en cada entrega.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest text-sm">
              Explora
            </h4>
            <ul className="space-y-4">
              {["Inicio", "Productos", "Nuestra Historia", "Delivery"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest text-sm">
              Atención al Cliente
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2.5 rounded-xl">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <span className="block text-slate-300 font-bold text-sm">
                      WhatsApp
                    </span>
                    <a
                      href="tel:+573002453021"
                      className="text-lg hover:text-primary transition-colors"
                    >
                      +57 300 245 3021
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2.5 rounded-xl">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <span className="block text-slate-300 font-bold text-sm">
                      Email
                    </span>
                    <a
                      href="mailto:hola@snacksdelmar.com"
                      className="hover:text-primary transition-colors"
                    >
                      hola@snacksdelmar.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2.5 rounded-xl">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <span className="block text-slate-300 font-bold text-sm">
                      Cobertura
                    </span>
                    <p className="text-balance">
                      Toda la zona norte y centro de la ciudad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">
            © {new Date().getFullYear()} Snacks del Mar. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Términos
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
