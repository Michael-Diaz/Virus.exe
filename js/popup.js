let timePassed = 0;
let timerInterval = null;
let page = document.getElementById("complete");

// Store Chosen Time
chrome.storage.sync.get(['sessionTime'], function (result) {
  chrome.storage.sync.get(['inSession'], function (answer){
    let sessionTime = result.sessionTime;
    if(!answer.inSession)
    {
      sessionTime = sessionTime*60;
      // Store session start
      chrome.storage.sync.set({inSession: true}, function() {
      });
    }
    startTimer(sessionTime);

    document.getElementById("app").innerHTML = `
    <div class="base-timer">
      <span id="base-timer-label" class="base-timer__label">${formatTime(
        sessionTime
      )}</span>
    </div>
    `;
  });
});



function onTimesUp() {
  clearInterval(timerInterval);
  chrome.storage.sync.set({sessionTime: 0}, function() {
  });
  chrome.storage.sync.set({inSession: false}, function() {
  });
  let congrats = document.createElement("ul"); 
  congrats.innerText = "Good Job! You Grew a Tree!";   
  page.appendChild(congrats);
}

function startTimer(amt) {
  TIME_LIMIT = amt;
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    chrome.storage.sync.set({sessionTime: timeLeft}, function() {
    });
    chrome.storage.sync.set({inSession: true}, function() {
    });
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}


let stopSession = document.getElementById("stopSession");
stopSession.addEventListener("click", function(){

  // Store Chosen Time
  chrome.storage.sync.set({inSession: false}, function() {
  });
  chrome.storage.sync.set({sessionTime: 0}, function() {
  });

  window.location.href = "/html/popup2.html";

});
