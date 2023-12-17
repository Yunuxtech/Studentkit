export function calculateBMI(weight, height) {
  if (typeof weight === "number" && typeof height === "number" && height > 0) {
    // Ensure weight and height are numbers, and height is greater than zero to avoid division by zero
    const bmi = weight / (height * height);
    return bmi;
  } else {
    // Handle invalid input
    console.error(
      "Invalid input. Please provide valid numeric values for weight and height (with height greater than zero)."
    );
    return null;
  }
}

// Example usage:
// const weightInKg = 70;
// const heightInMeters = 1.75;

// const bmiResult = calculateBMI(weightInKg, heightInMeters);
// if (bmiResult !== null) {
//   console.log(`The Body Mass Index (BMI) is: ${bmiResult}`);
// }
