"use strict";
const navbar = document.getElementById("navbar");
const navbarMenu = navbar.querySelector(".nav-menu");
const navItems = Array.from(navbarMenu.querySelectorAll(".nav-items"));
const buttons = document.querySelectorAll(".project-btn-container button");

const project_image_path = {
  outlier: "./images/project_images/10000hours.png",
  animation_snow: "./images/project_images/animation-snow.png",
  check_list: "./images/project_images/check-list.png",
  kakao_shop: "./images/project_images/kakao-shop.png",
  mini_game: "./images/project_images/mini-game.png",
  momentum: "./images/project_images/momentum-clone.png",
  movie_app: "./images/project_images/movie-app.png",
  portfolio: "./images/project_images/portfolio-demo.png",
  simple_nav: "./images/project_images/responsive-navbar.png",
  search_bar: "./images/project_images/search-bar.png",
  calculator: "./images/project_images/simple-calculator.png",
  weather: "./images/project_images/weather-app.png",
  youtube: "./images/project_images/youtube-clone.png",
};

const projects = [
  {
    id: 0,
    title: "The 10000 Hours Rule",
    tag: "HTML,CSS,JS",
    url_path: "https://mediumryan.github.io/10000hrous-alone/",
    image_path: project_image_path.outlier,
  },
  {
    id: 1,
    title: "Snow Effect Background",
    tag: "HTML,CSS,JS",
    url_path: "https://mediumryan.github.io/animation-snow/",
    image_path: project_image_path.animation_snow,
  },
  {
    id: 2,
    title: "Simple Check List with React",
    tag: "React",
    url_path: "https://mediumryan.github.io/check_list/",
    image_path: project_image_path.check_list,
  },
  {
    id: 3,
    title: "Simple E-Commerce App (Kakao)",
    tag: "React",
    url_path: "https://mediumryan.github.io/kakao-shop-demo/",
    image_path: project_image_path.kakao_shop,
  },
  {
    id: 4,
    title: "Mini Game - Find Carrots!",
    tag: "HTML,CSS,JS",
    url_path: "https://mediumryan.github.io/mini-game-demo/",
    image_path: project_image_path.mini_game,
  },
  {
    id: 5,
    title: "Momentum App Clone Coding",
    tag: "HTML,CSS,JS",
    url_path: "https://mediumryan.github.io/momemtum_clone/",
    image_path: project_image_path.momentum,
  },
  {
    id: 6,
    title: "Movie Info App",
    tag: "React",
    url_path: "https://mediumryan.github.io/TMDB_basic/",
    image_path: project_image_path.movie_app,
  },
  {
    id: 7,
    title: "Portfolio Clone Coding",
    tag: "HTML,CSS,JS",
    url_path: "https://mediumryan.github.io/portfolio-proto/",
    image_path: project_image_path.portfolio,
  },
  {
    id: 8,
    title: "Responsive Navbar",
    tag: "HTML,CSS,JS",
    url_path: "https://mediumryan.github.io/navbar/",
    image_path: project_image_path.simple_nav,
  },
  {
    id: 9,
    title: "Searchbar with React",
    tag: "React",
    url_path: "https://mediumryan.github.io/react-searchbar-demo/",
    image_path: project_image_path.search_bar,
  },
  {
    id: 10,
    title: "Simple Calculator App",
    tag: "HTML,CSS,JS",
    url_path: "https://mediumryan.github.io/report_caculator/",
    image_path: project_image_path.calculator,
  },
  {
    id: 11,
    title: "Simple Weather App",
    tag: "React",
    url_path: "https://mediumryan.github.io/weather-app-demo/",
    image_path: project_image_path.weather,
  },
  {
    id: 12,
    title: "RyanTube (Youtube Clone Coding)",
    tag: "HTML,CSS,JS",
    url_path: "https://mediumryan.github.io/youtube-clone/",
    image_path: project_image_path.youtube,
  },
];

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

// create project cards
function createProject(projectData) {
  const projects = document.querySelector(".projects");
  const project = document.createElement("div");
  project.classList.add("project");
  project.innerHTML = `
    <a href="${projectData.url_path}" target="_blank">
      <img src="${projectData.image_path}" alt="${projectData.title}"/>
      <div class="project-description">${projectData.title}</div>
    </a>
  `;

  projects.appendChild(project);
}

// createProject 함수 사용 예시
projects.forEach((project) => {
  createProject(project);
});

// filter project by buttons

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetTag = button.textContent.toLowerCase();

    projects.forEach((project) => {
      const tags = project.dataset.tags.split(",");
      if (tags.includes(targetTag) || targetTag === "all") {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});
