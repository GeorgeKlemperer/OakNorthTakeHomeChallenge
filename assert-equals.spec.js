const assertEquals = require("./assert-equals");

describe("assertEquals", () => {
  describe("when expected and actual are the same string", () => {
    it("returns without throwing an error", () => {
      //Call assertEquals with identical string arguments
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
      //Call assertEquals with identical number arguments
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
      //Call assertEquals with identical boolean arguments
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
      //Call assertEquals with identical array arguments
      expect(() =>
        assertEquals(
          [-1, 1984, "a", "b", "c", 0, -1882, 42],
          [-1, 1984, "a", "b", "c", 0, -1882, 42]
        )
      ).not.toThrow();
    });
  });

  describe("when expected and actual are arrays with a different argument type", () => {
    it("throws an error with correct message", () => {
      // Call assertEquals with different array arguments and expect it to throw an error
      expect(() =>
        assertEquals(
          [-1, 1984, "a", "b", "c", 0, -1882, 42],
          [-1, 1984, "a", "b", "c", "0", -1882, 42]
        )
      ).toThrow(
        "Assertion failed: Expected type number but received type string at index 5."
      );
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
      ).toThrow(
        "Assertion failed: Expected 1984 but received 4819 at index 1."
      );
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

  describe("when expected and actual are both undefined", () => {
    it("returns without throwing an error", () => {
      //Call assertEquals with two undefine arguments
      expect(() => assertEquals(undefined, undefined)).not.toThrow();
    });
  });

  describe("when one of expected or actual is undefined", () => {
    it("throws an error with correct message", () => {
      // Call assertEquals with one defined and one undefined argument
      expect(() => assertEquals(42, undefined)).toThrow(
        "Assertion failed: Expected type number but received type undefined."
      );
    });
  });
});
