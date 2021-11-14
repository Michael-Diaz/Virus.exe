// background.js

chrome.tabs.onUpdated.addListener(
  function(tabId, changeInfo, tab) {
    // read changeInfo data and do something with it
    // like send the new url to contentscripts.js
    if (changeInfo.url) {
      console.log("url: " + changeInfo.url);
      chrome.tabs.sendMessage( tabId, {
        message: 'hello!',
        url: changeInfo.url
      })
      
      chrome.storage.sync.get(['URLs'], function (result) {
        if(result.URLs.includes(changeInfo.url) != -1)
        {
          console.log("visited restricted url" + changeInfo.url);
        }
      });
    }
  }

  
);
