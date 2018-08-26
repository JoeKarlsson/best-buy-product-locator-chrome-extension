import React from 'react';
import renderer from 'react-test-renderer';
import fetchMock from 'fetch-mock';
import AppContainer from './App';
import { constructProductURL, constructStoreURL } from '../../util/urlFormatter';
import mockProductData from '../../util/__mocks__/mockProductData.json';
import mockStoreData from '../../util/__mocks__/mockStoreData.json';

describe('AppContainer', () => {
  beforeEach(() => {
    fetchMock.reset();
  });

  describe('rendering', () => {
    describe('initial state', () => {
      it('is rendered heathy state', () => {
        const modelNumber = 'UN55NU7100FXZA';
        const productUrl = constructProductURL(modelNumber);
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
