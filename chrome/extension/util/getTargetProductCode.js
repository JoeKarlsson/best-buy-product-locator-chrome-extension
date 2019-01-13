import walkDOM from './walkDOM';
import waitUntilVisible from './waitUntilVisible';
import { TARGET_CODE_SELECTOR } from '../constants/constants';

const getTargetProduct = () => new Promise((resolve) => {
  waitUntilVisible(TARGET_CODE_SELECTOR, (element) => {
    walkDOM(element, (node) => {
      if (node.nodeType === 1) {
        if (node.innerText === 'UPC') {
          const productCode = node.nextSibling.nextSibling.data.trim();
          resolve(productCode);
        }
      }
    });
  });
});

export default getTargetProduct;
