import React from "react";
import Tarea from "./Tarea";
import PaginaAdministrador from "./PaginaAdministrador";
import PaginaLogin from "./PaginaLogin";

const SeccionRenderizadoCondicional = () => {
  const estaLogeado = false;

  return (
    <div>
      {/* 2. RENDERIZADO CONDICIONAL */}
      {estaLogeado ? <PaginaAdministrador /> : <PaginaLogin />}
      {/* {estaLogeado && <PaginaAdministrador />} */}
      {estaLogeado ? (
        <>
          <Tarea titulo="Tarea 1" completado={false} />
          <Tarea titulo="Tarea 2" completado={true} />
          <Tarea titulo="Tarea 3" completado={false} />
        </>
      ) : (
        <>Tienes que iniciar sesion para ver las tareas</>
      )}
    </div>
  );
};

export default SeccionRenderizadoCondicional;
