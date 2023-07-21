// Helper function to compare argument types
function assertSameType(expected, actual) {
  if (typeof expected !== typeof actual) {
    throw new Error(
      `Assertion failed: Expected type ${typeof expected} but received type ${typeof actual}.`
    );
  }
}

// Helper function to handle array equality (as javascript array strict equality tests for same reference)
function assertArrayEquality(expected, actual) {
  // Checks for array length equality
  if (expected.length !== actual.length) {
    throw new Error(
      `Assertion failed: Expected array length ${expected.length} but received ${actual.length}.`
    );
  }

  // Check all array elements are the same type
  for (let i = 0; i < actual.length; i++) {
    if (typeof expected[i] !== typeof actual[i]) {
      throw new Error(
        `Assertion failed: Expected type ${typeof expected[
          i
        ]} but received type ${typeof actual[i]} at index ${i}.`
      );
    }

    // Check all array arguments are equal
    if (expected[i] !== actual[i]) {
      throw new Error(
        `Assertion failed: Expected ${expected[i]} but received ${actual[i]} at index ${i}.`
      );
    }
  }
}

// Equality function
function assertEquals(expected, actual) {
  assertSameType(expected, actual);

  if (Array.isArray(expected)) {
    assertArrayEquality(expected, actual);
  } else {
    if (expected !== actual) {
      throw new Error(
        `Assertion failed: Expected ${expected} but received ${actual}.`
      );
    }
  }

  return true; // Arguments are equal
}

// function assertEquals(expected, actual) {
//   expect(actual).toEqual(expected);
// }

module.exports = assertEquals;
