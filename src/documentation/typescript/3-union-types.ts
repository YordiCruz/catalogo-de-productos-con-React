//Union type ----------------------------------
type ID = string | number;

const identificador: ID = "1";
const identificador2: ID = 2;

console.log(identificador, identificador2);

// interface Estudiante {
//     name: string
//     edad: number
// }

// interface Profesor {
//     name: string
//     materia: string
// }

// type Persona = Estudiante | Profesor;

// const user: Persona = {
//     name: "Jhon",
//     edad: 25
// }

//String union types ---------------------------

type Color = "red" | "green" | "blue";

const colorFondo: Color = "red";

type Estado = "loading" | "success" | "error";

const estadoPeticion: Estado = "success";

console.log(colorFondo, estadoPeticion);
