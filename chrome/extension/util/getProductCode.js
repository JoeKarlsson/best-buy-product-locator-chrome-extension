import waitUntilVisible from './waitUntilVisible';
import walkDOM from './walkDOM';
import { CURRENT_SITE } from '../constants/constants';

const findCode = (node, cb) => {
  const codeRegex = /^[A-Za-z-0-9]+$/;
  if (codeRegex.test(node.textContent.trim())) {
    cb(node.textContent.trim());
    return;
  }
  findCode(node.nextSibling, cb);
};

const getProductCode = () => new Promise((resolve) => {
  // wait until specification container is visible
  waitUntilVisible(CURRENT_SITE.codeSelector, (element) => {
    // pass specification container to walkDOM
    walkDOM(element, (node) => {
      if (node.nodeType === 1) {
        if (node.innerText === CURRENT_SITE.codeText) {
          // find actual code in close siblings
          findCode(node.nextSibling, (code) => {
            resolve({
              code,
              type: CURRENT_SITE.codeType,
            });
          });
        }
      }
    });

    setTimeout(() => {
      resolve({});
    }, 3000);
  });
});

export default getProductCode;
