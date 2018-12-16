import walkDOM from './walk-dom';
import handleProductCode from './handle-product-code';
import waitUntilVisible from './wait-until-visible';
import * as constants from '../constants/constants';

const getWalmartProductCode = () => {
  waitUntilVisible('Specification-container', 'class', (element) => {
    walkDOM(element, (node) => {
      if (node.nodeType === 1) {
        if (node.innerHTML.trim() === 'Model') {
          const productCode = node.nextSibling.innerText;
          handleProductCode(productCode, constants.MODEL_NUMBER);
        }
      }
    });
  });
};

export default getWalmartProductCode;
