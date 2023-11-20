import { add } from "./add";

describe("add", () => {
  it("should add 1+2",() => {
    expect(add(1,2)).toEqual(3);
  },);
});
