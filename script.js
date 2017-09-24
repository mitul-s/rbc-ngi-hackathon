document.getElementById('pitch-btn').addEventListener('click', flash);
function flash(){
    document.querySelector('.input-area').style.display = "none";
    document.querySelector('.update').style.display = "inherit";
}

let filterInput = document.getElementById('search');
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
  //get the value
  let filterValue = document.getElementById('search').value.toUpperCase();

  // get names ul
  let ul = document.getElementById('collection');
  //get li's from ul
  let li = ul.querySelectorAll('li.item');

  // loop
  for(let i = 0; i < li.length; i++){
    let a = li[i].getElementsByTagName('h4')[0];
    //if it matches correct
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}

document.getElementById("filter").addEventListener("mousemove", function(){
    document.getElementById("filter").getElementsByClassName("highlight")[0].style.fontWeight = "bold";
    document.getElementById("filter").getElementsByClassName("highlight")[0].className = "";
});

document.getElementById("filter").addEventListener("mouseleave", function(){
  document.getElementById("filter").getElementsByTagName("li")[3].className = "highlight";
  document.getElementById("filter").getElementsByClassName("highlight")[0].style.fontWeight = "300";
});
