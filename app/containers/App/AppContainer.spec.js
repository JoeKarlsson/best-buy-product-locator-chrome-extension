import React from 'react';
import renderer from 'react-test-renderer';
import fetchMock from 'fetch-mock';
import { shallow } from 'enzyme';
import AppContainer from './AppContainer';
import {
  constructProductCodeURL,
  constructStoreURL,
} from '../../../chrome/extension/util/urlFormatter';
import mockProductData from '../../../chrome/extension/util/__mocks__/mockProductData.json';
import mockStoreData from '../../../chrome/extension/util/__mocks__/mockStoreData.json';

describe('AppContainer', () => {
  const props = {
    nearestStore: 'Richfeild',
    nearestStoreMapUrl: 'www.testurl.com',
    price: 1234,
    addToCartUrl: 'www.testurl.com',
    url: 'www.testurl.com',
    isLoading: false,
    isPopup: true,
    name: 'Testing',
    hours: {
      closingSoon: true,
      openNow: true,
      today: {
        close: '21:00',
        closeAmPm: '9:00 pm',
        date: '2018-08-27',
        day: 'Today',
        open: '10:00',
        openAmPm: '10:00 am',
      },
      tomorrow: {
        close: '21:00',
        closeAmPm: '9:00 pm',
        date: '2018-08-28',
        day: 'Tomorrow',
        open: '10:00',
        openAmPm: '10:00 am',
      },
    },
  };

  beforeEach(() => {
    chrome.storage.local.set({
      productCode: 'UN55NU7100FXZA',
      codeType: 'modelNumber',
    });

    fetchMock.reset();
  });

  describe('getActiveTab', () => {
    it('should be called on mount', () => {
      const spy = jest.spyOn(AppContainer.prototype, 'getActiveTab');
      shallow(<AppContainer {...props} />);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('getProductData', () => {
    it('should be called on mount', () => {
      const url = 'https://api.bestbuy.com/v1/products(modelNumber=UN55NU7100FXZA)?apiKey=undefined&sort=inStoreAvailability.asc&show=inStoreAvailability,name,sku,regularPrice,salePrice,addToCartUrl,condition,image,url&format=json';
      const mockResponse = {
        test: 'data',
      };
      fetchMock.once(url, mockResponse);
      const spy = jest.spyOn(AppContainer.prototype, 'getProductData');
      shallow(<AppContainer {...props} />);
      expect(spy).toHaveBeenCalled();
    });

    it('should get product details from chrome storage', () => {
      const spy = jest.spyOn(chrome.storage.local, 'get');
      shallow(<AppContainer {...props} />);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('rendering', () => {
    describe('initial state', () => {
      it('is rendered heathy state', () => {
        const productCode = 'UN55NU7100FXZA';
        const productUrl = constructProductCodeURL(productCode);
        fetchMock.once(productUrl, mockProductData);

        const zipCode = '55126';
        const miles = 5;
        const skuId = '55126';
        const storeUrl = constructStoreURL(skuId, zipCode, miles);
        fetchMock.once(storeUrl, mockStoreData);

        const component = renderer.create(<AppContainer />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
