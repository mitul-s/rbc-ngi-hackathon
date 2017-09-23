document.getElementById("filter").addEventListener("mousemove", function(){
  document.getElementById("filter").getElementsByClassName("highlight")[0].style.fontWeight = "bold";
  document.getElementById("filter").getElementsByClassName("highlight")[0].className = "";
});

document.getElementById("filter").addEventListener("mouseleave", function(){
  document.getElementById("filter").getElementsByTagName("li")[3].className = "highlight";
  document.getElementById("filter").getElementsByClassName("highlight")[0].style.fontWeight = "300";
});
