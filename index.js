const toggleMenu = document.querySelector(".toggle-menu input")
const nav = document.querySelector('.menu ul');


toggleMenu.addEventListener('click', function () {
    console.log('haiya')
    nav.classList.toggle('slide')
})