//function declaration ----------------------------

function sumar(a: number, b: number): number {
  return a + b;
}

const result = sumar(2, 3);

console.log(result);

//array function ----------------------------------

const add = (a: number, b: number): number => {
  return a + b;
};

const resultado = add(5, 2);

console.log(resultado);

//optional parameters -------------------------------
function saludar(nombre: string, saludo?: string): void {
  console.log(`${saludo ?? "Hola"} ${nombre}`);
}

saludar("Jhon", "Hello");
saludar("Ana");
saludar("Bob", "Hi");

//default parameters --------------------------------

function saludar2(nombre: string, saludo: string = "Bienvenido"): void {
  console.log(`${saludo} ${nombre}`);
}

saludar2("Juancito");
saludar2("Jorge", "Hello");
