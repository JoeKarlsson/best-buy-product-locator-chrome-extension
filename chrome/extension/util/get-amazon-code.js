import walkDOM from './walk-dom';
import handleProductCode from './handle-product-code';
import * as constants from '../constants/constants';

const getAmazonProductCodes = () => {
  const selector = 'prodDetails';

  walkDOM(document.getElementById(selector), (node) => {
    if (node.nodeType === 1) {
      if (node.innerHTML.trim() === 'Item model number') {
        const productCode = node.nextSibling.nextSibling.innerText;
        handleProductCode(productCode, constants.MODEL_NUMBER);
      }
    }
  });
};

export default getAmazonProductCodes;
