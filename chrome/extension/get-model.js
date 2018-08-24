const walkDOM = (node, callback) => {
  callback(node);
  // eslint-disable-next-line no-param-reassign
  node = node.firstChild;
  while (node) {
    walkDOM(node, callback);
    // eslint-disable-next-line no-param-reassign
    node = node.nextSibling;
  }
};

let selector;
switch (window.location.host) {
  case 'www.amazon.com':
    selector = 'prodDetails';
    break;
  case 'www.target.com':
    selector = 'tabContent-tab-Details';
    break;
  default:
    break;
}

const modelRegex = new RegExp(/\b((?=[A-Za-z/ -]{0,19}\d)[A-Za-z0-9/ -]{4,20})\b/);
const modelNumbers = [];

walkDOM(document.getElementById(selector), (node) => {
  if (node.nodeType === 3) {
    const text = node.data.trim();
    const modelNumber = text.match(modelRegex);
    if (modelNumber !== null) {
      modelNumbers.push(modelNumber[0]);
    }
  }
});

chrome.extension.sendMessage(modelNumbers);
chrome.storage.local.set({
  modelNumbers,
});
