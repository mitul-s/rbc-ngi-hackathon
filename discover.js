window.onload = function () {

  var seconds = 00;
  var tens = 00;
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval ;
  var video = document.querySelector("#videoElement");
  var buttonVideo = document.getElementById('button-send-video');

  document.getElementById('applicationPhase').addEventListener('click', function(){
    document.getElementById('jobDescription').className = 'hide';
    document.getElementById('recordVideo').className = 'desc fade-in';
    document.getElementById('side-apply-notice').className = 'hide';
  });

  buttonVideo.addEventListener('click', function(){
    document.getElementById('submittingVideo').className = 'submittingVideo-items desc';
    document.getElementById('recordVideo').className = 'hide';
    setTimeout(function(){
      document.getElementById('submittingVideo').className = 'hide';
      document.getElementById('applicationSubmitted').className = 'desc fade-in';
      document.getElementById('headerChange').innerHTML = "Thank You!"}, 3000);
  });
  function handleVideo(stream) {
      video.src = window.URL.createObjectURL(stream);
      buttonStart.className = "btn btn-red hide";
      buttonStop.className = "btn btn-red"
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
  }

  function videoError(e) {
      console.log(e);
  };

  buttonStart.onclick = function() {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

    if (navigator.getUserMedia) {
        navigator.getUserMedia({video: true,}, handleVideo, videoError);

    }
  }

    buttonStop.onclick = function() {
       if (seconds == 60){
         buttonVideo.className = "btn";
         buttonStop.className = "btn btn-red hide"
       } else {
         clearInterval(Interval);
         buttonVideo.className = "btn";
         buttonStart.className = "btn btn-red";
         buttonStart.innerHTML = 'Continue video..';
         buttonStop.className = "btn btn-red hide"
       }
  }

  buttonReset.onclick = function() {
     clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
  }

  function startTimer () {
    tens++;
    if(tens < 9){
      appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9){
      appendTens.innerHTML = tens;
    }
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
    if (seconds == 60){
         clearInterval(Interval);

    }
  }
}
