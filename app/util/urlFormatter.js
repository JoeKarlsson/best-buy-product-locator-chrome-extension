import { BASE_URL } from '../constants/constants';

export const constructProductURL = modelNumber => `${BASE_URL}products(modelNumber=${modelNumber})?apiKey=${
  process.env.BBY_API_KEY
}&sort=inStoreAvailability.asc&show=inStoreAvailability,name,sku,regularPrice,salePrice,addToCartUrl,condition&format=json`;

export const constructStoreURL = (skuId, zipCode, miles) => `${BASE_URL}stores((area(${zipCode},${miles})))+products(sku%20in%20(${skuId}))?apiKey=${
  process.env.BBY_API_KEY
}&show=products.sku,products.name,products.shortDescription,products.salePrice,products.regularPrice,products.addToCartURL,products.url,products.image,products.customerReviewCount,products.customerReviewAverage,address,address2,city,country,detailedHours,lat,location,lng,name,longName,phone,fullPostalCode,region,storeId&pageSize=5&format=json`;

export const constructNearestStoreMapUrl = (city, region, lat, lng) => `https://www.google.com/maps/search/Best+Buy+${city}+${region}/@${lat},${lng}`;
