
export const hasRemainder = (number, multiplier) => {
  return number % multiplier !== 0;
};

export const getSqrt = (number) => {
  return Math.floor(Math.sqrt(number));
};

export const getPrimeNumbersFrom = (number) => {
  const sieve = [];

  out:
  for (let i = 2; i <= number; i++) {
    const sqrt = getSqrt(i);

    for (let j = 2; j <= sqrt; j++) {
      if (!hasRemainder(i, j)) {
        continue out;
      }
    }

    sieve.push(i);
  }

  return sieve;
};
