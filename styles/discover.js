
var video = document.querySelector("#videoElement");

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

if (navigator.getUserMedia) {
    navigator.getUserMedia({video: true}, handleVideo, videoError);
}

function handleVideo(stream) {
    video.src = window.URL.createObjectURL(stream);
}

function videoError(e) {
    console.log('Something went wrong with loading the webcam!')
}


document.getElementById('applicationPhase').addEventListener('click', function(){
  console.log('HELLOOO');
  document.getElementById('jobDescription').className = 'hide';
  document.getElementById('recordVideo').className = 'desc hide';
});
