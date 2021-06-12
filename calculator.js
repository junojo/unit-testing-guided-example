function sum(a, b) {
  if (typeof a === 'number' && b === undefined) {
    return a + 0;
  } else if (a === undefined) {
    return 0;
  } else {
    return a + b;
  }
}

// Advanced Solution
// default value assigment
/*
function sum(a = 0, b = 0) {
  
  return a + b;
}
*/

function subtract(a, b) {
  if (typeof a === 'number' && b === undefined) {
    return a - 0;
  } else if (a === undefined) {
    return 0;
  } else {
    return a - b;
  }
}

function divide(a, b) {
  // Matches +0, -0, NaN
  if (!b) {
    throw new Error('Cannot divide by 0');
  } else {
    return a / b;
  }
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
