export type Person = {
  name: string;
  age: number;
  address?: {
    town: string;
    street: string;
  };
};

const ADULT_MIN_AGE = 18;

export function isAdult(person: Person) {
  return person.age >= ADULT_MIN_AGE;
}

export function hasAddress(person: Person) {
  if (!person.address) return false;
  if (!person.address.town) return false;
  if (!person.address.street) return false;
  return true;
}
