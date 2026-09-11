describe("All hooks", () => {
  beforeAll(() => {
    console.log("Before ALL tests");
  });

  afterAll(() => {
    console.log("After ALL tests");
  });

  beforeEach(() => {
    console.log("Before EACH test");
  });

  afterEach(() => {
    console.log("After EACH test");
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