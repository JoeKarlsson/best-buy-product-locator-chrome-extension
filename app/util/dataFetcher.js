import handleError from './handleError';

export default function fetchData(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(url);

      if (response.ok) {
        resolve(await response.json());
      }
    } catch (err) {
      const errMsg = handleError(err);
      reject(errMsg);
    }
  });
}
