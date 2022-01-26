const headerNav = document.querySelector("#header-nav");
const hamburger = document.querySelector(".hamburger");
const hamburgerImg = document.querySelector(".hamburger-img");

let num = 0;
hamburger.addEventListener("click", () => {
  num++;
  headerNav.classList.toggle("open");

  // Change image source on click
  if (num % 2 == 1) {
    hamburger.innerHTML = `
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11 hamburger-img" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
        <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
        </path>
    </svg>`;
  } else {
    hamburger.innerHTML = ` <svg
    width="24"
    height="18"
    xmlns="http://www.w3.org/2000/svg"
    class="hamburger-img"
  >
    <path
      d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
      fill="#FFF"
      fill-rule="evenodd"
    />
  </svg>`;
  }
});
