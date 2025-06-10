import { add } from "./string-calculator"

describe("String Calculator", () => {
  test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns number for single input", () => {
    expect(add("8")).toBe(8);
  });

   test("returns sum for two comma-seprated number", () => {
    expect(add("8,2")).toBe(10);
  });
});