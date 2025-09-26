let btnNav = document.querySelector(".js-nav-btn");
let iconNav = document.querySelector(".js-iconNav")
let nav = document.querySelector(".js-nav");
let nav_hidden = true;

if (window.innerWidth < 700) {
nav.classList.add("nav__list--hidden");
}

function toggleNav() {
    nav.classList.toggle("nav__list--hidden");
    if (nav_hidden = true) {
        iconNav.setAttribute('src', "img/close.svg")
        nav_hidden = false;
    }
    else {
        iconNav.setAttribute('src', "img/menu-open.svg")
        nav_hidden = true;
    }
}

btnNav.addEventListener('click', toggleNav);