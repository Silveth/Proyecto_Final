import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({ 
  presupuesto, 
  setPresupuesto,
  PresValido, 
  setPresValido }) => {
  
  
  const [mensaje, setMensaje] = useState("");

  const adimistrarPresupuesto = (e) => {
    e.preventDefault();

    if (!presupuesto || presupuesto <0) {
      setMensaje("No es un presupuesto Valido");
      return

    }
     setMensaje(" ");
     setPresValido(true)
  };

  return (
    <div className="w-full max-w-2xl flex  items-center mx-auto">
      <form
        onSubmit={adimistrarPresupuesto}
        className="bg-white shadow-md rounded-2xl px-8  mb-4 w-11/12 p-16 "
      >
        <div className="grid mb-8">
          <label className="text-purple-400 text-3xl mb-8 text-center font-semibold">
            Definir presupuesto
          </label>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-size text-center"
              id="username"
              type="number"
              placeholder="Añade tu presupuesto"
              value={presupuesto}
              onChange={ e => setPresupuesto(Number (e.target.value))}
            />
          </div>

          <input
            className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  mx-auto w-11/12  "
            type="Submit"
            value="Añadir"
          />

          {mensaje && <Mensaje>{mensaje}</Mensaje>}
        </div>
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
