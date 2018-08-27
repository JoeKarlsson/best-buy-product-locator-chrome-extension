import { DEFAULT_ERROR_MESSAGE } from '../constants/constants';

const isNotHappyStatus = status => status >= 400;

const handleError = (err) => {
  const errMsg = err.toString();
  // eslint-disable-next-line no-console
  console.error(errMsg);
  return {
    errMsg,
    msg: DEFAULT_ERROR_MESSAGE,
  };
};

const handleResponse = (response) => {
  const { status } = response;
  console.log('response', response);
  if (isNotHappyStatus(status)) {
    return handleError('Bad response from server');
  }
  return response.json();
};

const api = (url, options) => fetch(url, options)
  .then(handleResponse)
  .catch(handleError);

export default api;
