import walkDOM from './walk-dom';
import handleProductCode from './handle-product-code';

const getTargetProductCodes = () => {
  const selector = 'tabContent-tab-Details';

  walkDOM(document.getElementById(selector), (node) => {
    if (node.nodeType === 1) {
      if (node.innerText === 'UPC') {
        const productCode = node.nextSibling.nextSibling.nextSibling.data.trim();
        handleProductCode(productCode, 'upc');
      }
    }
  });
};

export default getTargetProductCodes;
