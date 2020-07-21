var modal = document.getElementsByClassName("modal");
var btn = document.getElementsByClassName("container");


btn[0].onclick = function() {
  modal[0].style.display = "block";
  
}

btn[1].onclick = function() {
  modal[1].style.display = "block";
 
}

btn[2].onclick = function() {
  modal[2].style.display = "block";
  
}

btn[3].onclick = function() {
  modal[3].style.display = "block";

}

btn[4].onclick = function() {
  modal[4].style.display = "block";

}

btn[5].onclick = function() {
  modal[5].style.display = "block";

}

btn[6].onclick = function() {
  modal[6].style.display = "block";

}

btn[7].onclick = function() {
  modal[7].style.display = "block";
}

btn[8].onclick = function() {
  modal[8].style.display = "block";

}


btn[9].onclick = function() {
  modal[9].style.display = "block";

}

btn[10].onclick = function() {
  modal[10].style.display = "block";

}

btn[11].onclick = function() {
  modal[11].style.display = "block";

}
btn[12].onclick = function() {
  modal[12].style.display = "block";

}
window.onkeydown=function(){
  modal[1].style.display="none";
  modal[0].style.display="none";
  modal[2].style.display="none";
  modal[3].style.display="none";
  modal[4].style.display="none";
  modal[5].style.display="none"
    modal[6].style.display="none";
  modal[7].style.display="none";
   modal[8].style.display="none";
   modal[9].style.display="none";
   modal[10].style.display="none";
   modal[11].style.display="none";
  modal[12].style.display="none";
}

window.onclick = function(event) {
  if (event.target == modal[0]) {
    modal[0].style.display = "none";
  }
}

