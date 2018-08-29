import fetchMock from 'fetch-mock';
import getProductAvailability from './getProductAvailability';
import { constructProductURL, constructStoreURLNoProducts } from './urlFormatter';
import mockProductData from './__mocks__/mockProductData.json';
import mockStoreData from './__mocks__/mockStoreData.json';

jest.mock('./getGeoLocation');

describe('getProductAvailability', () => {
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
    const productUrl = constructProductURL(modelNumber);
    fetchMock.once(productUrl, mockProductData);

    const distance = 15;
    const storeUrl = constructStoreURLNoProducts(
      position.coords.latitude,
      position.coords.longitude,
      distance,
    );
    fetchMock.once(storeUrl, mockStoreData);

    const response = await getProductAvailability(modelNumber);
    const expectedResponse = {
      addToCartUrl: 'https://api.bestbuy.com/click/-/6200125/cart',
      nearestStore: 'Richfield, MN',
      nearestStoreMapUrl:
        'https://www.google.com/maps/search/Best+Buy+Richfield+MN/@44.86321,-93.29274',
      price: 599.99,
    };

    expect(response).toMatchObject(expectedResponse);
  });
});
