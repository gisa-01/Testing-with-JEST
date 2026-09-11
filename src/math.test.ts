const greet = jest.fn();

greet.mockReturnValue("Hello Gisa");

test("mock function returns a value", () => {
  expect(greet()).toBe("Hello Gisa");
});

test("mock function was called once", () => {
  expect(greet).toHaveBeenCalledTimes(1);
});