import { TodoType } from "@/documentation/compartir-estado/tareapage";
// import React, { useEffect, useState } from "react";

interface Todoprops {
 todos: TodoType[];
}

const Todos = ({todos}: Todoprops) => {
 

  return (
    <div>
      Lista de tareas: 
      {todos.map((todo) => {
        return (
          <div
            key={todo.id}
            style={{
              border: "1px solid black",
              borderRadius: "10px",
              margin: "10px",
              padding: "10px",
            }}
          >
            <p>{todo.todo}</p>
            <p>{todo.completed ? "COMPLETADO" : "PENDIENTE"}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
