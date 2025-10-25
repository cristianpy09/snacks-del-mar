import "./App.css";
import Card from "./components/Card";
import Carrusell from "./components/Carrusell";
import FloatButton from "./components/FloatButton";
import Footer from "./components/Footer";
import producto from "./assets/Producto-1.jpg";

import Header from "./components/Header";


function App() {
  return (
    <div className="bg-gradient-to-br from-[#f2f8ff] via-[#fafdff] to-[#ffffff] min-h-screen" >
     
      <Header />
      <Carrusell />
      <div
        id="productos"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 px-2 py-4 place-items-center"
      >
        <div className="indicator">
          <span className="indicator-item badge badge-primary">Nuevo</span>
          <Card
            title="Combinado"
            img={producto}
            description="Camraon combinado con salsa y añadidos "
          />
        </div>

        <Card
          title="Camisas"
          img={producto}
          description="Camisas con estilo y confort excepcionales."
        />
        <Card
          title="Relojes"
          img={producto}
          description="Relojes elegantes y modernos para toda ocasión."
        />
        <Card
          title="Relojes"
          img={producto}
          description="Relojes elegantes y modernos para toda ocasión."
        />
        <Card
          title="Relojes"
          img={producto}
          description="Relojes elegantes y modernos para toda ocasión."
        />
        <Card
          title="Relojes"
          img={producto}
          description="Relojes elegantes y modernos para toda ocasión."
        />
      </div>
      <FloatButton />
      <Footer />
    </div>
  );
}

export default App;


