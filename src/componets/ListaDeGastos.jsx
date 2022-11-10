import React from "react";
import Gasto from "./Gasto";

const listaDeGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filtro ? (
        <>
          <h2 className="text-5xl">
            {gastosFiltrados.length ? "Gastos" : "No hay gastos en esta categoria"}
          </h2>
          {gastosFiltrados.map((gasto) => (
            <Gasto
              Key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      ) : (
        <>
        <h2 className='text-5xl'>{ gastos.length ? 'Gastos' : 'No hay gastos aun'}</h2>
          {gastos.map((gasto) => (
            <Gasto
              Key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default listaDeGastos;
