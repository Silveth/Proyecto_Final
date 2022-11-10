import { useState } from "react";
import Mensaje from "./Mensaje";
import CerrarVentana from "../img/cerrar.svg";

const Ventana = ({
  setVentana,
  setAnimarVentana, 
  animarVentana, 
  almacenarGasto,
  gastoEditar,
  setGastoEditar
}) => {


    const [mensaje, setMensaje] = useState ('')

const [nombre, setNombre] = useState ('')
const [cantidad, setCantidad] = useState ('')
const [categoria, setCategoria] = useState ('')

  const ocultarVentana = () => {
    setAnimarVentana(false)
    setGastoEditar(false)
    setTimeout(() => {
    setVentana( false) 
    }, 500);
  };

  const handleSumbit = e => {
    e.preventDefault();

    if ([ nombre, cantidad, categoria ].includes('')){
     setMensaje('Todos los campos son obligatorios')

     setTimeout(() => {
      setMensaje('')
      },2000)
      return;
    }

    almacenarGasto({nombre, cantidad, categoria})

  }

  return (
    <div className="ventana">
      <div className="btn-cerrar"> 
        <img
          src={CerrarVentana}
          alt="cerrar"
          onClick={ocultarVentana}
        />
 </div>
        

        <form 
        onSubmit={handleSumbit}
        className={`formulario ${animarVentana ? "animar": ''}`}
        >
          <legend className="text-6xl text-center block uppercase text-white mb-16 pb-4 borde border-b-4 border-indigo-500 ">
            Nuevo Gasto
          </legend>
          {mensaje && <Mensaje>{mensaje}</Mensaje>}

          <div className="grid mb-8">
            <label htmlFor="nombre" className="text-4xl text-left mb-8 font-medium text-indigo-400">Nombre Gasto</label>

            <input
            className="bg-neutral-100 rounded-2xl p-4 flex-1 text-base "
              id="nombre"
              type="text"
              placeholder="Añade el nombre del gasto"
              value={nombre}
              onChange={ e => setNombre (e.target.value)}
            />
          </div>

          <div className="grid mb-8">
            <label htmlFor="Cantidad" className="text-4xl text-left mb-8 font-medium text-indigo-400">Cantidad</label>

            <input
            className="bg-neutral-100 rounded-2xl p-4 flex-1 text-base "
              id="cantidad"
              type="number"
              placeholder="Añade la cantidad del gasto"
              value={cantidad}
              onChange={ e => setCantidad ( Number ( e.target.value))}
            />
          </div>
           <div className="grid mb-8">

            <label htmlFor="Categoria" className="text-4xl text-left mb-8 font-medium text-indigo-400">Categoria</label>

            <select id="categoria"  className="bg-neutral-100 rounded-2xl p-4 flex-1 text-base mb-8"
               value={categoria}
               onChange={ e => setCategoria ( e.target.value)}
            >

                <option value="">--Seleccione--</option>
                <option value="Ahorro">Ahorro</option>
                <option value="Comida">Comida</option>
                <option value="Casa">Casa</option>
                <option value="Gastos">Gastos Varios</option>
                <option value="Diversion">Diversion</option>
                <option value="Salud">Salud</option>
                <option value="Suscripciones">Suscripciones</option>

            </select>
          </div> 

          <input 
          type="submit" 
          value="Añadir gasto"  className="bg-pink-300 hover:bg-pink-700 text-white font-bold py-4  text-center rounded-2xl focus:outline-none focus:shadow-outline   w-full"/>

        </form>
     
    </div>
  );
};

export default Ventana;
