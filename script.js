// var nav = `<div class="topNav" id="nav">
//         <p class="branding"><b>RBC</b>Sprints</p>
//         <a href="search.html">Search</a>
//         <a href="profile.html">Profile</a>
//         <a href="pitch.html">Pitch</a>
//         <a href="learn.html">Learn</a>
//         <a href="index.html">Discover</a>
//       </div>`;
// var htmlObject = document.createElement('div');
// htmlObject.innerHTML = nav;

document.getElementById('navbar').append(htmlObject);

document.getElementById("filter").addEventListener("mousemove", function(){
    document.getElementById("filter").getElementsByClassName("highlight")[0].style.fontWeight = "bold";
    document.getElementById("filter").getElementsByClassName("highlight")[0].className = "";
});

document.getElementById("filter").addEventListener("mouseleave", function(){
  document.getElementById("filter").getElementsByTagName("li")[3].className = "highlight";
  document.getElementById("filter").getElementsByClassName("highlight")[0].style.fontWeight = "300";
});
