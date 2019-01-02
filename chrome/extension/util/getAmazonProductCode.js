import walkDOM from './walkDOM';
import waitUntilVisible from './waitUntilVisible';
import { AMAZON_SELECTOR } from '../constants/constants';

const getAmazonProduct = () => new Promise((resolve) => {
  waitUntilVisible(AMAZON_SELECTOR, (element) => {
    walkDOM(element, (node) => {
      if (node.nodeType === 1) {
        if (node.innerHTML.trim() === 'Item model number') {
          const productCode = node.nextSibling.nextSibling.innerText;
          resolve(productCode);
        }
      }
    });
  });
});

export default getAmazonProduct;
