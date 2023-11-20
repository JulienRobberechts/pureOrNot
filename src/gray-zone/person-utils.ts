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

// q: Is the function "isAdult" pure or impure?
// a: It's pure.

// q: Does the function "isAdult" returns identical results for identical arguments?
// a: Yes.

// q: Is the return value of the function "isAdult" is only determined by its input values
// a: Yes.

// q: Does the function"isAdult" have any side effects?
// a: No

// q: Does the function"isAdult" modify any state or variables outside of the function ?
// a: No, it doesn't.

// q: Is the function "hasAddress" pure or impure?
// a: It's pure.

// q: Does the function "hasAddress" returns identical results for identical arguments?
// a: Yes.

// q: Is the return value of the function "hasAddress" is only determined by its input values
// a: Yes.

// Github Copilot chat
//-----------------------

// Is the function "hasAddress" pure or impure?
// Yes, given the implementation of the function "hasAddress", it will return identical results for identical arguments. This function checks if the person object has an address property and if that address has both town and street properties. It doesn't rely on any external state or cause side effects, so it should return the same result for the same person input.
