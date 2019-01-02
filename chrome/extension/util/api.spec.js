import fetchMock from 'fetch-mock';
import { DEFAULT_ERROR_MESSAGE } from '../constants/constants';
import api from './api';

describe('api', () => {
  beforeEach(() => {
    fetchMock.reset();
  });

  it('should call callback after success', async () => {
    const url = '/test/endpoint';
    const mockResponse = {
      test: 'data',
    };
    fetchMock.once(url, mockResponse);

    const response = await api(url);
    expect(response).toMatchObject(mockResponse);
  });

  it('should handle Errors Statuses > 400', async () => {
    const url = '/test/api/endpoint';
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

    const response = await api(url);
    expect(response).toMatchObject(expectedResponse);
  });
});
