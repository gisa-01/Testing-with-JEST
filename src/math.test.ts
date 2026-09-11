import { add } from './math';

describe('Math functions', () => {
  test('add two numbers', () => {
    expect(add(2,3)).toBe(5);
  });

   test("checks that 10 is greater than 5", () => {
    expect(10).toBeGreaterThan(5);
  });

  test("checks that 20 is less than 30", () => {
    expect(20).toBeLessThan(30);
  });
});