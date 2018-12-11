import getAmazonProductCode from './util/get-amazon-code';
import getTargetProductCode from './util/get-target-code';
import getWalmartProductCode from './util/get-walmart-code';

switch (window.location.host) {
  case 'www.amazon.com':
    getAmazonProductCode();
    break;
  case 'www.target.com':
    getTargetProductCode();
    break;
  case 'www.walmart.com':
    getWalmartProductCode();
    break;
  default:
    break;
}
