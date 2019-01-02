import walkDOM from './walkDOM';
import waitUntilVisible from './waitUntilVisible';

const getAmazonProduct = () => new Promise((resolve) => {
  waitUntilVisible('prodDetails', 'id', (element) => {
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
