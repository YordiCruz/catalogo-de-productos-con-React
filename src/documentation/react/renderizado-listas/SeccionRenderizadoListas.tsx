import React from "react";
import Tarea from "../renderizado-condicional/Tarea";

interface TareaType {
  id: string;
  titulo: string;
  completado: boolean;
}

const tareas: TareaType[] = [
  { id: "1", titulo: "Leer un libro", completado: false },
  { id: "2", titulo: "Cocinar", completado: true },
  { id: "3", titulo: "Jugar", completado: false },
  { id: "4", titulo: "Comer", completado: true },
];

const SeccionRenderizadoListas = () => {
  return (
    <div>
      {/* 3. RENDERIZADO DE LISTAS */}
      {tareas.map((tarea) => (
        <Tarea
          key={tarea.id}
          titulo={tarea.titulo}
          completado={tarea.completado}
        />
      ))}
    </div>
  );
};

export default SeccionRenderizadoListas;
