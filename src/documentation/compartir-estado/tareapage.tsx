import React, { useEffect, useState } from 'react'
import Seccionresumen from './seccionresumen'
import Secciontarea from './secciontarea'
//1ra forma
//los padres comparten  componentes a los hijos y los hijos no pueden compartir a los hijos, el flujo de compartir es de arriba hacia abajo
//la solucion seria llevar la logica que obtiene los datos, que este lo mas arriba posible

// otra forma de llamar componentes es llamada provider nos permite crear createcontext() el cual engloba slos hijos y padres
// el export nos permite usarlo en otro archivo
export interface TodoType {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
  }
  


const Tareapage = () => {
  //el usestate sera de tipo 
    const [todos, setTodos] = useState<TodoType[]>([]);
    const cantidadtarea = todos.length;
     useEffect(() => {
       console.warn("Obteniendo todos...");
       fetch("https://dummyjson.com/todos")
         .then((res) => res.json())
         .then((datos) => {
           setTodos(datos.todos);
         });
     }, []);

  return (
    <div>
        <Seccionresumen cantidadtarea={cantidadtarea}/>
        <Secciontarea todos={todos}/>
    </div>
  )
}

export default Tareapage
