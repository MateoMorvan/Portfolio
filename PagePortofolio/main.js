window.onload = function() { 
const imagepassion = document.getElementsByClassName("imgpassion");

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
sidenav.classList.add("active");
}

function closeNav() {
sidenav.classList.remove("active");
}

for (const image of imagepassion) {
    image.addEventListener("mouseover", function() {
        image.style.transform = "scale(1.1) translateY(-20px)";
        image.style.transitionDuration = "0.5s";
        image.parentElement.previousElementSibling.style.opacity ="0"
        image.parentElement.previousElementSibling.style.transitionDuration = "0.5s";
    });
    image.addEventListener("mouseleave", function() {
        image.style.transform = "scale(1) translateY(0px)";
        image.style.transition = "transform 0.1s";
        image.parentElement.previousElementSibling.style.opacity ="100"
        image.parentElement.previousElementSibling.style.transitionDuration = "0.1s";
    });
}
}