export function convertTemperature(value, fromUnit, toUnit) {
  if (
    typeof value === "number" &&
    (fromUnit === "Celsius" || fromUnit === "Fahrenheit") &&
    (toUnit === "Celsius" || toUnit === "Fahrenheit")
  ) {
    // Ensure value is a number and valid temperature units are provided
    if (fromUnit === toUnit) {
      return value; // No conversion needed for same units
    } else if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
      return (value * 9) / 5 + 32; // Celsius to Fahrenheit conversion
    } else {
      return ((value - 32) * 5) / 9; // Fahrenheit to Celsius conversion
    }
  } else {
    // Handle invalid input
    console.error(
      "Invalid input. Please provide a numeric value and valid temperature units (Celsius or Fahrenheit)."
    );
    return null;
  }
}

// Example usage:
// const temperatureValue = 25;
// const convertedTemperature = convertTemperature(
//   temperatureValue,
//   "Celsius",
//   "Fahrenheit"
// );
// if (convertedTemperature !== null) {
//   console.log(
//     `${temperatureValue} Celsius is equal to ${convertedTemperature} Fahrenheit.`
//   );
// }
