
function run(){
  chrome.storage.sync.get(['sessionTime'], function (result) {
    if(result != undefined && result.sessionTime != 0){
      window.location.href = "/html/popup.html";
    }
    else
    {
      window.location.href = "/html/popup2.html";
    }
  });
}

run();