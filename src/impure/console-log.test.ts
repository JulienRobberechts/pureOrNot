import { hello } from "./console-log";

describe("hello", () => {
  it("should be impure", () => {
    hello("Liam");
    // TODO: prove it's impure
  });
});
