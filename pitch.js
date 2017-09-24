document.getElementById('pitch-btn').addEventListener('click', flash);
function flash(){
    document.querySelector('.input-area').style.display = "none";
    document.querySelector('.update').style.display = "inherit";
    document.querySelector('.update').className = "update fade-in";
}
