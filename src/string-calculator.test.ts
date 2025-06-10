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

   test("returns sum for two comma-seprated number with dot", () => {
    expect(add("8,.2")).toBe(10);
  });

  test("support newline as a seperator", () => {
    expect(add("8,\n2,1")).toBe(11);
  });

  test("support different delimiters", () => {
    expect(add("//;\n8;2")).toBe(10);
  });
  

  test("throw an exception, negative number not allow for negative numbers", () => {
    expect(() => add("1,-2,3,-5")).toThrow('negative numbers not allowed: -2,-5');
  });
});