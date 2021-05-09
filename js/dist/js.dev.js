"use strict";

//text animations
$(document).ready(function () {
  $("#work2").hide();
  $("#work3").hide();
  $(".nav-hidden").hide();
  $("#navmovile").click(function () {
    $(".nav-hidden").slideToggle();
  });
  $("li").click(function () {
    $(".nav-hidden").slideToggle();
  });
}); //animations in skills section 

function csspic() {
  var x = document.getElementById('csspic');
  x.style.margin = "-20px 0px 20px 0px";
  document.getElementById("htmlbox").style.opacity = "0.5";
  document.getElementById("jsbox").style.opacity = "0.5";
  document.getElementById("csbox").style.opacity = "0.5";
  document.getElementById("jquerybox").style.opacity = "0.5";
}

function csspicout() {
  var x = document.getElementById('csspic');
  x.style.margin = "0px 0px 0px 0px";
  document.getElementById("htmlbox").style.opacity = "1";
  document.getElementById("jsbox").style.opacity = "1";
  document.getElementById("csbox").style.opacity = "1";
  document.getElementById("jquerybox").style.opacity = "1";
}

function htmlpic() {
  var x = document.getElementById('pic1');
  x.style.margin = "-20px 0px 20px 0px";
  document.getElementById("cssbox").style.opacity = "0.5";
  document.getElementById("jsbox").style.opacity = "0.5";
  document.getElementById("csbox").style.opacity = "0.5";
  document.getElementById("jquerybox").style.opacity = "0.5";
}

function htmlpicout() {
  var x = document.getElementById('pic1');
  x.style.margin = "0px 0px 0px 0px";
  document.getElementById("cssbox").style.opacity = "1";
  document.getElementById("jsbox").style.opacity = "1";
  document.getElementById("csbox").style.opacity = "1";
  document.getElementById("jquerybox").style.opacity = "1";
}

function jspic() {
  var x = document.getElementById('jspic');
  x.style.margin = "-20px 0px 20px 0px";
  document.getElementById("htmlbox").style.opacity = "0.5";
  document.getElementById("cssbox").style.opacity = "0.5";
  document.getElementById("csbox").style.opacity = "0.5";
  document.getElementById("jquerybox").style.opacity = "0.5";
}

function jspicout() {
  var x = document.getElementById('jspic');
  x.style.margin = "0px 0px 0px 0px";
  document.getElementById("htmlbox").style.opacity = "1";
  document.getElementById("cssbox").style.opacity = "1";
  document.getElementById("csbox").style.opacity = "1";
  document.getElementById("jquerybox").style.opacity = "1";
}

function cspic() {
  var x = document.getElementById('cspic');
  x.style.margin = "-20px 0px 20px 0px";
  document.getElementById("htmlbox").style.opacity = "0.5";
  document.getElementById("cssbox").style.opacity = "0.5";
  document.getElementById("jsbox").style.opacity = "0.5";
  document.getElementById("jquerybox").style.opacity = "0.5";
}

function cspicout() {
  var x = document.getElementById('cspic');
  x.style.margin = "0px 0px 0px 0px";
  document.getElementById("htmlbox").style.opacity = "1";
  document.getElementById("cssbox").style.opacity = "1";
  document.getElementById("jsbox").style.opacity = "1";
  document.getElementById("jquerybox").style.opacity = "1";
}

function jqpic() {
  var x = document.getElementById('jqpic');
  x.style.margin = "-20px 0px 20px 0px";
  document.getElementById("htmlbox").style.opacity = "0.5";
  document.getElementById("cssbox").style.opacity = "0.5";
  document.getElementById("csbox").style.opacity = "0.5";
  document.getElementById("jsbox").style.opacity = "0.5";
}

function jqpicout() {
  var x = document.getElementById('jqpic');
  x.style.margin = "0px 0px 0px 0px";
  document.getElementById("htmlbox").style.opacity = "1";
  document.getElementById("cssbox").style.opacity = "1";
  document.getElementById("csbox").style.opacity = "1";
  document.getElementById("jsbox").style.opacity = "1";
}

window.addEventListener("scroll", function () {
  var scroll = document.querySelector('.scrolltop');
  scroll.classList.toggle("active", window.scrollY > 500);
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

var arrow = document.getElementById("arrow"); // Get the modal

var modal = document.getElementById("myModal"); // Get the button that opens the modal

var btn = document.getElementById("mg"); // Get the <span> element that closes the modal

var span = document.getElementsByClassName("close")[0]; // When the user clicks the button, open the modal 

btn.onclick = function () {
  modal.style.display = "block";
  arrow.style.display = "none";
}; // When the user clicks on <span> (x), close the modal


span.onclick = function () {
  modal.style.display = "none";
  arrow.style.display = "block";
}; // When the user clicks anywhere outside of the modal, close it


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    arrow.style.display = "block";
  }
}; //scroll effect in hero section


window.addEventListener('scroll', function () {
  var scrolleddown = window.scrollY;
  if (scrolleddown > 250) document.getElementById("1").style.filter = "blur(5px)";else if (scrolleddown < 250) document.getElementById("1").style.filter = "blur(0px)";
});