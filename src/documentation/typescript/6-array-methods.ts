//Manejo de arrays

//Filter

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  {
    name: "Jhon",
    age: 22,
  },
  {
    name: "Alice",
    age: 10,
  },
  {
    name: "Bob",
    age: 35,
  },
];

const adultos: User[] = [];

for (const user of users) {
  if (user.age > 18) {
    adultos.push(user);
  }
}

console.log("ADULTOS", adultos);

const mayores = users.filter((item) => item.age > 18);

console.log("MAYORES", mayores);

//map

interface Estudiante {
  nombre: string;
  primerApellido: string;
  edad: number;
}

const estudiantes: Estudiante[] = [
  {
    nombre: "Jhon",
    primerApellido: "Smith",
    edad: 22,
  },
  {
    nombre: "Alice",
    primerApellido: "Johnson",
    edad: 10,
  },
  {
    nombre: "Bob",
    primerApellido: "Williams",
    edad: 35,
  },
];

const nombresCompletos: string[] = [];

for (const estudiante of estudiantes) {
  const nombreCompleto = `${estudiante.nombre} ${estudiante.primerApellido}`;
  nombresCompletos.push(nombreCompleto);
}

console.log("NOMBRES COMPLETOS", nombresCompletos);

const fullNames = estudiantes.map((e) => `${e.nombre} ${e.primerApellido}`);

console.log("FULL NAMES", fullNames);

//reduce

interface Producto {
  nombre: string;
  precio: number;
  cantidad: number;
}

const productos: Producto[] = [
  {
    nombre: "Camisa",
    precio: 20,
    cantidad: 10,
  },
  {
    nombre: "Pantalón",
    precio: 30,
    cantidad: 5,
  },
  {
    nombre: "Zapatos",
    precio: 50,
    cantidad: 2,
  },
];

let precioTotal: number = 0;

for (const producto of productos) {
  const total = producto.precio * producto.cantidad;
  precioTotal = precioTotal + total;
}

console.log("PRECIO TOTAL", precioTotal);

const precioTotal2 = productos.reduce(
  (total, p) => total + p.precio * p.cantidad,
  0
);

console.log("PRECIO TOTAL2", precioTotal2);
