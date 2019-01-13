export default function getProductTitle(selector) {
  const element = document.querySelectorAll(selector);
  if (element.length) {
    const title = element[0].textContent;
    if (title && typeof title === 'string') {
      return title.trim();
    }
  }
}
