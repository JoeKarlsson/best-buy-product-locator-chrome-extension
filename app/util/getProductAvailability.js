import {
  constructProductURL,
  constructStoreURLNoProducts,
  constructNearestStoreMapUrl,
} from './urlFormatter';
import { getNearestStore, formatStoreHours } from './storeFormatter';
import api from './api';
import getGeoLocation from './getGeoLocation';
import handleError from './handleError';

const isValidProductData = productData => productData.products && productData.products.length > 0;

const isValidStoreData = storeData => storeData.stores && storeData.stores.length > 0;

const getProductAvailability = async (productCode, codeType) => {
  const productURL = constructProductURL(productCode, codeType);

  try {
    const productData = await api(productURL);
    if (isValidProductData(productData)) {
      const product = productData.products[0];
      const postion = await getGeoLocation();
      const { latitude, longitude } = postion.coords;

      const distance = 15;
      const storeURL = constructStoreURLNoProducts(latitude, longitude, distance);
      const storeData = await api(storeURL);

      if (isValidStoreData(storeData)) {
        const nearestStore = getNearestStore(storeData.stores);

        const {
          address, city, region, lat, lng
        } = nearestStore;

        const data = {
          addToCartUrl: product.addToCartUrl,
          hours: formatStoreHours(nearestStore.detailedHours) || undefined,
          nearestStore: `${city}, ${region}` || undefined,
          nearestStoreMapUrl: constructNearestStoreMapUrl(address, lat, lng) || undefined,
          price: product.salePrice || product.regularPrice,
        };

        return data;
      }

      const data = {
        addToCartUrl: product.addToCartUrl,
        nearestStore: undefined,
        nearestStoreMapUrl: undefined,
        price: product.salePrice || product.regularPrice,
      };

      return data;
    }
    // No product found
    const data = {
      addToCartUrl: '',
      nearestStore: undefined,
      nearestStoreMapUrl: undefined,
      price: undefined,
    };
    return data;
  } catch (err) {
    return handleError(err);
  }
};

export default getProductAvailability;
