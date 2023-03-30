export const getUppercase = () => {
  const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
};

export const getLowercase = () => {
  const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
};

export const getNumber = () => {
  const numbers = "0123456789";
  return numbers[Math.floor(Math.random() * numbers.length)];
};

export const getSymbol = () => {
  const symbols = "!@#$%^&*()_+=";
  return symbols[Math.floor(Math.random() * symbols.length)];
};
