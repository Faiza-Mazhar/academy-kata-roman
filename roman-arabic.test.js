const { expect } = require("@jest/globals");

const convertRomanNumerals = require("./roman-arabic");

test("If the input is I, output will be 1", () => {
  expect(convertRomanNumerals("I")).toBe(1);
});

test("If the input is IV, output will be 4", () => {
  expect(convertRomanNumerals("IV")).toBe(4);
});

test("If the input is IX, output will be 9", () => {
  expect(convertRomanNumerals("IX")).toBe(9);
});

test("If the input is XL, output will be 40", () => {
  expect(convertRomanNumerals("XL")).toBe(40);
});

test("If the input is CM, output will be (900)", () => {
  expect(convertRomanNumerals("CM")).toBe(900);
});

test("If the input is MCMXCIX, output will be (1999)", () => {
  expect(convertRomanNumerals("MCMXCIX")).toBe(1999);
});

test("If a Unit character more than 3 times return undefined", () => {
  expect(convertRomanNumerals("IIII")).toBeUndefined();
});

test("If repeated fivers then return undefined", () => {
  expect(convertRomanNumerals("VV")).toBeUndefined();
});

test("If input has an invalid roman numeral, it filter is out", () => {
  expect(convertRomanNumerals("XRTI")).toBe(11);
});
