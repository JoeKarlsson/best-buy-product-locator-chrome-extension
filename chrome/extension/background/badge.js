import { COLORS } from '../../../app/constants/styles';

chrome.runtime.onMessage.addListener((message) => {
  if (message.productFound) {
    chrome.browserAction.setBadgeText({ text: '1' });
    chrome.browserAction.setBadgeBackgroundColor({
      color: COLORS.red,
    });
  }
  if (message.popupOpen) {
    chrome.browserAction.setBadgeText({ text: '' });
  }
});
