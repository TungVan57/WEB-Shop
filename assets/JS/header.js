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
  sectionFooterAfter.classList.toggle("active");
});
// Tạo một hàm để xử lý sự kiện resize
function handleResize() {
  // Lấy chiều rộng màn hình
  let windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  // In ra console để kiểm tra
  if (windowWidth >= 1024) {
    if (mega_menu_Res.classList.contains("active")) {
      mega_menu_Res.classList.remove("active");
    }
    if (
      sectionFooterAfter.classList.contains("active") &&
      (!mega_menu_nav.classList.contains("active") ||
        !mega_menu_nav_fix.classList.contains("active"))
    ) {
      sectionFooterAfter.classList.remove("active");
    }
    if (
      siteInnerAfter.classList.contains("active") &&
      (!mega_menu_nav.classList.contains("active") ||
        !mega_menu_nav_fix.classList.contains("active"))
    ) {
      siteInnerAfter.classList.remove("active");
    }
  }
  if (windowWidth <= 1024) {
    if (
      sectionFooterAfter.classList.contains("active") &&
      (mega_menu_nav.classList.contains("active") ||
        mega_menu_nav_fix.classList.contains("active"))
    ) {
      sectionFooterAfter.classList.remove("active");
    }
    if (
      siteInnerAfter.classList.contains("active") &&
      (mega_menu_nav.classList.contains("active") ||
        mega_menu_nav_fix.classList.contains("active"))
    ) {
      siteInnerAfter.classList.remove("active");
    }
    if (mega_menu_nav.classList.contains("active")) {
      mega_menu_nav.classList.remove("active");
    }
    if (mega_menu_nav_fix.classList.contains("active")) {
      mega_menu_nav_fix.classList.remove("active");
    }
  }

  // Thực hiện các thao tác khác dựa trên chiều rộng màn hình nếu cần
}

// Đăng ký hàm handleResize để được gọi khi cửa sổ được resize
window.addEventListener("resize", handleResize);

// Gọi hàm handleResize một lần khi trang web được tải lần đầu tiên
handleResize();
