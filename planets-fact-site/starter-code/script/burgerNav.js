const nav = document.querySelector('.nav-planet-list');
const navList = document.querySelector('#main-nav');
const burgerBtn = document.querySelector('.burger');

burgerBtn.addEventListener('click', () =>{
    nav.classList.toggle('active');
})

