import walkDOM from './walk-dom';
import handleProductCode from './handle-product-code';
import * as constants from '../constants/constants';

const getTargetProductCodes = () => {
  const selector = 'tabContent-tab-Details';

  walkDOM(document.getElementById(selector), (node) => {
    if (node.nodeType === 1) {
      if (node.innerText === 'UPC') {
        const productCode = node.nextSibling.nextSibling.nextSibling.data.trim();
        handleProductCode(productCode, constants.UPC);
      }
    }
  });
};

export default getTargetProductCodes;
