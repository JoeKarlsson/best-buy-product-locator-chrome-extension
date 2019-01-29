import { removeBadge, setBadge, updateBadgeSeen } from '../util/badge';

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const tabId = sender.tab && sender.tab.id;
  if (message.productFound) {
    setBadge();
  }
  if (message.popupOpen) {
    removeBadge();
    updateBadgeSeen(message.tabId);
  }
  if (message.requestTabId) {
    sendResponse(tabId);
  }
});
