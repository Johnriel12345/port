//appear navigation buttons
function navin() {
    const x = document.querySelectorAll(".navi");
    for (i of x) {
        i.classList.toggle("open");
    }
}

function navout() {
    const x = document.querySelectorAll(".navi");
    for (i of x) {
        i.classList.remove("open");
    }
}
document.querySelector(".image").classList.add("showpic");
//geeting the elemet
const myName = document.querySelector(".name");
const bgtext = document.querySelector(".bgtext");

//gettung the text of the element
const nameStr = myName.textContent;
const bgStr = bgtext.textContent;

//putting the value into string
const nameSplit = nameStr.split("");
const bgSplit = bgStr.split("");


//removing the text and replacing it with the span
bgtext.textContent = ""
myName.textContent = ""
for (let i = 0; i < nameSplit.length; i++) {
    myName.innerHTML += "<span>" + nameSplit[i] + "</span>";

}
for (let i = 0; i < bgSplit.length; i++) {
    bgtext.innerHTML += "<span>" + bgSplit[i] + "</span>";

}
let char = 0;
let timer = setInterval(onTick, 50);

//text animation
function onTick() {
    const span = document.querySelectorAll(".details span")[char];
    span.classList.add("animate");

    char++;
    if (char === nameSplit.length) {
        complete()
        return;
    }
}
let char1 = 0;
let timer1 = setInterval(onTickbg, 50);
//background text animation
function onTickbg() {
    const bgSpan = document.querySelectorAll(".bgtext span")[char1];
    bgSpan.classList.add("bganimate");
    char1++;
    if (char1 === bgSplit.length) {
        clearInterval(timer1);
        timer1 = null;
        return;
    }
}

//text finished animate
function complete() {
    clearInterval(timer);

    timer = null;
}

//scrollanimation in hero section
window.addEventListener("scroll", () => {
    const scrolling = window.scrollY;
    if (scrolling > 270) {
        document.querySelector(".image").style.opacity = "0";


    } else {
        document.querySelector(".image").style.opacity = "1";

    }

    console.log(scrolling);
})

const project = document.querySelectorAll(".projects");
const title = document.querySelectorAll(".projectTitle");

//firs project animation

gsap.from(title[0], {
    scrollTrigger: {
        trigger: project[0],
        start: "top top",
        end: "bottom bottom",

        toggleActions: "restart reverse play reverse"
    },
    x: -1000,
})

gsap.to(project[0], {

        scrollTrigger: {
            trigger: project[0],
            start: "top top",
            end: "bottom bottom",
            pin: title[0]
        },
    })
    //second project animation
    //firs project animation
gsap.from(title[1], {
        scrollTrigger: {
            trigger: project[1],
            start: "top top",
            end: "bottom bottom",
            toggleActions: "restart reverse play reverse"
        },
        x: 1000,
    })
    //second project animation
gsap.to(project[1], {

    scrollTrigger: {
        trigger: project[1],
        start: "top top",
        end: "bottom bottom",
        pin: title[1]
    },
})

//scrol to top
const homebutton = document.querySelector(".fa-home");

window.onscroll = function() { scrollFunction() };

//show and hide the button
function scrollFunction() {
    if (document.querySelector(".container").scrollTop > 100 || document.documentElement.scrollTop > 100) {
        homebutton.style.display = "block";
    } else {
        homebutton.style.display = "none";

    }
}
// go back to the top when button is clicked
function toTop() {
    document.querySelector(".container").scrollTop = 0;
    document.documentElement.scrollTop = 0;
}