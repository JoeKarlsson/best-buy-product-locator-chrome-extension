const handleError = (err) => {
  const errMsg = err.toString();
  // eslint-disable-next-line no-console
  console.error(errMsg);
  throw new Error(errMsg);
};

export default handleError;
