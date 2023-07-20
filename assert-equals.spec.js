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
      // Call assertEquals with different number arguments and expect it to throw an error
      expect(() => assertEquals(42, 43)).toThrow();
    });
  });

  describe("when expected and actual are the same boolean", () => {
    it("returns without throwing an error", () => {
      expect(() => assertEquals(true, true)).not.toThrow();
    });
  });

  describe("when expected and actual are different boolean", () => {
    it("throws an error", () => {
      // Call assertEquals with different boolean arguments and expect it to throw an error
      expect(() => assertEquals(true, false)).toThrow();
    });
  });

  describe("when expected and actual are both undefined", () => {
    it("returns without throwing an error", () => {
      expect(() => assertEquals(undefined, undefined)).not.toThrow();
    });
  });

  describe("when only one of expected and actual is undefined", () => {
    it("throws an error", () => {
      // Call assertEquals with a defined and a undefined argument and expect it to throw an error
      expect(() => assertEquals(true, undefined)).toThrow();
    });
  });

  describe("when expected and actual are both null", () => {
    it("returns without throwing an error", () => {
      expect(() => assertEquals(null, null)).not.toThrow();
    });
  });

  describe("when only one of expected and actual is null", () => {
    it("throws an error", () => {
      // Call assertEquals with a defined and a undefined argument and expect it to throw an error
      expect(() => assertEquals(null, undefined)).toThrow();
    });
  });

  describe("when expected and actual are the same array", () => {
    it("returns without throwing an error", () => {
      expect(() =>
        assertEquals([-1, 1984, 0, -1882, 42], [-1, 1984, 0, -1882, 42])
      ).not.toThrow();
    });
  });
});
