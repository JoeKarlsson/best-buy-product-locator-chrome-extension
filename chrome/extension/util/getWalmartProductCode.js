import walkDOM from './walkDOM';
import waitUntilVisible from './waitUntilVisible';

const getWalmartProduct = () => new Promise((resolve) => {
  waitUntilVisible('Specification-container', 'class', (element) => {
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
