import appAxios from "./config/axios.js";

// Slider

const btnPre = document.querySelector("#previous");
const btnNext = document.querySelector("#next");

const slides = document.querySelectorAll(".slide");

let activeIndex = 0;
function changeSlide(page) {
  slides[activeIndex].classList.remove("active");
  activeIndex += page;

  if (activeIndex === -1) {
    activeIndex = slides.length - 1;
  }
  if (activeIndex === slides.length) {
    activeIndex = 0;
  }
  slides[activeIndex].classList.add("active");
}
btnPre.addEventListener("click", function () {
  changeSlide(-1);
});
btnNext.addEventListener("click", function () {
  changeSlide(1);
});

// !Slider

// Get the button:// Event fixed-top
const btnTop = document.querySelector("#btn-Top");
const header_main=document.querySelector('#fixed-top')
window.onscroll =  () => {
   if (
    document.body.scrollTop > 197 ||
    document.documentElement.scrollTop > 197
  ) {
    btnTop.style.display = "block";
        header_main.classList.add("active")

  } else {
    btnTop.style.display = "none";
        header_main.classList.remove("active")

  }
};
btnTop.addEventListener("click", () => {
  window.scrollTo({top:0,behavior:'smooth'})
});

//buildProduct
const listItem = document.querySelector("#list-product");

const buildItemTemplate = (item) => {
  const templateItem = document.querySelector("#itemTemplate");
  console.log(templateItem);
  const fragElement = templateItem.content.cloneNode(true);
  const itemElement = fragElement.querySelector(".owl-item");

  //imageUrl
  const imageUrl = itemElement.querySelector("#imageUrl");
  imageUrl.src = item.imageUrl;

  //imageUrlhover
  const imageUrlHover = itemElement.querySelector("#imageUrlHover");
  imageUrlHover.src = item.imageUrlHover;

  //title
  const title = itemElement.querySelector("#title");
  title.innerText = item.title;

  //price
  const price = itemElement.querySelector("#price");
  price.innerText = `$${item.price}`;

  //priceUnder
  const priceUnder = itemElement.querySelector("#priceUnder");

  return itemElement;
};
const loading = document.querySelector("#loading");
const init = async () => {
  try {
    {
      const items = await appAxios.get("/web");
      loading.style.display = "none";
      if (items) {
        let count = 0;
        items.data.forEach((item, index) => {
          if (index >=6) {
            return;
          }
          const itemElement = buildItemTemplate(item);

          listItem.appendChild(itemElement);
        });
      }
    }
  } catch (e) {
    console.log("Main", e);
  }
};
init();
