/*Responsive menu*/
let menuToggle = document.querySelector(".menu--toggle");
let menuToggleIcon = document.querySelector(".menu--toggle i");
let menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");

  if (menu.classList.contains("show")) {
    menuToggleIcon.setAttribute("class", "fa fa-times");
  } else {
    menuToggleIcon.setAttribute("class", "fa fa-bars");
  }
});
/*Scroll to top */
const scrollTop = document.getElementById(
  "scroll-to-top__button"
);

const pxInit = () =>
  document.documentElement.scrollTop || document.body.scrollTop;

const toTop = () => {
  if (pxInit() > 0) {
    scrollTo(0, 0);
  }
};

const showToTop = () => {
  if (pxInit() > 100) {
    scrollTop.className = "show__scroll";
  } else {
    scrollTop.className = "ocult";
  }
};

scrollTop.addEventListener("click", toTop);
window.addEventListener("scroll", showToTop);

/*PRELOADER*/

window.addEventListener("load", () => {
  const loaderContainer = document.querySelector(
    ".loader-container"
  );
  loaderContainer.style.opacity = 0;
  loaderContainer.style.visibility = "hidden";
});
