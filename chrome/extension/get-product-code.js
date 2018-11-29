import getAmazonProductCode from './util/get-amazon-code';
import getTargetProductCode from './util/get-target-code';

console.log('window.location.host', window.location.host);
switch (window.location.host) {
  case 'www.amazon.com':
    getAmazonProductCode();
    break;
  case 'www.target.com':
    console.log('hit target');
    getTargetProductCode();
    break;
  default:
    break;
}
