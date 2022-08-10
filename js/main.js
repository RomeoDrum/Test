/* main-nav */
const buttonNav = document.querySelector('.main-nav__toggle');
const mainNavClosed = document.querySelector('.main-nav');

const buttonAbout = document.querySelector('.about__button');
const listAbout = document.querySelector('.about__list');

buttonNav.addEventListener('click', function () {
  mainNavClosed.classList.toggle("main-nav--opened");
})

buttonAbout.addEventListener('click', function () {
  listAbout.classList.toggle("visually-hidden");
})


/* footer */
const buttonProducts = document.querySelector('.products__icon');
const buttonCompany = document.querySelector('.company__icon');
const buttonClient = document.querySelector('.client__icon');
const listProducts = document.querySelector('.products__list');
const listCompany = document.querySelector('.company__list');
const listClient = document.querySelector('.client__list');
const newLocal = "visually-hidden";

buttonProducts.addEventListener('click', function () {
  listProducts.classList.toggle(newLocal);
});

buttonCompany.addEventListener('click', function () {
  listCompany.classList.toggle(newLocal);
});

buttonClient.addEventListener('click', function () {
  listClient.classList.toggle(newLocal);
});
