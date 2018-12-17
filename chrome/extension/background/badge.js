import { COLORS } from '../../../app/constants/styles';

chrome.storage.local.get('productCode', (productCode) => {
  if (productCode) {
    chrome.browserAction.setBadgeText({ text: '1' });
    chrome.browserAction.setBadgeBackgroundColor({
      color: COLORS.red,
    });
  }
});

chrome.browserAction.onClicked.addListener(() => {
  chrome.browserAction.setBadgeText({ text: '' });
});
