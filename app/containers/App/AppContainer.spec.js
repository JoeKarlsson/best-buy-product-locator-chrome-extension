import 'jsdom-global/register';
import React from 'react';
import renderer from 'react-test-renderer';
import fetchMock from 'fetch-mock';
import { shallow } from 'enzyme';
import AppContainer from './AppContainer';
import { constructProductURL, constructStoreURL } from '../../util/urlFormatter';
import mockProductData from '../../util/__mocks__/mockProductData.json';
import mockStoreData from '../../util/__mocks__/mockStoreData.json';

describe('AppContainer', () => {
  const props = {
    nearestStore: 'Richfeild',
    nearestStoreMapUrl: 'www.testurl.com',
    price: 1234,
    addToCartUrl: 'www.testurl.com',
    isLoading: false,
    isPopup: true,
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

  describe('getProductCode', () => {
    it('should be called on mount', () => {
      const spy = jest.spyOn(AppContainer.prototype, 'getProductCode');
      shallow(<AppContainer {...props} />);
      expect(spy).toHaveBeenCalled();
    });

    it('should get product details from chrome storage', () => {
      const spy = jest.spyOn(chrome.storage.local, 'get');
      shallow(<AppContainer {...props} />);
      expect(spy).toHaveBeenCalled();
    });

    it('should call getProductData with expected params when product code is found', () => {
      const spy = jest.spyOn(AppContainer.prototype, 'getProductData');
      shallow(<AppContainer {...props} />);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith({
        productCode: 'UN55NU7100FXZA',
        codeType: 'modelNumber',
      });
    });
  });

  describe('rendering', () => {
    describe('initial state', () => {
      it('is rendered heathy state', () => {
        const productCode = 'UN55NU7100FXZA';
        const productUrl = constructProductURL(productCode);
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
