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


let forest = document.getElementById("forest");
forest.style.backgroundColor = '#5FF';


/*
=================================blackList================================
*/

let webList = document.getElementById("webList");
webList.style.backgroundColor = '#F47';

// When the button is clicked, inject setPageBackgroundColor into current page
webList.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.tabs.create({
    url: 'chrome-extension://hhnbehecblkohhojeiekejddfdcmjolj/html/options.html'
  });
});




/* ================================================================*/
