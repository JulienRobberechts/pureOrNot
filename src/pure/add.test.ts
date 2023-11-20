import { add } from "./add";

describe("add", () => {
  it("should add 1+2", () => {
    expect(add(1, 2)).toEqual(3);
    // TODO: get hints that the function is pure
    // (or evidence that it's not)
  });
});
