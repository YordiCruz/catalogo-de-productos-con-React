import React, { ReactNode } from 'react'
//con reactnode decimos que es un componente funcional
interface seccionprops {
    titulo: string
    subtitulo: string
    children: ReactNode // significa todos los componentes que se pueden insertar, al decir reactnode decimos que es un componente de react, asi children es un componente funcional
}

//otra forma de llamr componentes es con la propiedad children, primero se define que estructura de datos resivira este componente
const seccion = (props: seccionprops) => {
  //el return solo devuelve un resulktado por eso se engloba en un div
  return (
    <div>
      <h1>{props.titulo}</h1>
      <h5>{props.subtitulo}</h5>
      {/*  {//hace referencia a cualqueir componente de react que se puede insertar ahi} */}
      {props.children}
    </div>
  )
}

export default seccion
