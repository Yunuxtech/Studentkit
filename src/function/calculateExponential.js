export function calculateExponential(base, exponent) {
  if (typeof base === "number" && typeof exponent === "number") {
    // Ensure both base and exponent are numbers
    return Math.exp(exponent * Math.log(base));
  } else {
    // Handle invalid input
    console.error(
      "Invalid input. Please provide valid numeric values for the base and exponent."
    );
    return null;
  }
}

// Example usage:
// const result = calculateExponential(2, 3);
// if (result !== null) {
//   console.log(`The result of the exponential calculation is: ${result}`);
// }
