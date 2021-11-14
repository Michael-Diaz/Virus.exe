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


let addURL = document.getElementById("addURL");

// When the button is clicked, addURL to the list
addURL.addEventListener("click", function(){
  var URLList = [];
  var URLtoAdd = document.getElementById("add").value;
  chrome.storage.sync.get(['URLs'], function (result) {
    if(result.URLs != undefined){
      URLList = result.URLs;
    }
    URLList.push(URLtoAdd);
    chrome.storage.sync.set({URLs: URLList}, function() {
      console.log('Value is set to' + URLList);
    });
  });
  location.reload();
});


// Create list of URLs which have been added to the blacklist
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
        location.reload();
      });
      page.appendChild(listItem);
      page.appendChild(button);
    }
  });

}

// Initialize the page by constructing the color options
constructOptions();