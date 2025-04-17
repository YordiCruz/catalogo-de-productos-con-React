import React, { createContext, useContext, useEffect, useState } from 'react'
import { TodoType } from './paginatarea';

//definimo el tipo de datos o los datos que se compartiran a los componentes hijos
interface todoscontexttype {
    todos: TodoType[]
    cantidadtarea: number

}

//definimos de que tipo sera el usecontext y como no tenemos valores por defecto lo
//vamos a iniciar como indefinido
//exportamos para otro componente
export const Todoscontext = createContext<todoscontexttype | undefined>(undefined);
//cuando se trabaja con contextos la forma mas flexible de meter componentes hijos con children
// ;a propiedad children se escribe en minuscula
interface todosproviderprops {
    children: React.ReactNode;
}

const Todosprovid = ({children}: todosproviderprops) => {

     
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
//definimos los datos que se van a compartir
     const contexto: todoscontexttype ={
        todos: todos,
        cantidadtarea:cantidadtarea,
     }

  return <Todoscontext value={contexto}>{children}</Todoscontext>
  
}

export default Todosprovid

//para reutilizar codigo
//custom hook es un metodo que contiene hooks de react
//los hooks siempre empiesan con use
export const usetodos = () =>{
     // eslint-disable-next-line react-hooks/rules-of-hooks
     const context = useContext(Todoscontext)
     if(!context){
        throw new Error ("Usetodos debe de estar dentro de un todosprovider")
     }
     return context;
}
