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
          nearestStore: `${city}, ${region}`,
          nearestStoreMapUrl: constructNearestStoreMapUrl(city, region, lat, lng),
          price: product.salePrice || product.regularPrice,
        };
        console.log('data', data);

        return data;
      }
    }
  } catch (err) {
    console.log('err', err);
    handleError(err);
  }
};

export default getProductAvailability;
