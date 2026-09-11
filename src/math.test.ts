describe("Setup and teardown", () => {
  beforeEach(() => {
    console.log("Before each test");
  });

  afterEach(() => {
    console.log("After each test");
  });

  test("first test", () => {
    console.log("Running first test");
    expect(1 + 1).toBe(2);
  });

  test("second test", () => {
    console.log("Running second test");
    expect(2 + 2).toBe(4);
  });
});