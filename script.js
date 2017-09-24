document.getElementById('pitch-btn').addEventListener('click', flash);
function flash(){
    document.querySelector('.input-area').style.display = "none";
    document.querySelector('.update').style.display = "inherit";
    document.querySelector('.update').className = "update fade-in";
}

document.getElementById("filter").addEventListener("mousemove", function(){
    document.getElementById("filter").getElementsByClassName("highlight")[0].style.fontWeight = "bold";
    document.getElementById("filter").getElementsByClassName("highlight")[0].className = "";
});

document.getElementById("filter").addEventListener("mouseleave", function(){
  document.getElementById("filter").getElementsByTagName("li")[3].className = "highlight";
  document.getElementById("filter").getElementsByClassName("highlight")[0].style.fontWeight = "300";
});
