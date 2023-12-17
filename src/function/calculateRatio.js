export function calculateRatio(a, b) {
  if (typeof a === "number" && typeof b === "number" && b !== 0) {
    // Ensure both parameters are numbers and 'b' is not zero to avoid division by zero
    return a / b;
  } else {
    // Handle invalid input
    console.error(
      "Invalid input. Please provide valid numeric values, and ensure the second value is not zero."
    );
    return null;
  }
}

// Example usage:
// const ratioResult = calculateRatio(4, 2);
// if (ratioResult !== null) {
//   console.log(`The ratio is: ${ratioResult}`);
// }
