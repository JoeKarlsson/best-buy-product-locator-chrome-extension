import getAmazonModelNumbers from './util/get-amazon-model';
import getTargetModelNumbers from './util/get-target-model';

switch (window.location.host) {
  case 'www.amazon.com':
    getAmazonModelNumbers();
    break;
  case 'www.target.com':
    getTargetModelNumbers();
    break;
  default:
    break;
}
