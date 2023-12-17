export function calculateSimpleInterest(principal, rate, time) {
  if (
    typeof principal === "number" &&
    typeof rate === "number" &&
    typeof time === "number"
  ) {
    // Ensure all parameters are numbers
    const interest = (principal * rate * time) / 100;
    return interest;
  } else {
    // Handle invalid input
    console.error(
      "Invalid input. Please provide valid numeric values for principal, rate, and time."
    );
    return null;
  }
}

// Example usage:
// const principalAmount = 1000;
// const interestRate = 5;
// const timeInYears = 2;

// const simpleInterest = calculateSimpleInterest(
//   principalAmount,
//   interestRate,
//   timeInYears
// );
// if (simpleInterest !== null) {
//   console.log(`The simple interest is: ${simpleInterest}`);
// }
