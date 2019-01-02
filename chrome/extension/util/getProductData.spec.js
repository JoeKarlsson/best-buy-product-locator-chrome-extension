import fetchMock from 'fetch-mock';
import getProductData from './getProductData';
import { constructProductURL, constructStoreURLNoProducts } from './urlFormatter';
import * as storeFormatter from './storeFormatter';
import mockProductData from './__mocks__/mockProductData.json';
import mockStoreData from './__mocks__/mockStoreData.json';

jest.mock('./getGeoLocation');

describe('getProductData', () => {
  beforeEach(() => {
    fetchMock.reset();
  });

  it('should call callback after success', async () => {
    const position = {
      coords: {
        latitude: 54.980206086231,
        longitude: 82.898068362003,
      },
    };

    const modelNumber = 'UN55NU7100FXZA';
    const codeType = 'modelNumber';
    const productUrl = constructProductURL(modelNumber, codeType);
    fetchMock.once(productUrl, mockProductData);

    const distance = 15;
    const storeUrl = constructStoreURLNoProducts(
      position.coords.latitude,
      position.coords.longitude,
      distance,
    );
    fetchMock.once(storeUrl, mockStoreData);

    storeFormatter.getNearestStore = jest.fn().mockReturnValue(mockStoreData.stores[0]);

    const response = await getProductData(modelNumber, codeType);
    const expectedResponse = {
      addToCartUrl: 'https://api.bestbuy.com/click/-/6200125/cart',
      nearestStore: 'Richfield, MN',
      nearestStoreMapUrl:
        'https://www.google.com/maps/search/1000+West+78th+St+Best+Buy/@44.86321,-93.29274',
      price: 599.99,
      hours: {
        closingSoon: false,
        openNow: false,
        today: undefined,
        tomorrow: undefined,
      },
      url: undefined,
    };

    expect(response).toMatchObject(expectedResponse);
  });
});
