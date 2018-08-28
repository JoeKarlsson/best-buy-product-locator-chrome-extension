import walkDOM from './walkDOM';

const getTargetModelNumbers = () => {
  const selector = 'tabContent-tab-Details';
  const UPCNumbers = [];

  document.getElementById(selector);

  walkDOM(document.getElementById(selector), (node) => {
    if (node.nodeType === 1) {
      if (node.innerText === 'UPC') {
        const upcNum = node.nextSibling.nextSibling.nextSibling.data.trim();
        UPCNumbers.push(upcNum);
      }
    }
  });

  chrome.extension.sendMessage(UPCNumbers);
  chrome.storage.local.set({ UPCNumbers });
};

export default getTargetModelNumbers;
