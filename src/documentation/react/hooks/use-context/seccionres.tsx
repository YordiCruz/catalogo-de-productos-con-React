import React, { useContext } from 'react'
import { Todoscontext, usetodos } from './todosprovider';
const Seccionres = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  
  
  //const context = useContext(Todoscontext);

//desesctrurando datos seria 
// eslint-disable-next-line react-hooks/rules-of-hooks
const {cantidadtarea} = usetodos();
  
  
  //en la etiqueta p con la interrogante desimos que el contextO en algun momento sera indefinido
  // y con el doble interrogante que si no encuentra datos o nos devuelve indefinido que ponga un array vacio
  return (
    <div>
      Seccion Resumen
      
      <p>Cantidad de Tareas: {cantidadtarea}</p>
    </div>
  )
}

export default Seccionres
