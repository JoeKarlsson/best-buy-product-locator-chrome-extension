chrome.storage.local.get('modelNumbers', (modelNumbers) => {
  chrome.browserAction.setBadgeText({ text: '3' });
  if (modelNumbers.length > 0) {
    chrome.browserAction.setBadgeText({ text: ' ' });
  }
});
