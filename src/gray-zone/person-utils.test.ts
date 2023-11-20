import { Person, isAdult } from "./person-utils";

const liam: Person = {
  name: "Liam",
  age: 12,
  address: {
    town: "Paris",
    street: "",
  },
};

const michael: Person = {
  name: "Liam",
  age: 32,
  address: {
    town: "Paris",
    street: "73 Avenue des Champs-Élysées",
  },
};

describe("isAdult", () => {
  it("liam should be a child", () => {
    const adult = isAdult(liam);
    expect(adult).toEqual(false);
  });
  it("michael should be an adult", () => {
    const adult = isAdult(michael);
    expect(adult).toEqual(true);
  });
});
