// import api from './api';
// import { constructProductURL, constructStoreURL } from './urlFormatter';
//
// export const fetchProductData = async (modelNumber) => {
//   try {
//     const url = constructProductURL(modelNumber);
//     return api(url);
//   } catch (err) {
//     return err;
//   }
// };
//
// export function fetchStoreData(skuId, zipCode, miles) {
//   try {
//     const url = constructStoreURL(skuId, zipCode, miles);
//     return api(url);
//   } catch (err) {
//     return err;
//   }
// }

import fetchMock from 'fetch-mock';
import { DEFAULT_ERROR_MESSAGE } from '../constants/constants';
import { fetchProductData, fetchStoreData } from './fetchBestBuyData';

describe('fetchBestBuyData', () => {
  beforeEach(() => {
    fetchMock.reset();
  });

  describe('fetchProductData', () => {
    it('should call callback after success', async () => {
      const url = 'https://api.bestbuy.com/v1/products(modelNumber=UN55NU7100FXZA)?apiKey=undefined&sort=inStoreAvailability.asc&show=inStoreAvailability,name,sku,regularPrice,salePrice,addToCartUrl,condition&format=json';
      const modelNumber = 'UN55NU7100FXZA';

      const mockResponse = {
        test: 'data',
      };
      fetchMock.once(url, mockResponse);

      const response = await fetchProductData(modelNumber);
      expect(response).toMatchObject(mockResponse);
    });

    it('should handle Errors Statuses > 400', async () => {
      const url = 'https://api.bestbuy.com/v1/products(modelNumber=1234)?apiKey=undefined&sort=inStoreAvailability.asc&show=inStoreAvailability,name,sku,regularPrice,salePrice,addToCartUrl,condition&format=json';
      const modelNumber = '1234';

      const errMsg = 'Bad response from server';
      const errResponse = {
        body: errMsg,
        status: 500,
      };
      const options = {
        status: 500,
      };
      fetchMock.once(url, errResponse, options);

      const expectedResponse = {
        errMsg,
        msg: DEFAULT_ERROR_MESSAGE,
      };

      const response = await fetchProductData(modelNumber);
      expect(response).toMatchObject(expectedResponse);
    });
  });

  describe('fetchStoreData', () => {
    it('should call callback after success', async () => {
      const url = 'https://api.bestbuy.com/v1/stores((area(5678,10)))+products(sku%20in%20(1234))?apiKey=undefined&show=products.sku,products.name,products.shortDescription,products.salePrice,products.regularPrice,products.addToCartURL,products.url,products.image,products.customerReviewCount,products.customerReviewAverage,address,address2,city,country,detailedHours,lat,location,lng,name,longName,phone,fullPostalCode,region,storeId&pageSize=5&format=json';
      const skuId = '1234';
      const zipCode = '5678';
      const miles = 10;

      const mockResponse = {
        test: 'data',
      };
      fetchMock.once(url, mockResponse);

      const response = await fetchStoreData(skuId, zipCode, miles);
      expect(response).toMatchObject(mockResponse);
    });

    it('should handle Errors Statuses > 400', async () => {
      const url = 'https://api.bestbuy.com/v1/stores((area(5678,10)))+products(sku%20in%20(12345))?apiKey=undefined&show=products.sku,products.name,products.shortDescription,products.salePrice,products.regularPrice,products.addToCartURL,products.url,products.image,products.customerReviewCount,products.customerReviewAverage,address,address2,city,country,detailedHours,lat,location,lng,name,longName,phone,fullPostalCode,region,storeId&pageSize=5&format=json';
      const skuId = '12345';
      const zipCode = '5678';
      const miles = 10;

      const errMsg = 'Bad response from server';
      const errResponse = {
        body: errMsg,
        status: 500,
      };
      const options = {
        status: 500,
      };
      fetchMock.once(url, errResponse, options);

      const expectedResponse = {
        errMsg,
        msg: DEFAULT_ERROR_MESSAGE,
      };

      const response = await fetchStoreData(skuId, zipCode, miles);
      expect(response).toMatchObject(expectedResponse);
    });
  });
});
