const assertEquals = require("./assert-equals");

describe("assertEquals", () => {
  describe("when expected and actual are the same string", () => {
    it("returns without throwing an error", () => {
      expect(() => assertEquals("abc", "abc")).not.toThrow();
    });
  });

  describe("when expected and actual are different strings", () => {
    it("throws an error", () => {
      // Call assertEquals with different string arguments and expect it to throw an error
      expect(() => assertEquals("abc", "def")).toThrow();
    });
  });

  describe("when expected and actual are the same number", () => {
    it("returns without throwing an error", () => {
      expect(() => assertEquals(42, 42)).not.toThrow();
    });
  });

  describe("when expected and actual are different number", () => {
    it("throws an error", () => {
      // Call assertEquals with different string arguments and expect it to throw an error
      expect(() => assertEquals(42, 43)).toThrow();
    });
  });

  describe("when expected and actual are the same array", () => {
    it("returns without throwing an error", () => {
      expect(() =>
        assertEquals([1, 1984, 0, 1882, 42], [1, 1984, 0, 1882, 42])
      ).not.toThrow();
    });
  });
});
