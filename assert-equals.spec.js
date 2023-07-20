const assertEquals = require("./assert-equals");

describe("assertEquals", () => {
  describe("when expected and actual are the same string", () => {
    it("returns without throwing an error", () => {
      expect(() => assertEquals("abc", "abc")).not.toThrow();
    });
  });

  describe("when expected and actual are different strings", () => {
    it("throws an error with correct message", () => {
      // Call assertEquals with different string arguments and expect it to throw an error
      expect(() => assertEquals("abc", "def")).toThrowError(
        "Assertion failed: Expected abc but received def."
      );
    });
  });

  describe("when expected and actual are the same number", () => {
    it("returns without throwing an error", () => {
      expect(() => assertEquals(42, 42)).not.toThrow();
    });
  });

  describe("when expected and actual are different number", () => {
    it("throws an error with correct message", () => {
      // Call assertEquals with different number arguments and expect it to throw an error
      expect(() => assertEquals(42, 43)).toThrow(
        "Assertion failed: Expected 42 but received 43."
      );
    });
  });

  describe("when expected and actual are different data types", () => {
    it("throws an error with correct message", () => {
      // Call assertEquals with different data types and expect it to throw an error
      expect(() => assertEquals(1, "1")).toThrow(
        "Assertion failed: Expected type number but received type string."
      );
    });
  });

  describe("when expected and actual are the same boolean", () => {
    it("returns without throwing an error", () => {
      expect(() => assertEquals(true, true)).not.toThrow();
    });
  });

  describe("when expected and actual are different booleans", () => {
    it("throws an error with correct message", () => {
      // Call assertEquals with different boolean arguments and expect it to throw an error
      expect(() => assertEquals(true, false)).toThrow(
        "Assertion failed: Expected true but received false."
      );
    });
  });

  describe("when expected and actual are the same array", () => {
    it("returns without throwing an error", () => {
      expect(() =>
        assertEquals(
          [-1, 1984, "a", "b", "c", 0, -1882, 42],
          [-1, 1984, "a", "b", "c", 0, -1882, 42]
        )
      ).not.toThrow();
    });
  });

  describe("when expected and actual are different arrays", () => {
    it("throws an error with correct message", () => {
      // Call assertEquals with different array arguments and expect it to throw an error
      expect(() =>
        assertEquals(
          [-1, 1984, "a", "b", "c", 0, -1882, 42],
          [-1, 4819, "d", "e", "f", 0, 1882, 42]
        )
      ).toThrow("Assertion failed: Expected 1984 but received 4819.");
    });
  });

  describe("when expected and actual are different length arrays", () => {
    it("throws an error with correct message", () => {
      // Call assertEquals with different length array arguments and expect it to throw an error
      expect(() =>
        assertEquals(
          [-1, 1984, "a", "b", "c", 0, -1882, 42],
          [-10, 4819, "d", "e", "f", 0, 1882]
        )
      ).toThrow("Assertion failed: Expected array length 8 but received 7.");
    });
  });
});
