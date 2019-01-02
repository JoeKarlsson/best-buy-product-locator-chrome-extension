import walkDOM from './walkDOM';
import waitUntilVisible from './waitUntilVisible';

const getTargetProduct = () => new Promise((resolve) => {
  waitUntilVisible('tabContent-tab-Details', 'id', (element) => {
    walkDOM(element, (node) => {
      if (node.nodeType === 1) {
        if (node.innerText === 'UPC') {
          const productCode = node.nextSibling.nextSibling.nextSibling.data.trim();
          resolve(productCode);
        }
      }
    });
  });
});

export default getTargetProduct;
