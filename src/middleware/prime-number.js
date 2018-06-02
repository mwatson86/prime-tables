
import { getPrimeNumbersFrom } from 'utils/prime-number';

export default (req, res, next) => {
  const { number } = req.query;

  if (number) {
    res.locals.primeNumbers = getPrimeNumbersFrom(number);
  }

  return next();
};
