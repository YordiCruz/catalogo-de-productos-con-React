import React from "react";
import { Encabezado, Footer } from "./prueba";

const SeccionCompontes = () => {
  return (
    <div>
      {/* 1. RENDERIZADO DE COMPONENTES */}
      <Encabezado titulo="Curso react" />
      <Footer link="www.google.com" />
    </div>
  );
};

export default SeccionCompontes;
