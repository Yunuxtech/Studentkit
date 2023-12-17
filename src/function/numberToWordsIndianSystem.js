export function numberToWords(number) {
  const units = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const teens = [
    "",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  if (
    typeof number === "number" &&
    Number.isInteger(number) &&
    number >= 0 &&
    number <= 999
  ) {
    if (number === 0) {
      return "zero";
    }

    let result = "";

    // Handle hundreds
    const hundreds = Math.floor(number / 100);
    if (hundreds > 0) {
      result += units[hundreds] + " hundred ";
    }

    // Handle tens and ones
    const remainder = number % 100;
    if (remainder > 0) {
      if (remainder < 10) {
        result += units[remainder];
      } else if (remainder < 20) {
        result += teens[remainder - 10];
      } else {
        const tensDigit = Math.floor(remainder / 10);
        const onesDigit = remainder % 10;
        result += tens[tensDigit];
        if (onesDigit > 0) {
          result += "-" + units[onesDigit];
        }
      }
    }

    return result.trim();
  } else {
    // Handle invalid input
    console.error(
      "Invalid input. Please provide a non-negative integer up to 999."
    );
    return null;
  }
}

// Example usage:
// const number = 256;
// const words = numberToWords(number);
// if (words !== null) {
//   console.log(`${number} in words: ${words}`);
// }
