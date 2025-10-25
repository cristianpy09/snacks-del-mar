import "./App.css";
import Card from "./components/Card";
import Carrusell from "./components/Carrusell";

import Footer from "./components/Footer";
import producto from "./assets/Producto-1.jpg";

import Header from "./components/Header";
import FloatCartButton from "./components/FloatCartButton";


function App() {
  return (
    <div className="bg-gradient-to-br from-[#f2f8ff] via-[#fafdff] to-[#ffffff] min-h-screen" >
     
      <Header />
      <Carrusell />
      <div
        id="productos"
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-8 place-items-center"

      >
       
          
          <Card
            title="Combinado"
            img={producto}
            description="Camraon combinado con salsa y añadidos. "
          />
       

        <Card
          title="Combinado"
          img={producto}
          description="Camraon combinado con salsa y añadidos."
        />
        <Card
          title="Combinado"
          img={producto}
          description="Camraon combinado con salsa y añadidos."
        />
        <Card
          title="Combinado"
          img={producto}
          description="Camraon combinado con salsa y añadidos."
        />
        <Card
          title="Combinado"
          img={producto}
          description="Camraon combinado con salsa y añadidos."
        />
        <Card
          title="Combinado"
          img={producto}
          description="Camraon combinado con salsa y añadidos."
        />
      </div>
       <FloatCartButton />
      <Footer />
    </div>
  );
}

export default App;


