import getAmazonProductCodes from './util/get-amazon-code';
import getTargetProductCodes from './util/get-target-code';

switch (window.location.host) {
  case 'www.amazon.com':
    getAmazonProductCodes();
    break;
  case 'www.target.com':
    getTargetProductCodes();
    break;
  default:
    break;
}
