import { BASE_URL } from '../constants/constants';

export const constructProductURL = modelNumber => `${BASE_URL}products(modelNumber=${modelNumber})?apiKey=${
  process.env.BBY_API_KEY
}&sort=inStoreAvailability.asc&show=inStoreAvailability,name,sku,regularPrice,salePrice,addToCartUrl,condition&format=json`;

export const constructUpcURL = upc => `${BASE_URL}products(upc=${upc})?apiKey=${process.env.BBY_API_KEY}&sort=inStoreAvailability.asc`;

export const constructStoreURL = (skuId, zipCode, miles) => `${BASE_URL}stores((area(${zipCode},${miles})))?apiKey=${process.env.BBY_API_KEY}&format=json`;

export const constructNearestStoreMapUrl = (city, region, lat, lng) => `https://www.google.com/maps/search/Best+Buy+${city}+${region}/@${lat},${lng}`;
