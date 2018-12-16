import walkDOM from './walk-dom';
import handleProductCode from './handle-product-code';
import waitUntilVisible from './wait-until-visible';
import * as constants from '../constants/constants';

const getAmazonProductCode = () => {
  waitUntilVisible('prodDetails', 'id', (element) => {
    walkDOM(element, (node) => {
      if (node.nodeType === 1) {
        if (node.innerHTML.trim() === 'Item model number') {
          const productCode = node.nextSibling.nextSibling.innerText;
          handleProductCode(productCode, constants.MODEL_NUMBER);
        }
      }
    });
  });
};

export default getAmazonProductCode;
