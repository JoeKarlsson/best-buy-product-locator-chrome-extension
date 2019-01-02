import { BASE_URL } from '../constants/constants';

export const constructProductURL = (productCode, codeType) => `${BASE_URL}products(${codeType}=${productCode})?apiKey=${
  process.env.BBY_API_KEY
}&sort=inStoreAvailability.asc&show=inStoreAvailability,name,sku,regularPrice,salePrice,addToCartUrl,condition,image,url&format=json`;

export const constructStoreURL = (skuId, latitude, longitude, distance) => `${BASE_URL}stores((area(${latitude}, ${longitude},${distance})))+products(sku%20in%20(${skuId}))?apiKey=${
  process.env.BBY_API_KEY
}&show=products.sku,products.name,products.shortDescription,products.salePrice,products.regularPrice,products.addToCartURL,products.url,products.image,products.customerReviewCount,products.customerReviewAverage&format=json`;

export const constructStoreURLNoProducts = (latitude, longitude, distance) => `${BASE_URL}stores((area(${latitude}, ${longitude},${distance})))?apiKey=${
  process.env.BBY_API_KEY
}&format=json&show=all`;

export const constructNearestStoreMapUrl = (address, lat, lng) => `https://www.google.com/maps/search/${address.replace(/ /g, '+')}+Best+Buy/@${lat},${lng}`;
