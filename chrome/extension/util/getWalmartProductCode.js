import walkDOM from './walkDOM';
import waitUntilVisible from './waitUntilVisible';
import { WALMART_CODE_SELECTOR } from '../constants/constants';

const getWalmartProduct = () => new Promise((resolve) => {
  waitUntilVisible(WALMART_CODE_SELECTOR, (element) => {
    walkDOM(element, (node) => {
      if (node.nodeType === 1) {
        if (node.innerHTML.trim() === 'Model') {
          const productCode = node.nextSibling.innerText;
          resolve(productCode);
        }
      }
    });
  });
});

export default getWalmartProduct;
