import {
  constructProductCodeURL,
  constructStoreURL,
  constructNearestStoreMapUrl,
} from './urlFormatter';

describe('urlFormatter', () => {
  describe('constructProductCodeURL', () => {
    it('should return the Best Buy Product API URL', () => {
      const productCode = 'UN55NU7100FXZA';
      const codeType = 'modelNumber';

      const result = constructProductCodeURL(productCode, codeType);

      const expectedResult = 'https://api.bestbuy.com/v1/products(modelNumber=UN55NU7100FXZA)?apiKey=undefined&sort=inStoreAvailability.asc&show=inStoreAvailability,name,sku,regularPrice,salePrice,addToCartUrl,condition,image,url&format=json';
      expect(result).toBe(expectedResult);
    });
  });

  describe('constructStoreURL', () => {
    it('should return the Best Buy Store API URL', () => {
      const zipCode = '55126';
      const miles = 5;
      const skuId = '55126';

      const result = constructStoreURL(skuId, zipCode, miles);

      const expectedResult = 'https://api.bestbuy.com/v1/stores((area(55126, 5,undefined)))+products(sku%20in%20(55126))?apiKey=undefined&show=products.sku,products.name,products.shortDescription,products.salePrice,products.regularPrice,products.addToCartURL,products.url,products.image,products.customerReviewCount,products.customerReviewAverage&format=json';
      expect(result).toBe(expectedResult);
    });
  });

  describe('constructNearestStoreMapUrl', () => {
    it('should return the Best Buy Store nearest store URL', () => {
      const address = '123 Flavortown Rd';
      const lat = '123';
      const lng = '5678';

      const result = constructNearestStoreMapUrl(address, lat, lng);

      const expectedResult = `https://www.google.com/maps/search/123+Flavortown+Rd+Best+Buy/@${lat},${lng}`;
      expect(result).toBe(expectedResult);
    });
  });
});
