import React, { useState } from 'react'

const Contado = () => {
//un hooks siempre empiesa con use, esta funcion nos devuelve un array, el 0 es el valor que le estamos dando a la variable contador, 
// el setcontador es el metodo para actualizar el estado, cada que el valor cambia tiene que volver a ejecutar el componente para mostrar el nuevo valor
  const [contador,setContador] = useState(5);

  const  [mostrarDescripcion, setMostrarDescripcion]= useState(true);
  return (
    <div>
      El contador es: {contador }
      <button onClick={()=>{
        setContador(contador + 1)
      }}> Incrementar</button>
         <button onClick={()=> setContador(contador - 1)
      }> Decrementar</button>
     <button onClick={()=>
        setContador(100)
      }> Actualizar</button>
    <button onClick={()=>
      setMostrarDescripcion(!mostrarDescripcion)}>mostrar descripcion</button>
      <p>Estado de descripcion: {mostrarDescripcion? "true": "false"}</p>
      {mostrarDescripcion && <>es verdad</>}
      <p>Descripcion fake</p>
    </div>
  )
}

export default Contado


/*
import React, { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(10);
  const [mostrarDescripcion, setMostrarDescripcion] = useState(true);

  return (
    <div>
      <h1>HOOK: useState</h1>
      <p>Contador {contador}</p>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        Incrementar
      </button>
      <button
        onClick={() => {
          setContador(contador - 1);
        }}
      >
        Decrementar
      </button>
      <p>Renderizado condicional</p>
      <button
        onClick={() => {
          setMostrarDescripcion(!mostrarDescripcion);
        }}
      >
        Mostrar descripcion
      </button>
      {mostrarDescripcion && <p>Descripción fake</p>}
    </div>
  );
};

export default Contador;
*/