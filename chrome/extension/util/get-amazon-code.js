import walkDOM from './walk-dom';
import handleProductCode from './handle-product-code';

const getAmazonProductCodes = () => {
  const selector = 'prodDetails';

  walkDOM(document.getElementById(selector), (node) => {
    if (node.nodeType === 1) {
      if (node.innerHTML.trim() === 'Item model number') {
        const productCode = node.nextSibling.nextSibling.innerText;
        handleProductCode(productCode, 'modelNumber');
      }
    }
  });
};

export default getAmazonProductCodes;
