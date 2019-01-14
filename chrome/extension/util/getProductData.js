import {
  constructProductCodeURL,
  constructProductSearchURL,
  constructStoreURLNoProducts,
  constructNearestStoreMapUrl,
} from './urlFormatter';
import getSearchParams from './getSearchParams';
import { getNearestStore, formatStoreHours } from './storeFormatter';
import api from './api';
import getGeoLocation from './getGeoLocation';
import handleError from './handleError';

const isValidProductData = productData => productData.products && productData.products.length > 0;

const isValidStoreData = storeData => storeData.stores && storeData.stores.length > 0;

const defaultProduct = {
  name: undefined,
  image: undefined,
  addToCartUrl: undefined,
  salePrice: undefined,
  regularPrice: undefined,
  url: undefined,
};

const defaultNearestStore = {
  address: undefined,
  city: undefined,
  detailedHours: undefined,
  region: undefined,
  lat: undefined,
  lng: undefined,
};

const buildDataProductDataResult = (
  product = defaultProduct,
  nearestStore = defaultNearestStore,
) => {
  const {
    address, city, detailedHours, region, lat, lng
  } = nearestStore;

  const data = {
    name: product.name,
    image: product.image,
    addToCartUrl: product.addToCartUrl,
    product,
    hours: detailedHours ? formatStoreHours(detailedHours) : undefined,
    nearestStore: city ? `${city}, ${region}` : undefined,
    nearestStoreMapUrl: address ? constructNearestStoreMapUrl(address, lat, lng) : undefined,
    price: product.salePrice || product.regularPrice,
    url: product.url,
  };
  return data;
};

const getProductData = async (code, type, title) => {
  let productURL;
  if (code) {
    productURL = constructProductCodeURL(code, type);
  } else if (title) {
    const params = getSearchParams(title);
    productURL = constructProductSearchURL(params);
  }

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

        return buildDataProductDataResult(product, nearestStore);
      }
      return buildDataProductDataResult(product);
    }
    // No product found
    return;
  } catch (err) {
    return handleError(err);
  }
};

export default getProductData;
