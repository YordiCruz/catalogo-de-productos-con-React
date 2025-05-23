// import {
//   Encabezado,
//   Footer,
// } from "@/documentation/react/componente-funcional/prueba";
// import ListaTareas from "@/documentation/react/hooks/use-effect/ListaTareas";
// import Todos from "@/documentation/react/hooks/use-effect/Todos";
// import ListaTareas from "@/documentation/react/hooks/use-effect/ListaTareas";
// import Tarea1 from "@/documentation/practicas/tarea1";
// import Card from "@/documentation/tipos-componentes/card";
// import Seccionresumen from "@/documentation/compartir-estado/seccionresumen";
// import Tareapage from "@/documentation/compartir-estado/tareapage";
// import Paginatarea from "@/documentation/react/hooks/use-context/paginatarea";
// import Seccionres from "@/documentation/react/hooks/use-context/seccionres";
// import Todosprovid from "@/documentation/react/hooks/use-context/todosprovider";
import MainLayout from "@/common/components/MainLayout";
import Categorias from "./categoriaproductos/categorias";
import Footer from "@/common/components/footer";
// import Paginatarea from "@/documentation/react/hooks/use-context/paginatarea";
// import Todosprovider from "@/documentation/react/hooks/use-context/todosprovider";
// import { Children } from "react";
// import Content from "@/documentation/tipos-componentes/content";


// import PaginaAdministrador from "@/documentation/react/renderizado-condicional/PaginaAdministrador";
// import PaginaLogin from "@/documentation/react/renderizado-condicional/PaginaLogin";


//el principal problema que tenemos cuando trabajamos con componentes funcionales es de que forma podemos compartir estado entre los diferentes componentes



export default function Home() {
//para navegar entre componentes

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
    <MainLayout titulo="home">
   {/* <Contado/> */}
    {/* <Perfil/> */}
{/* <ListaTareas/> */}
    {/* <Todos /> */}
    {/* <Tarea1/>  */}

    {/* <Seccion titulo="hola" subtitulo="jjj">
    componentes hijos 2da forma de llamar componentes con children
    <Header/>
    <Content/>

    </Seccion> */}



  {/* <Tareapage/> */}
   {/* <Todosprovid>
   <Paginatarea/>
  </Todosprovid> */}

  <Categorias/>





  
    </MainLayout>
  );
}
