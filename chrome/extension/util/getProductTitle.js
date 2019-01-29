import { CURRENT_SITE } from '../constants/constants';

export default function getProductTitle() {
  const selector = CURRENT_SITE.titleSelector;
  if (selector) {
    const element = document.querySelectorAll(selector);
    if (element.length) {
      const title = element[0].textContent;
      if (title && typeof title === 'string') {
        return title.trim();
      }
    }
  }
}
