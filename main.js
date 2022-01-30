import './style.css'

// menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// menu show
if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  })
}

// menu hide on click of close
if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  })
}

// hide menu on any list item clicked
const navLinks = document.querySelectorAll('.nav__link');
console.log(navLinks);
navLinks.forEach((navLink) => navLink.addEventListener('click', function() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}));

