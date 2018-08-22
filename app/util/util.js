import API_KEY from '../../api-key';

const BASE_URL = 'https://api.bestbuy.com/v1/';

export function getModelNumber() {
  const modelRegex = new RegExp(/\b((?=[A-Za-z/ -]{0,19}\d)[A-Za-z0-9/ -]{4,20})\b/);
  // TODO: write DOM-scraper function to get product model number
}

export function fetchProductData(modelNumber) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${BASE_URL}products(modelNumber=${modelNumber})?apiKey=${API_KEY}&sort=inStoreAvailability.asc&show=inStoreAvailability,name,sku,regularPrice,salePrice,addToCartUrl,condition&format=json`
      );

      if (response.ok) {
        resolve(await response.json());
      }
    } catch (err) {
      reject(err);
    }
  });
}

export function fetchStoreData(skuId, zipCode, miles) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${BASE_URL}stores((area(${zipCode},${miles})))+products(sku%20in%20(${skuId}))?apiKey=${API_KEY}&show=products.sku,products.name,products.shortDescription,products.salePrice,products.regularPrice,products.addToCartURL,products.url,products.image,products.customerReviewCount,products.customerReviewAverage,address,address2,city,country,detailedHours,lat,location,lng,name,longName,phone,fullPostalCode,region,storeId&pageSize=5&format=json`
      );

      if (response.ok) {
        resolve(await response.json());
      }
    } catch (err) {
      reject(err);
    }
  });
}
