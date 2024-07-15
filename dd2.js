chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log(changeInfo.status)
  if (changeInfo.status === 'complete') {
    chrome.tabs.sendMessage(tabId, { action: 'restartContentScript' });
  }
  console.log(changeInfo.status)
});