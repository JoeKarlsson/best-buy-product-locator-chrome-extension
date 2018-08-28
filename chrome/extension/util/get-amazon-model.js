import walkDOM from './walkDOM';

const getAmazonModelNumbers = () => {
  const selector = 'prodDetails';
  const modelNumbers = [];

  document.getElementById(selector);

  walkDOM(document.getElementById(selector), (node) => {
    if (node.nodeType === 1) {
      if (node.innerHTML.trim() === 'Item model number') {
        const modelNum = node.nextSibling.nextSibling.innerText;
        modelNumbers.push(modelNum);
      }
    }
  });

  chrome.extension.sendMessage(modelNumbers);
  chrome.storage.local.set({ modelNumbers });
};

export default getAmazonModelNumbers;
