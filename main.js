"use strict";
const navbar = document.getElementById("navbar");
const navbarMenu = navbar.querySelector(".nav-menu");
const navItems = Array.from(navbarMenu.querySelectorAll(".nav-items"));

// handle scrolling to section
navItems.forEach((navItem) => {
  const targetId = navItem.getAttribute("data-target");
  const targetSection = document.querySelector(`#${targetId}`);
  navItem.addEventListener("click", (event) => {
    event.preventDefault();
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// hide navbar
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight / 3) {
    navbar.style.opacity = "0.1";
  } else {
    navbar.style.opacity = "1";
  }
});
navbar.addEventListener("mouseover", () => {
  navbar.style.opacity = "1";
});

// filter projects

const btns = document.querySelector(".project-btn-container");
const projects = document.querySelectorAll(".project");
btns.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter;
  if (!filter) {
    return;
  }
  projects.forEach((project) => {
    if (filter === "all" || filter === project.dataset.target) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
});
