export function numberToRoman(number) {
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  if (
    typeof number === "number" &&
    Number.isInteger(number) &&
    number > 0 &&
    number < 4000
  ) {
    let result = "";

    for (const numeral of romanNumerals) {
      while (number >= numeral.value) {
        result += numeral.numeral;
        number -= numeral.value;
      }
    }

    return result;
  } else {
    // Handle invalid input
    console.error(
      "Invalid input. Please provide a positive integer between 1 and 3999."
    );
    return null;
  }
}

// Example usage:
// const number = 1984;
// const romanNumeral = numberToRoman(number);
// if (romanNumeral !== null) {
//   console.log(`${number} in Roman numerals: ${romanNumeral}`);
// }
