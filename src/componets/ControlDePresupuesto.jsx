import {useState, useEffect} from "react";
import {CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControlDePresupuesto = ({
  gastos, 
  setGastos,
  presupuesto,
  setPresupuesto,
  setPresValido,

}) => {


  const [porcentaje, setPorcentaje] = useState(0)
  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState (0)

  useEffect(() => {
   const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
   const totalDisponible = presupuesto - totalGastado;
  
   //Calcular Porcentaje
   const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed (2)

   
   setDisponible(totalDisponible)
   setGastado(totalGastado)
   setTimeout(() => {
    setPorcentaje(nuevoPorcentaje)
   },1500)
  },[gastos])

  const formatoCantidad = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency:'USD'
    })
  }

  const handleResetApp  = () => {
    const resultado = confirm ('¿Deseas reiniciar presupuesto y gastos?')

    if(resultado){
      setGastos([])
      setPresupuesto(0)
      setPresValido(false)
    }
  }

  return (
    //className=" justify-between items-center -mt-30 translate-y-20  m-auto   flex-col w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-black "
    <div
    className="-mt-20 justify-between items-center translate-y-20  w-1/2 max-w-7xl m-auto  
    shadow-xl
bg-white flex 
p-11
rounded-2xl
justify-items-start

"
    >
      <div className="w-full max-w-xs block uppercase tracking-wide">
        <CircularProgressbar
        styles={buildStyles({
          pathColor: porcentaje > 100 ? "#DC2626" : '#b83280',
          trailColor: '#fed7e2',
          textColor: porcentaje > 100 ? "#DC2626" : '#b83280',

        })}
        value={porcentaje}
        text={`${porcentaje}% Gastado`}
       

       />
      </div>

      <div className="contenido-presupuesto">
        <button
        className="reset-app"
        type="button"
        onClick={handleResetApp}
        >
          Resetear App
        </button>
      <p >
          <span >Presupesto: </span>{(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? 'negativo' : '' }`}>
          <span>Disponible: </span>{formatoCantidad(disponible)}
        </p>
        <p>
          <span>Gastado: </span>{formatoCantidad(gastado)}
        </p>

      </div>
    </div>
  );
};

export default ControlDePresupuesto;
