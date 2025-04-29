import React, { useEffect, useState } from 'react'

const ListaTareas = () => {
  const [contador, setContador]= useState(10);
  const [mostrarDescripcion, setMostrarDescripcion] = useState(true);
//el useeffect nos permite hacer peticion de recursos a nuestras apis
  //recibe como parametro una funcion de tipo flecha, y otro parametro que es un array, llamado arraya de dependencias
  //hay 3 casos en los que se puede trabajar con useefect, ver mas abajo
  useEffect(()=>{
    console.warn("ejecutndo callbac");

    
  },[])

  //2. Array vacio: se ejecuta una sola vez
  //  useEffect(() => {
  //      console.warn("Ejecutando useEffect (CASO 2)...");
  //    }, []);

  // 3. Con dependencia: se ejecuta cuando cambia el estado
  useEffect(() => {
    console.warn("Ejecutando useEffect (CASO 3)...");
  }, [contador, mostrarDescripcion]);

  return (
    <div>
      list tareas
      <p>Contador {contador}</p>
      <button onClick={()=>setContador(contador+1)}>Incrementar</button>
      <p>Mostrar descripcion: {String(mostrarDescripcion)}</p>
      <button onClick={() => setMostrarDescripcion(!mostrarDescripcion)}>
        Mostrar descripcion
      </button>
    </div>
  )
}

export default ListaTareas







/*import React, { useEffect, useState } from "react";

const ListaTareas = () => {
  const [contador, setContador] = useState(10);
  const [mostrarDescripcion, setMostrarDescripcion] = useState(true);

  // 1. Sin array de denpencias: se ejecuta en cada re-render= cambio de estado
  //   useEffect(() => {
  //     console.warn("Ejecutando useEffect...");
  //   });

  // 2. Array vacio: se ejecuta una sola vez
  //   useEffect(() => {
  //     console.warn("Ejecutando useEffect (CASO 2)...");
  //   }, []);

  // 3. Con dependencia: se ejecuta cuando cambia el estado
  useEffect(() => {
    console.warn("Ejecutando useEffect (CASO 3)...");
  }, [contador]);

  return (
    <div>
      <h1>HOOK: useEffect</h1>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <p>Mostrar descripcion: {String(mostrarDescripcion)}</p>
      <button onClick={() => setMostrarDescripcion(!mostrarDescripcion)}>
        Mostrar descripcion
      </button>
    </div>
  );
};

export default ListaTareas;*/