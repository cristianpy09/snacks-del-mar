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
    image: "https://cdn.pixabay.com/photo/2014/11/05/15/57/shrimp-518032_1280.jpg",
    featured: true,
    brand: "Snacks del Mar",
  },
  {
    id: 4,
    name: "Coctel Mixto del Mar",
    description: "Una explosión de sabor con camarón, pulpo y calamar en salsa tropical.",
    price: 18000,
    category: "Cocktails",
    image: "https://cdn.pixabay.com/photo/2016/08/30/11/14/shrine-1630343_1280.jpg",
    brand: "Snacks del Mar",
  },
  {
    id: 7,
    name: "Coctel de Camarón Picante",
    description: "Para los valientes, nuestro coctel clásico con un toque de ají caribeño.",
    price: 16000,
    category: "Cocktails",
    image: "https://cdn.pixabay.com/photo/2016/03/05/19/22/appetizer-1238359_1280.jpg",
    brand: "Snacks del Mar",
  },

  // Brand: Fritos de la Casa (Arepas, Deditos, etc.)
  {
    id: 2,
    name: "Arepa de Huevo Premium",
    description: "La tradicional arepa de huevo con un toque secreto de Snacks del Mar.",
    price: 5000,
    category: "Arepas",
    image: "https://cdn.pixabay.com/photo/2017/08/11/17/41/tortilla-2632182_1280.jpg",
    brand: "Fritos de la Casa",
  },
  {
    id: 3,
    name: "Deditos de Queso (6 und)",
    description: "Crujientes deditos rellenos de queso costeño de primera calidad.",
    price: 8000,
    category: "Deditos",
    image: "https://cdn.pixabay.com/photo/2017/03/31/10/56/cheese-sticks-2191001_1280.jpg",
    featured: true,
    brand: "Fritos de la Casa",
  },
  {
    id: 5,
    name: "Arepa con Todo",
    description: "Arepa rellena de carne, pollo, chorizo y queso derretido.",
    price: 12000,
    category: "Arepas",
    image: "https://cdn.pixabay.com/photo/2014/11/05/16/00/fajita-518041_1280.jpg",
    brand: "Fritos de la Casa",
  },
  {
    id: 6,
    name: "Kibbeh Tradicional",
    description: "Fritos árabes con el sazón caribeño que nos caracteriza.",
    price: 4000,
    category: "Snacks",
    image: "https://cdn.pixabay.com/photo/2021/01/16/09/01/falafel-5921447_1280.jpg",
    brand: "Fritos de la Casa",
  },
  {
    id: 8,
    name: "Caribañola de Carne",
    description: "Masa de yuca rellena de carne molida bien sazonada y frita.",
    price: 3500,
    category: "Fritos",
    image: "https://cdn.pixabay.com/photo/2017/09/17/14/06/meatballs-2758552_1280.jpg",
    featured: true,
    brand: "Fritos de la Casa",
  },
  {
    id: 9,
    name: "Caribañola de Queso",
    description: "Deliciosa masa de yuca rellena de queso costeño derretido.",
    price: 3000,
    category: "Fritos",
    image: "https://cdn.pixabay.com/photo/2018/10/14/18/29/meat-3747129_1280.jpg",
    brand: "Fritos de la Casa",
  }
];
