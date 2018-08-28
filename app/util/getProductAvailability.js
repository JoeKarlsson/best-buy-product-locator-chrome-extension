import {
  constructProductURL,
  // constructUpcURL,
  constructStoreURL,
  constructNearestStoreMapUrl,
} from './urlFormatter';
import api from './api';
import handleError from './handleError';

const isValidProductData = productData => productData.products && productData.products.length > 0;

const isValidStoreData = storeData => storeData.stores && storeData.stores.length > 0;

const getProductAvailability = async (modelNumber) => {
  const productURL = constructProductURL(modelNumber);
  const productData = await api(productURL);

  try {
    if (isValidProductData(productData)) {
      const product = productData.products[0];
      const skuId = product.sku;

      // TODO: figure out how to get zipcode or geolocation coordinates
      const storeURL = constructStoreURL(skuId, '55423', '15');
      const storeData = await api(storeURL);

      if (isValidStoreData(storeData)) {
        const nearestStore = storeData.stores[0];

        const {
          city, region, lat, lng
        } = nearestStore;

        const data = {
          addToCartUrl: product.addToCartUrl,
          nearestStore: `${city}, ${region}` || undefined,
          nearestStoreMapUrl: constructNearestStoreMapUrl(city, region, lat, lng) || undefined,
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
  } catch (err) {
    return handleError(err);
  }
};

export default getProductAvailability;
