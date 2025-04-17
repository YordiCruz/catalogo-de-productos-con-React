//2. Custom types

type UserProfile = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

interface Person {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const usuario: UserProfile = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  isActive: false,
};

const persona: Person = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  isActive: false,
};

console.log(usuario, persona);
