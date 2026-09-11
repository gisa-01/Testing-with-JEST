test("checks an object", () => {
  const user = {
    name: "Gisa",
    age: 20,
  };

  expect(user).toBe({
    name: "Gisa",
    age: 20,
  });
});

test("checks an object", () => {
  const user = {
    name: "Gisa",
    age: 20,
  };

  expect(user).toEqual({
    name: "Gisa",
    age: 20,
  });
});