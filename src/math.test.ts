import { describe, test, expect } from "@jest/globals";

const user = {
  name: "Gisa",
  role: "Developer",
  skills: ["React", "TypeScript", "Jest"],
};

describe("User", () => {
  describe("Profile", () => {
    test("name is Gisa", () => {
      expect(user).toHaveProperty("name", "Gisa");
    });

    test("role is Developer", () => {
      expect(user).toHaveProperty("role", "Developer");
    });
  });

  describe("Skills", () => {
    test("contains TypeScript", () => {
      expect(user.skills).toContain("TypeScript");
    });
  });
});