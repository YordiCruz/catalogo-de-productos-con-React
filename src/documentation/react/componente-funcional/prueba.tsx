//para trabajar con componentes funcionales se debe de tener solo un componente funcional por archivo

function sumar(a: number, b: number): number {
  return a + b;
}

sumar(2, 3);

// Desestructuración de datos se hace para tener acceso rapido a las propiedades
// const persona = {
//   nombre: "Juan",
//   edad: 25,
// };

// const { nombre } = persona;

// console.log(nombre);

//componente funcional (estatico) para poder usar los componentes funcionales el archivo debe de tener una extension .tsx 
//para poder usar la funcion en otro archivo se usa export
// export function Encabezado() {
//   return (
//     <div>
//       <h1>pagina productos</h1>
//     </div>
//   );
// }

//componente funcional dinamico
interface EncabezadoProps {
  titulo: string;
}
// cuando se trabaja con componentes funcionales siempre se debe de pasar un objeto, no se puede trabajar con tipos primitivos
//en este ejemplo se esta usando desestructuracion de datos, colocando la variable titulo de la interface
// Encabezadoprops si este tuviera mas variables se ingresa al lado de titulo de igual manera se llama en
//el return
export function Encabezado({ titulo }: EncabezadoProps) {
  return (
    <div>
      <h1>{titulo}</h1> 
    </div>
  );
}

interface FooterProps {
  link: string;
}


//componente funcional (estatico)
export function Footer({ link }: FooterProps) {
  // los componentes funcionales devuelve solo un elemento por eso las 2 etiquetas de parrafo estan dentro de un div
  //si no se desea un div se puede usar etiquetas vacias llamadas fragmentos <> </>
  return (
    <div>
      <p>Redes sociales</p>
     {/* esta es la manera en que se define un comentario dentro de funciones, para utilizar variables se debe de encerrar en {} */}
      <p>{link}</p>
    </div>
  );
}
