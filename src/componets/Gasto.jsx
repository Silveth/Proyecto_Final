import React from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import"react-swipeable-list/dist/styles.css"

import { formatearFecha } from "../Funciones";

import ImgAhorro from "../img/icono_ahorro.svg"
import ImgCasa from "../img/icono_casa.svg"
import ImgComida from "../img/icono_comida.svg"
import ImgGastos from "../img/icono_gastos.svg"
import ImgOcio from "../img/icono_ocio.svg"
import ImgSalud from "../img/icono_salud.svg"
import ImgSuscripciones from "../img/icono_suscripciones.svg"

const diccionarioIconos = {
    Ahorro : ImgAhorro,
    Comida : ImgComida,
    Casa : ImgCasa,
    Gastos : ImgGastos,
    Diversion : ImgOcio,
    Salud : ImgSalud,
    Suscripciones: ImgSuscripciones,


}


const Gasto = ({ gasto, setGastoEditar, eliminarGasto }) => {
  const { categoria, nombre, cantidad, id, fecha } = gasto;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>
       Editar
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
   <TrailingActions>
    <SwipeAction 
    onClick={() => eliminarGasto(id)}
    destructive={true}
    >
     Eliminar
    </SwipeAction>
   </TrailingActions>
  )
 
  return (
    <SwipeableList>
      <SwipeableListItem
       leadingActions={leadingActions()}
       trailingActions={trailingActions()}
      >
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <img 
        className="w-40"
        src={diccionarioIconos[categoria]} 
        alt="IconoDeGasto" 
        />
        <div className="descripcion-gasto">
          <p className="categoria">{categoria}</p>
          <p className="nombre-gasto"> {nombre} </p>
          <p className="fecha-gasto">
            Agregado el:{''}
            <span>{formatearFecha(fecha)}</span>
          </p>
        </div>
        
      </div>
      <p className="cantidad-gasto">${cantidad}</p>
    </div>
    </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gasto;
