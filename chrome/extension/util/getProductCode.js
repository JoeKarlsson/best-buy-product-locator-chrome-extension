import getAmazonProductCode from './getAmazonProductCode';
import getTargetProductCode from './getTargetProductCode';
import getWalmartProductCode from './getWalmartProductCode';
import * as constants from '../constants/constants';

const handleProduct = async () => {
  let code = '';
  let type = constants.MODEL_NUMBER;
  switch (window.location.host) {
    case 'www.amazon.com':
      code = await getAmazonProductCode();
      break;
    case 'www.target.com':
      code = await getTargetProductCode();
      type = constants.UPC;
      break;
    case 'www.walmart.com':
      code = await getWalmartProductCode();
      break;
    default:
      break;
  }
  return {
    code,
    type,
  };
};

export default handleProduct;
