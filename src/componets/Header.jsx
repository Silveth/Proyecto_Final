import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlDePresupuesto from './ControlDePresupuesto'

const Header = ({
  gastos,
  setGastos,
  presupuesto, 
  setPresupuesto, 
  PresValido, 
  setPresValido
}) => {
  return (

    <header className=' p-12 mx-auto bg-violet-500  ' >
         <h1 className='text-center uppercase p-12 m-0  text-6xl text-white font-semibold' >Planificador de gastos </h1>
         
         {PresValido ? (
          <ControlDePresupuesto
          gastos={gastos}
          setGastos={setGastos}
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setPresValido={setPresValido}

          />
         ):(

          <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setPresValido={setPresValido}
          />

         )}
        
      </header>
     
    
    )
  }
  
  export default Header