let link = '';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ link });
  });

  console.log("We are in bg page");