const navCategoris = document.getElementsByClassName("nav-categori");
const mega_menu_nav = document.querySelector(
  ".menu-nav .nav-wrapper .mega-menu_nav"
);
const mega_menu_nav_fix = document.querySelector(
  ".nav-categori-fix .mega-menu_nav"
);
const siteInnerAfter = document.querySelector(".site-inner");
const sectionFooterAfter = document.querySelector(".section-footer");
// Sự kiện nav menu
const arrayNavCategoris = [...navCategoris];

arrayNavCategoris[1].addEventListener("click", () => {
  mega_menu_nav.classList.toggle("active");
  siteInnerAfter.classList.toggle("active");
  sectionFooterAfter.classList.toggle("active");
  mega_menu_nav_fix.classList.toggle("active");
});
arrayNavCategoris[0].addEventListener("click", () => {
  mega_menu_nav_fix.classList.toggle("active");
  siteInnerAfter.classList.toggle("active");
  sectionFooterAfter.classList.toggle("active");
  mega_menu_nav.classList.toggle("active");
});
// Sự kiện nav menu - responsive
const toggleMobile = document.querySelector(".toggle .menu_toggle");
const mega_menu_Res = document.querySelector(".toggle .mega-menu");
toggleMobile.addEventListener("click", () => {
  mega_menu_Res.classList.toggle("active");
  siteInnerAfter.classList.toggle("active");
});
