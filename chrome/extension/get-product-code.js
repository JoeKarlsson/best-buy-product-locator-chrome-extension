import getAmazonProductCode from './util/get-amazon-code';
import getTargetProductCode from './util/get-target-code';

switch (window.location.host) {
  case 'www.amazon.com':
    getAmazonProductCode();
    break;
  case 'www.target.com':
    getTargetProductCode();
    break;
  default:
    break;
}
