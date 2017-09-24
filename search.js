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
