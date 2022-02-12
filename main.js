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
navLinks.forEach((navLink) => navLink.addEventListener('click', function() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}));

// Accordian skills

const skillsContent = document.querySelectorAll('.skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills(){
  let itemClass = this.parentNode.className;
  // for(let i=0; i < skillsContent.length; i++){
  //   skillsContent[i].className = 'skills__content skills__close'
  // }
  // if(itemCLass === 'skills__content skills__close'){
  //   this.parentNode.className = 'skills__content skills__open'
  // }
  if(itemClass === 'skills__content skills__close'){
    this.parentNode.className = 'skills__content skills__open'
    return;
  }
  this.parentNode.className = 'skills__content skills__close'
}

skillsHeader.forEach((header) => {
  header.addEventListener('click', toggleSkills);
})

// Qualification tabs
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification__active'); 
    })
    target.classList.add('qualification__active');
    tabs.forEach(tab => {
      tab.classList.remove('qualification__active');
    })
    tab.classList.add('qualification__active')
  })
})

// Acheivements Modal

const modalViews = document.querySelectorAll('.achievements__modal');
const modalBtns = document.querySelectorAll('.achievements__button');
const modalCloseBtns = document.querySelectorAll('.achievements__modal-close');

let modal = function(modalClick){
  console.log(modalClick);
  modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modalViews[i].classList.add('active-modal');
    modal(i);
  })
})

modalCloseBtns.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal');
    })
  })
})

// portfolio show more

const portfolioMore = document.getElementById('portfolio__more');
const portfolioMoreTabs = document.querySelectorAll('.portfolio__more-tab-hide');
portfolioMore.addEventListener('click', () =>{
  portfolioMoreTabs.forEach(moreTabs => {
    moreTabs.classList.remove('portfolio__more-tab-hide');
  })
  portfolioMore.classList.add('portfolio__more-hide');
})

// Scroll sections active link

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Change background header
function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

// Show scroll top
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// Dark light theme ------------------
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Form submit

document.getElementById('form-submit').addEventListener('click', () => {
  console.log('submitted');
  document.getElementById("contact__form").submit();
})
