let btnNav = document.querySelector(".js-nav-btn");
let iconNav = document.querySelector(".js-iconNav")
let nav = document.querySelector(".js-nav");

if (window.innerWidth < 700) {
nav.classList.add("nav__list--hidden");
}

function toggleNav() {
    nav.classList.toggle("nav__list--hidden");
    if (iconNav.getAttribute('src') == "svg/menu-open.svg") {
        iconNav.setAttribute('src', "svg/close.svg")
    }
    else {
        iconNav.setAttribute('src', "svg/menu-open.svg")
    }
}

btnNav.addEventListener('click', toggleNav);