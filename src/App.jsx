import { useState } from "react";
import Tarjeta from "./components/Tarjeta";
import Formulario from "./components/Formulario";

function App() {
  const [estado, setEstado] = useState({
    titulo: "",
    autor: "",
    editorial: "",
  });

  const [mostrarTareta, setMostrarTarjeta] = useState(false);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h1>Ingresa un libro</h1>
      <Formulario
        estado={estado}
        setEstado={setEstado}
        setMostrarTarjeta={setMostrarTarjeta}
      />
      <Tarjeta estado={estado} mostrar={mostrarTareta} />
    </div>
  );
}

export default App;
