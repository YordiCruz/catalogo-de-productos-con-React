import React from 'react'

interface seccionresumenprops {
    cantidadtarea: number;
}

//en ves de poner (props: seccionresumen), hacemos una desestructuracion de datos y llamamos directamente a la variable
const Seccionresumen = ({cantidadtarea}: seccionresumenprops) => {
  return (
    <div style={{
      border: "1px solid black",
    }}>
      Seccion Resumen
      <p>Cantidad de Tareas: {cantidadtarea}</p>
    </div>
  )
}

export default Seccionresumen
