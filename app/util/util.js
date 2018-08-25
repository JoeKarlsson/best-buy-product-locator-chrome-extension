import { BASE_URL } from '../constants/constants';
import dataFetcher from './dataFetcher';

const constructProductURL = (baseURL, modelNumber) => `${BASE_URL}products(modelNumber=${modelNumber})?apiKey=${
  process.env.BBY_API_KEY
}&sort=inStoreAvailability.asc&show=inStoreAvailability,name,sku,regularPrice,salePrice,addToCartUrl,condition&format=json`;

const constructStoreURL = (baseURL, skuId, zipCode, miles) => `${BASE_URL}stores((area(${zipCode},${miles})))+products(sku%20in%20(${skuId}))?apiKey=${
  process.env.BBY_API_KEY
}&show=products.sku,products.name,products.shortDescription,products.salePrice,products.regularPrice,products.addToCartURL,products.url,products.image,products.customerReviewCount,products.customerReviewAverage,address,address2,city,country,detailedHours,lat,location,lng,name,longName,phone,fullPostalCode,region,storeId&pageSize=5&format=json`;

export function getModelNumber() {
  // eslint-disable-next-line no-unused-vars
  const modelRegex = new RegExp(/\b((?=[A-Za-z/ -]{0,19}\d)[A-Za-z0-9/ -]{4,20})\b/);
  // TODO: write DOM-scraper function to get product model number
}

export const fetchProductData = async (modelNumber) => {
  try {
    return dataFetcher(constructProductURL(BASE_URL, modelNumber));
  } catch (err) {
    return err;
  }
};

export function fetchStoreData(skuId, zipCode, miles) {
  try {
    return dataFetcher(constructStoreURL(BASE_URL, skuId, zipCode, miles));
  } catch (err) {
    return err;
  }
}
