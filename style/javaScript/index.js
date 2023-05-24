const menuEnBurgers = document.querySelector('.menu-en-burgers');
const navLinks = document.querySelector('.nav-links');
menuEnBurgers.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})