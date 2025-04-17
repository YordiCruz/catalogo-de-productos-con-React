import React from 'react'
import Todos from '../use-effect/Todos'
import { usetodos } from './todosprovider';
// import { TodoType } from './paginatarea'
// import { Todoscontext, usetodos } from './todosprovider';


//usecontext trata sobre crear un componente provider que engloba a los componentes padres e hijos, crea un conjunto de datos y un conjunto de metodos
// los datos ya no se mandan atrves de props 

const Seccionta = () => {
const {todos} = usetodos();

  return (
    <div>
        <Todos todos={todos}/>
      
    </div>
  )
}

export default Seccionta
