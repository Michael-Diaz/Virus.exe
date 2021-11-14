/*

  PLAN:
    each time a tree is created, 
      change to URL
      store url in storage

    when the forest page is accessed
      for each URL in storage, 
        change to image
        show on screen

  Call when tree creation is completed:
      ---IMAGE to URL ----

      ---store URL in storage----------

  Loop through local storage:
    -- URL to IMAGE----

    let url = "data:image/gif;base64,R0lGODl...";
    let img = new Image();
      await new Promise(r => img.onload=r, img.src=url);
    
    ----show image on screen list------
      Create canvas element
        var myCanvas = document.getElementById('my_canvas_id');
        var ctx = myCanvas.getContext('2d');
        img.onload = function(){
          ctx.drawImage(img,0,0); // Or at whatever offset you like
        };
        img.src = strDataURI;
*/

let page = document.getElementById("forest");

// Create list of Trees
function displayForest() {

  /*
    USE TO GET IMAGE URL FROM LOCAL STORAGE EVENTUALLY
      chrome.storage.sync.get(['Forest'], function (result) {
        console.log("get from local storage " + result.Trees)
        if(result.Forest != undefined){
          URLList = result.URLs;
        }
        
      });
  */

  chrome.storage.sync.get(['Forest'], function (result) {
    console.log("get from local storage " + result.Trees)
    if(result.Forest != undefined){
      
      for (let tree of result.Forest) {
        const img = new Image();

        img.src = "https://i.natgeofe.com/k/6289c775-a06c-426a-badb-8d181a55237b/raccoon-grass_2x1.jpg";
        if(img && img.style) {
          img.style.height = '100px';
          img.style.width = '200px';
        }
        page.appendChild(img);
      }
    }
    else{
      let message = document.createElement("ul"); 
      message.innerText = "No trees grown yet..";
      page.appendChild(message);
    }
  });

  const img = new Image();
  img.src = "https://i.natgeofe.com/k/6289c775-a06c-426a-badb-8d181a55237b/raccoon-grass_2x1.jpg";
  if(img && img.style) {
    img.style.height = '100px';
    img.style.width = '200px';
  }
  page.appendChild(img);
}

/*function encodeImageFileAsURL() {

  var filesSelected = bonsai.png;
  //var filesSelected = document.getElementById("inputFileToLoad").files;
  if (filesSelected.length > 0) {
    var fileToLoad = filesSelected[0];

    var fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {
      var srcData = fileLoadedEvent.target.result; // <--- data: base64

      var newImage = document.createElement('img');
      newImage.src = srcData;

      document.getElementById("imgTest").innerHTML = newImage.outerHTML;
      alert("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
      console.log("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
    }
    fileReader.readAsDataURL(fileToLoad);
  }
}*/

// Initialize the page's forest list
displayForest();