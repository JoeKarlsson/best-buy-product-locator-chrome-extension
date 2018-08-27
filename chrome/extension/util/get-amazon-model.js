import walkDOM from './walkDOM';

const getAmazonModelNumbers = () => {
  const selector = 'prodDetails';
  const modelNumbers = [];

  document.getElementById(selector);
  console.log('hit');

  walkDOM(document.getElementById(selector), (node) => {
    if (node.nodeType === 1) {
      console.log('variable', node.innerHTML.trim());
      if (node.innerHTML.trim() === 'Item model number') {
        const modelNum = node.nextSibling.nextSibling.innerText;
        modelNumbers.push(modelNum);
      }
    }
  });

  console.log('modelNumbers', modelNumbers);

  chrome.extension.sendMessage(modelNumbers);
  chrome.storage.local.set({ modelNumbers });
};

export default getAmazonModelNumbers;
