import { useState, useEffect } from "react";
import Header from "./componets/Header";
import Filtros from "./componets/Filtros";
import Ventana from "./componets/Ventana";
import ListaDeGastos from "./componets/ListaDeGastos";
import { generarId } from "./Funciones";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {

  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  );

  const [presupuesto, setPresupuesto] = useState(
    Number (localStorage.getItem('presupuesto')) ?? 0
  );
  const [PresValido, setPresValido] = useState(false);

  const [ventana, setVentana] = useState(false);
  const [animarVentana, setAnimarVentana] = useState(false);

  const [gastoEditar, setGastoEditar] = useState ({})

  const [filtro, setFiltro] = useState ('')
  const [gastosFiltrados, setGastosFiltrados] = useState ([])

  useEffect (() => {
  if(Object.keys(gastoEditar).length > 0){
    añadirGasto('')
  }
  },[gastoEditar])

  const añadirGasto = () => {
    setVentana(true);

    setTimeout(() => {
      setAnimarVentana(true);
    }, 500);
  }; 

  useEffect(() => {
   localStorage.setItem('presupuesto', presupuesto ?? 0)
  },[presupuesto])

  useEffect(()=>{
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? []);
  },[gastos])

  useEffect(() => {
  if (filtro){
    const gastosFiltrados = gastos.filter( gasto => gasto.categoria ===
      filtro )

     setGastosFiltrados(gastosFiltrados)
  }
  },[filtro])

  useEffect(() => {
    const presupuestoLS = Number (localStorage.getItem('presupuesto')) ?? 0;
if(presupuesto > 0){
  setPresValido(true)
}
    },[]);

 


  const almacenarGasto = (gasto) => {
   if(gasto.id) {
    const gastosActualizados = gastos.map (gastoState => gastoState.id ===
      gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados);
      setGastoEditar ({})
   } else {
    gasto.id = generarId();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);
   }


   

    setAnimarVentana(false);
    setTimeout(() => {
      setVentana(false);
    }, 500);
  };

  const eliminarGasto = id => {
   const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
   setGastos (gastosActualizados);
  }

  return (
    <div className={ ventana ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        PresValido={PresValido}
        setPresValido={setPresValido}
      />

      {PresValido && (
        <>
          <main>
            <Filtros
            filtro={filtro}
            setFiltro={setFiltro}
            />
            <ListaDeGastos
            gastos={gastos}
            setGastoEditar={setGastoEditar}
            eliminarGasto={eliminarGasto}
            filtro={filtro}
            gastosFiltrados={gastosFiltrados}



             />
          </main>

          <div className="fixed pr-20 pb-20 ">
            <img
              className="w-20"
              src={IconoNuevoGasto}
              alt="icono nuevo gasto"
              onClick={añadirGasto}
            />
          </div>
        </>
      )}

      {ventana && (
        <Ventana
          setVentana={setVentana}
          animarVentana={animarVentana}
          setAnimarVentana={setAnimarVentana}
          almacenarGasto={almacenarGasto}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}

        />
      )}
    </div>
  );
}

export default App;
