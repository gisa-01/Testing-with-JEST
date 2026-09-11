import { divide } from "./divide";

describe("divide function", () => {
  test("normal division", () => {
    expect(10 / 2).toBe(5);
  });

  test("normal division", () => {
    expect(20 / 4).toBe(5);
  });

  test("normal division", () => {
    expect(0 / 5).toBe(0);
  });

  test("throws an error when dividing by zero", () => {
    expect(() => divide(5, 0)).toThrow();
  });
});
