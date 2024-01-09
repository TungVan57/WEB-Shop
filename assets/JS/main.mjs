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
setInterval(() => {
  changeSlide(+1);
}, 3000);
btnPre.addEventListener("click", function () {
  changeSlide(-1);
});
btnNext.addEventListener("click", function () {
  changeSlide(1);
});

// !Slider

// Get the button:// Event fixed-top
const btnTop = document.querySelector("#btn-Top");
const header_main = document.querySelector("#fixed-top");
window.onscroll = () => {
  if (
    document.body.scrollTop > 197 ||
    document.documentElement.scrollTop > 197
  ) {
    btnTop.style.display = "block";
    header_main.classList.add("active");
  } else {
    btnTop.style.display = "none";
    header_main.classList.remove("active");
  }
  if (
    document.body.scrollTop >= 550 ||
    document.documentElement.scrollTop >= 550
  ) {
    header_main.classList.add("active");
  } else {
    header_main.classList.remove("active");
  }
};
btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//buildProduct
const listItem = document.querySelector("#list-product");

const buildItemTemplate = (item) => {
  const templateItem = document.querySelector("#itemTemplate");

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
      let itemsData = items.data;
      loading.style.display = "none";
      if (items) {
        let count = 0;
        items.data.forEach((item, index) => {
          if (index >= 6) {
            const itemElement = buildItemTemplate(item);
            itemElement.classList.add("active");
          } else {
            const itemElement = buildItemTemplate(item);
            listItem.appendChild(itemElement);
          }
        });
      }
    }
  } catch (e) {
    console.log("Main", e);
  }
};
init();

// const btnPreList = document.querySelector(".box-heading #prevItem");
// const btnNextList = document.querySelector(".box-heading #nextItem");
// console.log(btnPreList);
// const listProduct = document.querySelectorAll('#list-product .owl-item');
// console.log(listProduct[0]);

// let activeIndexList = 6;
// function changeSlideList(page) {
//   console.log(listProduct[activeIndex-6]);
//   listProduct[activeIndex-6].classList.remove("active");
//    activeIndexList += page;

//   if (activeIndex === -1) {
//     activeIndexList = listProduct.length - 1;
//   }
//   if (activeIndex === listProduct.length) {
//     activeIndexList = 0;
//   }
//   listProduct[activeIndex+6].classList.add("active");
//   console.log(activeIndexList);
// }
// btnPreList.addEventListener("click", function () {
//   console.log('object');
//   // changeSlideList(-1);
// });
// btnNextList.addEventListener("click", function () {
//   console.log('object');
//   changeSlideList(1);
// });
