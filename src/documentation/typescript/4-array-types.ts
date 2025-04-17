//primitive array --------------------------------
const numeros: number[] = [1, 3, 6, 7, 8];

const nombres: string[] = ["Jhon", "Alice", "Bob"];

const banderas: boolean[] = [true, false, true];

console.log(numeros, nombres, banderas);

//custom type array -------------------------------

interface UserInfo {
  nombre: string;
  edad: number;
}

const usuarios: UserInfo[] = [
  {
    nombre: "Jhon",
    edad: 25,
  },
  {
    nombre: "Alice",
    edad: 30,
  },
];

console.log(usuarios);
