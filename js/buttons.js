/*
=================================Forest================================
*/
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // listen for messages sent from background.js
    if (request.message === 'hello!') {
      console.log("button.js has received" + request.url) // new url is now in content scripts!
    }
})
