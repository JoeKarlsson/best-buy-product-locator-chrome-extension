import walkDOM from './walk-dom';
import handleProductCode from './handle-product-code';
import waitUntilVisible from './wait-until-visible';
import * as constants from '../constants/constants';

const getTargetProductCode = () => {
  waitUntilVisible('tabContent-tab-Details', 'id', (element) => {
    walkDOM(element, (node) => {
      if (node.nodeType === 1) {
        if (node.innerText === 'UPC') {
          const productCode = node.nextSibling.nextSibling.nextSibling.data.trim();
          handleProductCode(productCode, constants.UPC);
        }
      }
    });
  });
};

export default getTargetProductCode;
