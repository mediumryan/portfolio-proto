$(function () {
  const navbar = $("#navbar");
  const navbarMenu = $(".nav-menu");
  const navItems = navbarMenu.find(".nav-items");
  const navBtn = $(".nav-button");
  const buttons = $(".project-btn-container");
  const projects = $(".project");
  let isClicked = false;

  // 스크롤 이벤트를 통해 네비게이션 바 숨김 처리
  const navbarHeight = navbar.outerHeight();
  $(document).on("scroll", () => {
    navbar.toggleClass("transparent", window.scrollY > navbarHeight / 3);
  });

  // 네비게이션 바에 마우스 오버 및 클릭 이벤트를 통해 숨김 처리 해제
  navbar.on("mouseover click", () => {
    navbar.removeClass("transparent");
  });

  // 네비게이션 바 토글 버튼 클릭 시 네비게이션 메뉴 표시 및 회전 효과
  navBtn.on("click", () => {
    navBtn.toggleClass("rotated", isClicked);
    navbarMenu.toggle();
    isClicked = !isClicked;
  });

  // 프로젝트 필터링
  buttons.on("click", (e) => {
    const filter = $(this).attr("data-filter");
    if (!filter) {
      return;
    }
    const filteredProjects = projects.filter((index, project) => {
      const target = $(project).attr("data-target");
      return filter === "all" || filter === target;
    });
    projects.hide();
    filteredProjects.show();
  });

  // 네비게이션 메뉴 항목 클릭 시 해당 섹션으로 스크롤 이동
  navItems.on("click", (event) => {
    event.preventDefault();
    const targetId = $(this).attr("data-target");
    const targetSection = $(`#${targetId}`);
    targetSection[0].scrollIntoView({ behavior: "smooth" });
  });
});
