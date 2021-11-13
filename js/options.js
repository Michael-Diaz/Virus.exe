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


chrome.storage.sync.set({URLs: presetURLs}, function() {
  console.log('Value is set to' + presetURLs);
});



// Reacts to a button click by marking the selected button and saving
// the selection
function handleButtonClick(event) {
  // Remove styling from the previously selected color
  let current = event.target.parentElement.querySelector(
    `.${selectedClassName}`
  );
  if (current && current !== event.target) {
    current.classList.remove(selectedClassName);
  }

  /*
  // Mark the button as selected
  let color = event.target.dataset.color;
  event.target.classList.add(selectedClassName);
  chrome.storage.sync.set({ color });*/
}

// Add a button to the page for each supplied color
function constructOptions() {

  chrome.storage.sync.get(['URLs'], function (result) {
    console.log("get from local storage " + result.URLs)
    if(result.URLs){
      // If there are elements in the list, create a table for those elements
      var table = document.createElement('table');
      table.setAttribute('id', 'urlBlackList');     // Set table id.

      var tr = table.insertRow(-1);               // Create a row (for header).

      for (var h = 0; h < this.col.length; h++) {
          // Add table header.
          var th = document.createElement('th');
          th.innerHTML = this.col[h].replace('_', ' ');
          tr.appendChild(th);
      }
    }

    for (let URL of result.URLs) {
      // …create a button with that color…
      let button = document.createElement("ul");
      button.innerHTML = URL;     

      // …and register a listener for when that button is clicked
      button.addEventListener("click", handleButtonClick);
      page.appendChild(button);
    }
  });
    

}

// Initialize the page by constructing the color options
constructOptions();