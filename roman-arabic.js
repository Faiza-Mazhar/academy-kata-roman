const romanNumerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const convertRomanNumerals = (number) => {
  let sum = 0;
  const romanLiterals = number
    .split("")
    .filter((romanLiteral) => romanNumerals[romanLiteral]);

  if (romanLiterals && romanLiterals.length) {
    let numberLiterals = romanLiterals.map((number) => romanNumerals[number]);
    if (
      isMoreThanThreeSameUnits(numberLiterals) ||
      repeatedFivers(numberLiterals)
    ) {
      return undefined;
    }
    for (let index = numberLiterals.length - 1; index >= 0; index--) {
      if (numberLiterals[index] > numberLiterals[index - 1]) {
        numberLiterals[index - 1] =
          numberLiterals[index] - numberLiterals[index - 1];
        numberLiterals.splice(index, 1);
      }
    }

    sum = numberLiterals.reduce(reducer, 0);
  }
  return sum;
};

const checkFiver = (number) => number % 5 === 0 && number % 10 !== 0;

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const isMoreThanThreeSameUnits = (numberLiterals) => {
  for (let index = 0; index < numberLiterals.length - 3; index++) {
    if (
      numberLiterals[index] === numberLiterals[index + 1] &&
      numberLiterals[index] === numberLiterals[index + 2] &&
      numberLiterals[index] === numberLiterals[index + 3]
    ) {
      return true;
    }
  }
  return false;
};

const repeatedFivers = (numberLiterals) => {
  for (let index = 0; index < numberLiterals.length - 1; index++) {
    const isFiverNumber = (numberLiterals[index] + "").split("")[0] === "5";

    if (isFiverNumber && numberLiterals[index] === numberLiterals[index + 1]) {
      return true;
    }
  }
  return false;
};

module.exports = convertRomanNumerals;
