//text animations
$(document).ready(function() {
    $("#work2").hide();
    $("#work3").hide();
    $(".nav-hidden").hide();
    $("#navmovile").click(function() {
        $(".nav-hidden").slideToggle();
    });
    $("li").click(function() {
        $(".nav-hidden").slideToggle();
    });

});


//animations in skills section 
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
window.addEventListener("scroll", function() {
    var scroll = document.querySelector('.scrolltop');
    scroll.classList.toggle("active", window.scrollY > 500)
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

var arrow = document.getElementById("arrow");
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("mg");

var span = document.getElementsByClassName("close")[0];
const btn2 = document.getElementById("mg1");

// When the user clicks the button, open the modal(enrollment)
btn2.onclick = function() {
    modal.style.display = "block";
    arrow.style.display = "none";
    document.getElementById("image1").src = "photo/proj1.png"
    document.getElementById("image2").src = "photo/proj3.png"
    document.getElementById("image3").src = "photo/proj4.png"
    document.getElementById("modaltitle").innerHTML = "Enrollment system"
    document.querySelector(".modal-description").innerHTML = "an offline enrollment system that will help lamb's journey (private school) to reduce time in student registration and save copies of agreement via pdf with auto generated filename to help navigate the file easily. This will help the transaction to safe because they will no longer need to face each other "

}

// When the user clicks the button, open the modal(unity)
btn.onclick = function() {
    modal.style.display = "block";
    arrow.style.display = "none";
    document.getElementById("image1").src = "photo/town1.png"
    document.getElementById("image2").src = "photo/town2.png"
    document.getElementById("image3").src = "photo/town3.png"
    document.getElementById("modaltitle").innerHTML = "Enrollment system"
    document.querySelector(".modal-description").innerHTML = "This study aimed the used of mobile games in mathematical education for grade school students. It has been observed that Mobile devices may be used to improve the ability to learn. Thus, the development of Educational application is essential, in particular, in order to improve mathematics - related the skills of the children.Although there are many online applicationsfor this purpose.Nonetheless, there is A simple, interactive and intuitive android - based application is needed Enhancing children skills in basic mathematical concepts.In this work, we develop an educational application, named“ Adventure of Atlas” by using Unity Game Engine and C# programming language, which the users allow to learn basic math"



}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    arrow.style.display = "block";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        arrow.style.display = "block";
    }
}

//scroll effect in hero section
window.addEventListener('scroll', () => {
    const scrolleddown = window.scrollY;
    if (scrolleddown > 600) {
        document.getElementById("firstrow").style.marginTop = "0px";
    } else if (scrolleddown < 600) {
        document.getElementById("firstrow").style.marginTop = "100px";
    }

    if (scrolleddown > 1100) {
        document.getElementById("col1").style.opacity = "1";
        document.getElementById("col2").style.opacity = "1";
        document.getElementById("col3").style.opacity = "1";
        document.getElementById("img").style.marginLeft = "0px";
    } else if (scrolleddown < 1100) {
        document.getElementById("col1").style.opacity = "0";
        document.getElementById("col2").style.opacity = "0";
        document.getElementById("col3").style.opacity = "0";
        document.getElementById("img").style.marginLeft = "-600px";
    }

    if (scrolleddown > 250)
        document.getElementById("1").style.filter = "blur(5px)";
    else if (scrolleddown < 250)
        document.getElementById("1").style.filter = "blur(0px)";


});