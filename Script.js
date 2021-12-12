function addToCartAlert() {
    alert("One item added to cart");
}


var popup = document.getElementById("popup");
var btn = document.getElementById("button");
var btn1 = document.getElementById("button1");
var btn2 = document.getElementById("button2");
var btn3 = document.getElementById("button3");
var btn4 = document.getElementById("button4");
var btn5 = document.getElementById("button5");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
    popup.style.display = "block";
}

btn1.onclick = function(){
    popup.style.display = "block";
}

btn2.onclick = function(){
    popup.style.display = "block";
}

btn3.onclick = function(){
    popup.style.display = "block";
}

btn4.onclick = function(){
    popup.style.display = "block";
}

btn5.onclick = function(){
    popup.style.display = "block";
}

span.onclick = function() {
    popup.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}
