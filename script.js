let menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-items')
let nav = document.querySelector('nav')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    nav.classList.toggle('active')
}
menu.addEventListener('click', mobileMenu)
window.addEventListener('scroll', function () {
    let header = document.querySelector('nav');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})
const sections = document.querySelectorAll("section")
const navli = document.querySelectorAll("li")
window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (pageYOffset >= sectionTop){
            current = section.getAttribute('id')
        }
    })
    navli.forEach(li => {
        li.classList.remove("active")
        if (li.classList.contains(current)) {
            li.classList.add("active")
        }
    })
})