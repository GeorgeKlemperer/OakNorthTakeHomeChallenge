function assertEquals(expected, actual) {
  if (typeof expected !== typeof actual) {
    throw new Error(
      `Assertion failed: Expected type ${typeof expected} but got ${typeof actual}`
    );
  }

  if (typeof expected === "object") {
    if (expected.length !== actual.length) {
      throw new Error(
        `Assertion failed: Expected array length ${expected.length} but got ${actual.length}`
      );
    }

    for (let i = 0; i < expected.length; i++) {
      if (expected[i] !== actual[i]) {
        throw new Error(
          `Assertion failed: Expected ${expected[i]} but got ${actual[i]}`
        );
      }
    }

    return true; // All elements in the array are equal
  }

  if (expected === actual) {
    return true;
  } else {
    throw new Error(
      `Assertion failed: Expected ${expected}, but returned ${actual}.`
    );
  }
}

module.exports = assertEquals;
