import { STORAGE_PREFIX } from '../constants/constants';
import { COLORS } from '../../../app/constants/styles';

export function updateBadgeSeen(tabId) {
  chrome.storage.local.get([`${STORAGE_PREFIX}${tabId}`], (tabData) => {
    console.log(tabData);
    if (Object.keys(tabData).length > 0 && !tabData[`${STORAGE_PREFIX}${tabId}`].badgeSeen) {
      const data = tabData[`${STORAGE_PREFIX}${tabId}`];
      chrome.storage.local.set({
        [`${STORAGE_PREFIX}${tabId}`]: {
          ...data,
          badgeSeen: true,
        },
      });
    }
  });
}

export function setBadge(text = '1', color = COLORS.red) {
  chrome.browserAction.setBadgeText({ text });
  chrome.browserAction.setBadgeBackgroundColor({ color });
}

export function removeBadge() {
  chrome.browserAction.setBadgeText({ text: '' });
}
