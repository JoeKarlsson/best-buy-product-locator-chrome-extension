export const BASE_URL = 'https://api.bestbuy.com/v1/';
export const DEFAULT_ERROR_MESSAGE = 'Sorry, something went wrong. Please try again.';
export const DIV_ID = 'bby-product-locator';

export const MODEL_NUMBER = 'modelNumber';
export const UPC = 'upc';

export const AMAZON_CODE_SELECTOR = '#prodDetails';
export const TARGET_CODE_SELECTOR = '#tabContent-tab-Details';
export const WALMART_CODE_SELECTOR = '.Specification-container';

export const AMAZON_TITLE_SELECTOR = '#productTitle';
export const TARGET_TITLE_SELECTOR = 'span[data-test="product-title"]';
export const WALMART_TITLE_SELECTOR = 'h1.prod-ProductTitle';

export const URL_WHITELIST = [
  '^https://www.amazon\\.com',
  '^https://www.target\\.com',
  '^https://www.walmart\\.com',
];

export const PRODUCT_CODE_KEYWORDS = [
  {
    text: 'model number',
    type: MODEL_NUMBER,
  },
  {
    text: 'upc',
    type: UPC,
  },
  {
    text: 'universal product code',
    type: UPC,
  },
];
