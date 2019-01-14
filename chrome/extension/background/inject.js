import { URL_WHITELIST } from '../constants/constants';

const loadScript = async (name, tabId) => {
  if (process.env.NODE_ENV === 'production') {
    chrome.tabs.executeScript(tabId, { file: `/js/${name}.bundle.js`, runAt: 'document_end' });
  } else {
    const response = await fetch(`http://localhost:3000/js/${name}.bundle.js`);
    const file = await response.text();
    chrome.tabs.executeScript(tabId, { code: file, runAt: 'document_end' });
  }
};

const isInjected = tabId => chrome.tabs.executeScriptAsync(tabId, {
  code: `var injected = window.bbyProductLocator;
      window.bbyProductLocator = true;
      injected;`,
  runAt: 'document_start',
});

const isValidPageLoad = (changeInfo, tab) => {
  if (
    changeInfo.status !== 'loading'
    || !tab.url.match(URL_WHITELIST.join('|'))
    || chrome.runtime.lastError
  ) {
    return false;
  }
  return true;
};

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  const injected = await isInjected(tabId);
  if (isValidPageLoad(changeInfo, tab) && !injected[0]) {
    loadScript('inject', tabId);
  }
});
