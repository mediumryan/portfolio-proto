'use strict';

const navbar = document.getElementById('navbar');
const navbarMenu = document.querySelector('.nav-menu');
const navItems = navbarMenu.querySelectorAll('.nav-items');

// handle scrolling to section
navItems.forEach((navItem) => {
  const targetId = navItem.getAttribute('data-target');
  const targetSection = document.querySelector(`#${targetId}`);
  navItem.addEventListener('click', (event) => {
    event.preventDefault();
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// hide navbar
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if(window.scrollY > navbarHeight / 3) {
    navbar.style.opacity = '0.1';
  } else {
    navbar.style.opacity = '1';
  }
})
navbar.addEventListener('mouseover', () => {
  navbar.style.opacity = '1';
})
