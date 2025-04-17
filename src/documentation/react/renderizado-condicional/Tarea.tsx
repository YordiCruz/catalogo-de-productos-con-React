interface TareaProps {
  titulo: string;
  completado: boolean;
}

function Tarea({ titulo, completado }: TareaProps) {
  return (
    <div>
      <p>
        {titulo}
        {/* {completado ? "✅" : ""} */}
        {completado && "✅" /* si no se desea retornar nada en false directo solo true se hace de sta forma */}
      </p>
    </div>
  );
}

export default Tarea;
