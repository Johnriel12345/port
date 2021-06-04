"use strict";

//appear navigation buttons
function navin() {
  var x = document.querySelectorAll(".navi");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = x[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      i = _step.value;
      i.classList.toggle("open");
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function navout() {
  var x = document.querySelectorAll(".navi");
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = x[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      i = _step2.value;
      i.classList.remove("open");
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

document.querySelector(".image").classList.add("showpic"); //geeting the elemet

var myName = document.querySelector(".name");
var bgtext = document.querySelector(".bgtext"); //gettung the text of the element

var nameStr = myName.textContent;
var bgStr = bgtext.textContent; //putting the value into string

var nameSplit = nameStr.split("");
var bgSplit = bgStr.split(""); //removing the text and replacing it with the span

bgtext.textContent = "";
myName.textContent = "";

for (var _i = 0; _i < nameSplit.length; _i++) {
  myName.innerHTML += "<span>" + nameSplit[_i] + "</span>";
}

for (var _i2 = 0; _i2 < bgSplit.length; _i2++) {
  bgtext.innerHTML += "<span>" + bgSplit[_i2] + "</span>";
}

var _char = 0;
var timer = setInterval(onTick, 50); //text animation

function onTick() {
  var span = document.querySelectorAll(".details span")[_char];

  span.classList.add("animate");
  _char++;

  if (_char === nameSplit.length) {
    complete();
    return;
  }
}

var char1 = 0;
var timer1 = setInterval(onTickbg, 50); //background text animation

function onTickbg() {
  var bgSpan = document.querySelectorAll(".bgtext span")[char1];
  bgSpan.classList.add("bganimate");
  char1++;

  if (char1 === bgSplit.length) {
    clearInterval(timer1);
    timer1 = null;
    return;
  }
} //text finished animate


function complete() {
  clearInterval(timer);
  timer = null;
} //scrollanimation in hero section


window.addEventListener("scroll", function () {
  var scrolling = window.scrollY;

  if (scrolling > 270) {
    document.querySelector(".image").style.opacity = "0";
  } else {
    document.querySelector(".image").style.opacity = "1";
  }

  console.log(scrolling);
});
var project = document.querySelectorAll(".projects");
var title = document.querySelectorAll(".projectTitle"); //firs project animation

gsap.from(title[0], {
  scrollTrigger: {
    trigger: project[0],
    start: "top center",
    end: "bottom bottom",
    toggleActions: "restart reverse play reverse"
  },
  x: -1000
});
gsap.to(project[0], {
  scrollTrigger: {
    trigger: project[0],
    start: "top top",
    end: "bottom bottom",
    pin: title[0]
  }
}); //second project animation
//firs project animation

gsap.from(title[1], {
  scrollTrigger: {
    trigger: project[1],
    start: "top center",
    end: "bottom bottom",
    toggleActions: "restart reverse play reverse"
  },
  x: 1000
}); //second project animation

gsap.to(project[1], {
  scrollTrigger: {
    trigger: project[1],
    start: "top top",
    end: "bottom bottom",
    pin: title[1]
  }
}); //scrol to top

var homebutton = document.querySelector(".fa-home");

window.onscroll = function () {
  scrollFunction();
}; //show and hide the button


function scrollFunction() {
  if (document.querySelector(".container").scrollTop > 100 || document.documentElement.scrollTop > 100) {
    homebutton.style.display = "block";
  } else {
    homebutton.style.display = "none";
  }
} // go back to the top when button is clicked


function toTop() {
  document.querySelector(".container").scrollTop = 0;
  document.documentElement.scrollTop = 0;
}