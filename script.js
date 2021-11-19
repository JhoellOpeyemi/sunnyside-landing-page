const headerNav = document.querySelector(".header-nav");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  headerNav.classList.toggle("open");
});
