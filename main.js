const navbar = document.getElementById('navbar');
const navbarMenu = document.querySelector('.nav-menu');
const navbarItems = navbarMenu.childNodes;
const greeting = document.getElementById('greeting');
const skills = document.getElementById('skills');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');

navbarItems[1].addEventListener('click',() => {
  greeting.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
});
navbarItems[3].addEventListener('click',() => {
  skills.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
});
navbarItems[5].addEventListener('click',() => {
  projects.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
});
navbarItems[7].addEventListener('click',() => {
  contact.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
});