let btnNav = document.querySelector(".js-nav-btn");
let nav = document.querySelector(".js-nav");

if (window.innerWidth < 700) {
nav.classList.add("nav__list--hidden");
}

function toggleNav() {
    nav.classList.toggle("nav__list--hidden");
    if (btnNav.innerText == "+ menu") {
        btnNav.innerText = "- menu";
    }
    else {
        btnNav.innerText = "+ menu";
    }
}

btnNav.addEventListener('click', toggleNav);