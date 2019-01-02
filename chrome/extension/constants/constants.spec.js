import { DEFAULT_ERROR_MESSAGE, BASE_URL } from './constants';

describe('Constants', () => {
  describe('DEFAULT_ERROR_MESSAGE', () => {
    it('should match the default error message', () => {
      expect(DEFAULT_ERROR_MESSAGE).toBe('Sorry, something went wrong. Please try again.');
    });
  });

  describe('BASE_URL', () => {
    it('should match the default base URL', () => {
      expect(BASE_URL).toBe('https://api.bestbuy.com/v1/');
    });
  });
});
