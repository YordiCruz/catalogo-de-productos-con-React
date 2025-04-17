import React from 'react'
import Todos from '../react/hooks/use-effect/Todos'
import { TodoType } from './tareapage'

interface secciontareaprops{
    todos: TodoType[];
}
const Secciontarea = ({todos}: secciontareaprops) => {
  return (
    <div style={{
      border: "1px solid black",
    }}>
        <Todos todos={todos}/>
      
    </div>
  )
}

export default Secciontarea
