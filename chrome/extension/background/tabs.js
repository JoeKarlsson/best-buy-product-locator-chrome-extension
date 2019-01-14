import { STORAGE_PREFIX } from '../constants/constants';
import { removeBadge, setBadge } from '../util/badge';

chrome.tabs.onActivated.addListener(({ tabId }) => {
  chrome.storage.local.get(`${STORAGE_PREFIX}${tabId}`, (tabData) => {
    if (Object.keys(tabData).length > 0) {
      if (!tabData[`${STORAGE_PREFIX}${tabId}`].badgeSeen) {
        setBadge();
      } else {
        removeBadge();
      }
    } else {
      removeBadge();
    }
  });
  chrome.storage.local.set({
    [`${STORAGE_PREFIX}active`]: tabId,
  });
});

chrome.tabs.onRemoved.addListener((tabId) => {
  chrome.storage.local.remove(`${STORAGE_PREFIX}${tabId}`);
});
