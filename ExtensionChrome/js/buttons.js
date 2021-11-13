/*
=================================Forest================================
*/


let forest = document.getElementById("forest");
forest.style.backgroundColor = '#5FF';

// When the button is clicked, inject setPageBackgroundColor into current page
forest.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {

    console.log("hello");
    document.body.style.backgroundColor = '#5FF';
}

/*
=================================blackList================================
*/

let webList = document.getElementById("webList");
webList.style.backgroundColor = '#F47';

// When the button is clicked, inject setPageBackgroundColor into current page
webList.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor2,
  });
});

// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor2() {

    console.log("hello");
    document.body.style.backgroundColor = '#F47';
}
