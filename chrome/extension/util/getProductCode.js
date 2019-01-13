import { PRODUCT_CODE_KEYWORDS } from '../constants/constants';

const getElementsWithText = (text) => {
  const elements = document.querySelectorAll('*');
  return Array.prototype.filter.call(elements, element => RegExp(text, 'i').test(element.textContent), );
};

const getProductCode = () => new Promise((resolve) => {
  PRODUCT_CODE_KEYWORDS.forEach(({ text, type }) => {
    const elements = getElementsWithText(text);
    if (elements.length) {
      const lastEl = elements[elements.length - 1];
      resolve({
        code: lastEl.nextElementSibling.textContent.trim(),
        type,
      });
    }
  });
});

export default getProductCode;
