import { add } from "./string-calculator"
describe("String Calculator", () => {
    test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
  });
});