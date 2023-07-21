function assertEquals(expected, actual) {
  // Check arguments are same type
  if (typeof expected !== typeof actual) {
    throw new Error(
      `Assertion failed: Expected type ${typeof expected} but received type ${typeof actual}.`
    );
  }

  // Check if arguments are arrays (as in javascript array/object strict equality returns true only if they reference the same object)
  if (typeof expected === "object") {
    // Check if arrays are same length
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
          ]} but received type ${typeof actual[i]}.`
        );
      }
    }

    // Check all array arguments are equal
    for (let i = 0; i < expected.length; i++) {
      if (expected[i] !== actual[i]) {
        throw new Error(
          `Assertion failed: Expected ${expected[i]} but received ${actual[i]}.`
        );
      }
    }

    return true; // All elements in the array are equal
  }

  // Check if arguemnts are equal
  if (expected === actual) {
    return true;
  } else {
    throw new Error(
      `Assertion failed: Expected ${expected} but received ${actual}.`
    );
  }
}

// function assertEquals(expected, actual) {
//   expect(actual).toEqual(expected);
// }

module.exports = assertEquals;
