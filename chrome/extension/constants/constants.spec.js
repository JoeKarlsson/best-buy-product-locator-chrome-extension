import * as constants from './constants';

describe('constants', () => {
  beforeEach(() => {});

  describe('DEFAULT_ERROR_MESSAGE', () => {
    it('should match the default error message', () => {
      expect(constants.DEFAULT_ERROR_MESSAGE).toBe(
        'Sorry, something went wrong. Please try again.',
      );
    });
  });

  describe('BASE_URL', () => {
    it('should match the default base URL', () => {
      expect(constants.BASE_URL).toBe('https://api.bestbuy.com/v1/');
    });
  });

  describe('DIV_ID', () => {
    it('should match the default div id', () => {
      expect(constants.DIV_ID).toBe('bby-product-locator');
    });
  });

  describe('STORAGE_PREFIX', () => {
    it('should match the default storage prefix', () => {
      expect(constants.STORAGE_PREFIX).toBe('bby-tab-');
    });
  });
});
