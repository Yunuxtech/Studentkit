export function convertUnits(value, fromUnit, toUnit) {
  const conversionFactors = {
    KilometerToMeter: 1000,
    CentimeterToMeter: 0.01,
    MillimeterToMeter: 0.001,
    InchToMeter: 0.0254,
    FootToMeter: 0.3048,
    YardToMeter: 0.9144,
    MileToMeter: 1609.34,
    KiloToGrams: 1000,
    MilligramToGram: 0.001,
    MicrogramToGram: 0.000001,
    OunceToGram: 28.35,
    PoundToGram: 453.592,
    TonToKilogram: 1000,
    FeetToMeter: 0.3048,
    MetersToKilometer: 0.001,
    MetersToCentimeter: 100,
    MetersToMillimeter: 1000,
    MetersToInche: 39.3701,
    MetersToFeet: 3.28084,
    MetersToYard: 1.09361,
    MetersToMile: 0.000621371,
    GramsToKilo: 0.001,
    GramsToMilligram: 1000,
    GramsToMicrogram: 1000000,
    GramsToOunce: 0.03527396,
    GramsToPound: 0.00220462,
    KilogramsToTon: 0.001,
  };

  const conversionKey = `${fromUnit}To${toUnit}`;

  if (
    typeof value === "number" &&
    conversionFactors.hasOwnProperty(conversionKey)
  ) {
    // Ensure value is a number and a valid conversion factor exists
    const convertedValue = value * conversionFactors[conversionKey];
    return convertedValue;
  } else {
    // Handle invalid input
    console.error(
      "Invalid input. Please provide a numeric value and valid units for conversion."
    );
    return null;
  }
}

// Example usage:
// const lengthInMeters = 5;
// const lengthInFeet = convertUnits(lengthInMeters, "meters", "feet");
// if (lengthInFeet !== null) {
//   console.log(`${lengthInMeters} meters is equal to ${lengthInFeet} feet.`);
// }

// const temperatureInCelsius = 25;
// const temperatureInFahrenheit = convertUnits(
//   temperatureInCelsius,
//   "celsius",
//   "fahrenheit"
// );
// if (temperatureInFahrenheit !== null) {
//   console.log(
//     `${temperatureInCelsius} Celsius is equal to ${temperatureInFahrenheit} Fahrenheit.`
//   );
// }
