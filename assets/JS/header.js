const navCategori = document.querySelector(
  ".menu-nav .nav-wrapper .nav-categori"
);
const mega_menu_nav = document.querySelector(
  ".menu-nav .nav-wrapper .mega-menu_nav"
);
const siteInnerAfter = document.querySelector(".site-inner");
// Sự kiện nav menu
navCategori.addEventListener("click", () => {
  mega_menu_nav.classList.toggle("active");
  siteInnerAfter.classList.toggle("active");
});

// Sự kiện nav menu - responsive
const toggleMobile = document.querySelector(".toggle .menu_toggle");
const mega_menu_Res = document.querySelector(".toggle .mega-menu");
toggleMobile.addEventListener("click", () => {
  mega_menu_Res.classList.toggle("active");
  siteInnerAfter.classList.toggle("active");
});





