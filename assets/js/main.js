/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose  = document.getElementById('nav-close')

// Menu Show
// validate if constant exists
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// Menu Hidden
// validate if constant exists
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu') 
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-height class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is heigher than 350 viewport height, add the show-scroll class to the a tag with the scroll up
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                : scrollUp.classList.remove('show-scroll')  
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== PARALLAX ===============*/


/*=============== GSAP ANIMATION ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
