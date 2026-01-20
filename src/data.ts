import cocktail1 from "./assets/Producto-1.jpg";

export type Brand = "Snacks del Mar" | "Fritos de la Casa";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: "Cocktails" | "Arepas" | "Deditos" | "Snacks" | "Fritos";
  image: string;
  featured?: boolean;
  brand: Brand;
}

export const products: Product[] = [
  // Brand: Snacks del Mar (Cocktails)
  {
    id: 1,
    name: "Coctel de Camarón Clásico",
    description: "Camarones frescos maridajados con nuestra salsa especial de la casa, cebolla y limón.",
    price: 15000,
    category: "Cocktails",
    image: cocktail1,
    featured: true,
    brand: "Snacks del Mar",
  },
  {
    id: 4,
    name: "Coctel Mixto del Mar",
    description: "Una explosión de sabor con camarón, pulpo y calamar en salsa tropical.",
    price: 18000,
    category: "Cocktails",
    image: cocktail1,
    brand: "Snacks del Mar",
  },
  {
    id: 7,
    name: "Coctel de Camarón Picante",
    description: "Para los valientes, nuestro coctel clásico con un toque de ají caribeño.",
    price: 16000,
    category: "Cocktails",
    image: cocktail1,
    brand: "Snacks del Mar",
  },

  // Brand: Fritos de la Casa (Arepas, Deditos, etc.)
  {
    id: 2,
    name: "Arepa de Huevo Premium",
    description: "La tradicional arepa de huevo con un toque secreto de Snacks del Mar.",
    price: 5000,
    category: "Arepas",
    image: cocktail1,
    brand: "Fritos de la Casa",
  },
  {
    id: 3,
    name: "Deditos de Queso (6 und)",
    description: "Crujientes deditos rellenos de queso costeño de primera calidad.",
    price: 8000,
    category: "Deditos",
    image: cocktail1,
    featured: true,
    brand: "Fritos de la Casa",
  },
  {
    id: 5,
    name: "Arepa con Todo",
    description: "Arepa rellena de carne, pollo, chorizo y queso derretido.",
    price: 12000,
    category: "Arepas",
    image: cocktail1,
    brand: "Fritos de la Casa",
  },
  {
    id: 6,
    name: "Kibbeh Tradicional",
    description: "Fritos árabes con el sazón caribeño que nos caracteriza.",
    price: 4000,
    category: "Snacks",
    image: cocktail1,
    brand: "Fritos de la Casa",
  },
  {
    id: 8,
    name: "Caribañola de Carne",
    description: "Masa de yuca rellena de carne molida bien sazonada y frita.",
    price: 3500,
    category: "Fritos",
    image: cocktail1,
    featured: true,
    brand: "Fritos de la Casa",
  },
  {
    id: 9,
    name: "Caribañola de Queso",
    description: "Deliciosa masa de yuca rellena de queso costeño derretido.",
    price: 3000,
    category: "Fritos",
    image: cocktail1,
    brand: "Fritos de la Casa",
  }
];
