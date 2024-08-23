const navbar = document.querySelector("#headerBar");
navbar.style.setProperty("--nav-bar-height", navbar.offsetHeight + 2 + "px");

let lastScroll = window.scrollY;
const topOffset = navbar.offsetHeight;

console.log(topOffset);

stickyNavbarHelper = () => {
  if (window.scrollY >= topOffset && window.scrollY < lastScroll) {
    navbar.classList.add("header-bar--scroll-visible");
  } else {
    navbar.classList.remove("header-bar--scroll-visible");
  }

  lastScroll = window.scrollY;
};
window.addEventListener("scroll", stickyNavbarHelper);
