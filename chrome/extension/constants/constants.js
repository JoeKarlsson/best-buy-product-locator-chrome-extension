export const BASE_URL = 'https://api.bestbuy.com/v1/';
export const DEFAULT_ERROR_MESSAGE = 'Sorry, something went wrong. Please try again.';
export const DIV_ID = 'bby-product-locator';
export const STORAGE_PREFIX = 'bby-tab-';

export const MODEL_NUMBER = 'modelNumber';
export const UPC = 'upc';

export const AMAZON_HOST = 'www.amazon.com';
export const TARGET_HOST = 'www.target.com';
export const WALMART_HOST = 'www.walmart.com';

export const AMAZON_CODE_SELECTOR = '#prodDetails';
export const TARGET_CODE_SELECTOR = '#tabContent-tab-Details';
export const WALMART_CODE_SELECTOR = '.Specification-container';

export const AMAZON_CODE_TEXT = 'Item model number';
export const TARGET_CODE_TEXT = 'UPC';
export const WALMART_CODE_TEXT = 'Model';

export const AMAZON_CODE_TYPE = MODEL_NUMBER;
export const TARGET_CODE_TYPE = UPC;
export const WALMART_CODE_TYPE = MODEL_NUMBER;

export const AMAZON_TITLE_SELECTOR = '#productTitle';
export const TARGET_TITLE_SELECTOR = 'span[data-test="product-title"]';
export const WALMART_TITLE_SELECTOR = 'h1.prod-ProductTitle';

export const URL_WHITELIST = [
  '^https://www.amazon\\.com',
  '^https://www.target\\.com',
  '^https://www.walmart\\.com',
];

const CURRENT_SITES = [
  {
    host: AMAZON_HOST,
    codeSelector: AMAZON_CODE_SELECTOR,
    codeText: AMAZON_CODE_TEXT,
    codeType: AMAZON_CODE_TYPE,
    titleSelector: AMAZON_TITLE_SELECTOR,
  },
  {
    host: TARGET_HOST,
    codeSelector: TARGET_CODE_SELECTOR,
    codeText: TARGET_CODE_TEXT,
    codeType: TARGET_CODE_TYPE,
    titleSelector: TARGET_TITLE_SELECTOR,
  },
  {
    host: WALMART_HOST,
    codeSelector: WALMART_CODE_SELECTOR,
    codeText: WALMART_CODE_TEXT,
    codeType: WALMART_CODE_TYPE,
    titleSelector: WALMART_TITLE_SELECTOR,
  },
];

const currentSite = CURRENT_SITES.filter(site => window.location.host === site.host);

export const CURRENT_SITE = currentSite.length && currentSite[0];
