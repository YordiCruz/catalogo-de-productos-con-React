// import {
//   Encabezado,
//   Footer,
// } from "@/documentation/react/componente-funcional/prueba";
// import ListaTareas from "@/documentation/react/hooks/use-effect/ListaTareas";
// import Todos from "@/documentation/react/hooks/use-effect/Todos";
import Tarea from "@/documentation/react/renderizado-condicional/Tarea";
// import Contador from "@/documentation/react/hooks/use-state/Contador";
// import Perfil from "@/documentation/react/hooks/use-state/Perfil";
// import PaginaAdministrador from "@/documentation/react/renderizado-condicional/PaginaAdministrador";
// import PaginaLogin from "@/documentation/react/renderizado-condicional/PaginaLogin";
// import SeccionRenderizadoCondicional from "@/documentation/react/renderizado-condicional/SeccionRenderizadoCondicional";
// import Tarea from "@/documentation/react/renderizado-condicional/Tarea";
// import SeccionRenderizadoListas from "@/documentation/react/renderizado-listas/SeccionRenderizadoListas";

// import PaginaAdministrador from "@/documentation/react/renderizado-condicional/PaginaAdministrador";
// import PaginaLogin from "@/documentation/react/renderizado-condicional/PaginaLogin";

export default function Home() {
  //para trabajar con renderizado condicional
  //1ra forma
  // const estalogeado = true;
  // let contenido;
  // if(estalogeado){
  //   contenido = <PaginaAdministrador/>;
  // }else{
  //   contenido = <PaginaLogin/>;
  // }

  //2da forma

  return (
    <>
      {/* <Contador /> */}
      {/* <Perfil /> */}
      {/* <ListaTareas /> , para importar nos posicionamos sobre el y hacemos ctrl + . y seleccionamos para añdir la importacion*/}
      {/* {contenido} */}
     
      {/* {estalogeado ? <PaginaAdministrador/> : <PaginaLogin/> /* ? indica si esta en true y : false  */}  
{/*    
<Tarea titulo="cs" completado={false}/>
<Tarea titulo="s" completado={true}/> */}
  {/* {estalogeado && <PaginaAdministrador/>} */}

{/* Renderizado de listas, cuand se trabaja con renderizado de lista siempre se agrega key */}
  {tareas.map((tarea)=>{
    return <Tarea key={tarea.id} titulo={tarea.titulo} completado={tarea.completado}/>
  })}




    {/* <Todos /> */}
    </>
  );
}

interface Tareatype{
  id: string
  titulo: string
  completado: boolean
}
const tareas: Tareatype[]=[
  {
    id:'1', titulo: "tare a1", completado: false
  },
  {
    id:'2', titulo: "tarea 2", completado:true
  },
  {
    id:'3', titulo:"tarea 3",completado:false
  }

]