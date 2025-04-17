import React, { useState } from "react";

interface UserProfileType {
  nombre: string;
  apellido: string;
  rol: string;
}

const Perfil = () => {
  //se puede definir con que tipo trabajara el usestate por ejemplo ahora esta con el de la interface
  //tambien se puede definir como numero o boleano
  const [perfilUsuario, setPerfilUsuario] = useState<UserProfileType>({
    nombre: "Juan",
    apellido: "Torrez",
    rol: "ADMINISTRADOR",
  });

  const cambiarRol = () => {
    setPerfilUsuario({
      //para hacer una copia de datos se usa los sprets que son los 3 puntos
      ...perfilUsuario,
      rol: "CLIENTE",
    });
  };
// las comillas invertidas para concatenacion se llama template literals
  return (
    <div>
    
      <p>{`${perfilUsuario.nombre} ${perfilUsuario.apellido}`}</p>
      <p>{perfilUsuario.rol}</p>
      <button onClick={cambiarRol}>Cambiar rol</button>
    </div>
  );
};

export default Perfil;
