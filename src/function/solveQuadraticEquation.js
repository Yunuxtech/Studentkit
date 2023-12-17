export function solveQuadraticEquation(a, b, c) {
  if (
    typeof a === "number" &&
    typeof b === "number" &&
    typeof c === "number" &&
    a !== 0
  ) {
    // Ensure coefficients are numbers and 'a' is not zero for a valid quadratic equation
    const discriminant = b ** 2 - 4 * a * c;

    if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return [root1, root2];
    } else if (discriminant === 0) {
      const root = -b / (2 * a);
      return [root];
    } else {
      // No real roots for a negative discriminant
      return [];
    }
  } else {
    // Handle invalid input
    console.error(
      "Invalid input. Please provide valid numeric coefficients for a quadratic equation."
    );
    return null;
  }
}

// Example usage:
// const quadraticRoots = solveQuadraticEquation(1, -3, 2);
// if (quadraticRoots !== null) {
//   console.log(
//     `The roots of the quadratic equation are: ${quadraticRoots.join(", ")}`
//   );
// }
