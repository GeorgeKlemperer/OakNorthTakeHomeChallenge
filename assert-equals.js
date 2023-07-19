function assertEquals(expected, actual) {
  if (expected === actual) {
    console.log(
      `Assertion passed: Expected and actual values are equal (${expected} = ${actual}).`
    );
    return true;
  } else {
    console.log(
      `Assertion failed: Expected ${expected}, but returned ${actual}.`
    );
    throw new Error(
      `Assertion failed: Expected ${expected}, but returned ${actual}.`
    );
  }
}

module.exports = assertEquals;
