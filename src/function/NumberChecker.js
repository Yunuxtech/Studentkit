export function isPrime(number) {
  if (typeof number !== "number" || !Number.isInteger(number) || number <= 1) {
    // Handle invalid input
    console.error(
      "Invalid input. Please provide a positive integer greater than 1."
    );
    return null;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Example usage:
// const testNumber = 17;
// const result = isPrime(testNumber);

// if (result !== null) {
//   if (result) {
//     console.log(`${testNumber} is a prime number.`);
//   } else {
//     console.log(`${testNumber} is not a prime number.`);
//   }
// }
