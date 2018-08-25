import { DEFAULT_ERROR_MESSAGE } from '../constants/constants';

const handleError = (err) => {
  const errMsg = err.toString();
  // eslint-disable-next-line no-console
  console.error(errMsg);
  return {
    errMsg,
    msg: DEFAULT_ERROR_MESSAGE,
  };
};

export default handleError;
