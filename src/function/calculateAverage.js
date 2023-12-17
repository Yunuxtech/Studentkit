export function calculateAverage(numbers) {
  // Check if the input is an array
  if (!Array.isArray(numbers)) {
    throw new Error("Input must be an array.");
  }

  // Check if the array is not empty
  if (numbers.length === 0) {
    throw new Error("Array must not be empty.");
  }

  // Check if all items in the array are numbers
  if (!numbers.every((number) => typeof number === "number")) {
    throw new Error("All items in the array must be numbers.");
  }

  // Calculate the average
  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const average = sum / numbers.length;

  return average;
}

// Example usage:
// const numbersArray = [2, 4, 6, 8, 10];
// const result = calculateAverage(numbersArray);
// console.log("Average:", result);
