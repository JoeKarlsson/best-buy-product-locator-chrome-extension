import api from './api';
import { constructProductURL, constructStoreURL } from './urlFormatter';

export const fetchProductData = async (modelNumber) => {
  try {
    const url = constructProductURL(modelNumber);
    return api(url);
  } catch (err) {
    return err;
  }
};

export function fetchStoreData(skuId, zipCode, miles) {
  try {
    const url = constructStoreURL(skuId, zipCode, miles);
    return api(url);
  } catch (err) {
    return err;
  }
}
