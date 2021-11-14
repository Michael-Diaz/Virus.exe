/*
 

 // Mark the button as selected
  let url = event.target.dataset.color;
  event.target.classList.add(selectedClassName);
  chrome.storage.sync.set({ color });
}

  // Create list of items
  // store in chrome storage

  // List starts as blank 
  

*/


let page = document.getElementById("buttonDiv");
let selectedClassName = "current";
const presetURLs = ["https://www.google.com/", "https://replit.com/@mosshan/testy#main.go"];


function myFunction(){
  console.log("test");
}

chrome.storage.sync.set({URLs: presetURLs}, function() {
  console.log('Value is set to' + presetURLs);
});


/*
// Reacts to a button click by marking the selected button and saving
// the selection
function handleButtonClick(event) {

  chrome.storage.sync.get(['URLs'], function (result) {
    const index = result.URLs.indexOf(URL);
    if (index > -1) {
        URLListRemoved = result.URLs.splice(index, 1);
    }

  });
  chrome.storage.sync.set({URLs: URLListRemoved}, function() {
    console.log('Value is set to' + URLListRemoved);
  });
}*/

// Add a button to the page for each supplied color
function constructOptions() {

  chrome.storage.sync.get(['URLs'], function (result) {
    console.log("get from local storage " + result.URLs)
    
    for (let URL of result.URLs) {
      // …create a blist item
      let listItem = document.createElement("ul"); 
      listItem.innerText = URL;   

      // create its remove button
      let button = document.createElement("button");
      button.innerText = "Remove";
      button.id = URL;
      console.log("button id is: " + button.id);

      // …and register a listener for when that button is clicked
      button.addEventListener("click", function(){

        // Remove item from list
        const index = result.URLs.indexOf(URL);
        URLListRemoved = result.URLs
        if (index > -1) {
          URLListRemoved.splice(index, 1);
        }
        console.log('Value is set to' + URLListRemoved);
        // edit the saved list
        chrome.storage.sync.set({URLs: URLListRemoved}, function() {
          console.log('Value is set to' + URLListRemoved);
        });
      });
      page.appendChild(listItem);
      page.appendChild(button);
    }
  });

}

// Initialize the page by constructing the color options
constructOptions();