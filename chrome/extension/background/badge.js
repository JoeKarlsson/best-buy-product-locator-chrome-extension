chrome.storage.local.get('modelNumbers', (modelNumbers) => {
  if (modelNumbers.length > 0) {
    chrome.browserAction.setBadgeText({ text: ' ' });
  }
});
