export function calculatePercentage(part, total) {
  if (typeof part === "number" && typeof total === "number" && total !== 0) {
    // Ensure both parameters are numbers and total is not zero to avoid division by zero
    const percentage = (part / total) * 100;
    return percentage;
  } else {
    // Handle invalid input
    console.error(
      "Invalid input. Please provide valid numeric values, and ensure the total is not zero."
    );
    return null;
  }
}

// Example usage:
// const partValue = 25;
// const totalValue = 50;

// const result = calculatePercentage(partValue, totalValue);
// if (result !== null) {
//   console.log(`The percentage is: ${result}%`);
// }
