
export default (req, res) => {
  const { primeNumbers } = res.locals;
  const { number } = req.query;

  res.render('index', {
    title: 'Prime Tables',
    number: number || '',
    primeNumbers: primeNumbers || []
  });
};
