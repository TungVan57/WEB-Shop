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
const listItem = document.querySelector("#list-product-phone");

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
let listProductPhone = [];
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
            listItem.appendChild(itemElement);
          } else {
            const itemElement = buildItemTemplate(item);
            listItem.appendChild(itemElement);
          }
        });
      }
      listProductPhone = [
        ...document.querySelectorAll("#list-product-phone .owl-item"),
      ];
      console.log(listProductPhone);
    }
  } catch (e) {
    console.log("Main", e);
  }
};
init();
const btnPreList = document.querySelector(".box-heading #prevItem");
const btnNextList = document.querySelector(".box-heading #nextItem");

// Lưu đối tượng vào Local Storage
let myFlag = { flagFirst: 0, flagNow: 5 };
let dataFlag = JSON.parse(localStorage.getItem("myFlag")) || myFlag;

localStorage.setItem("myFlag", JSON.stringify(myFlag));

function changeSlideList(page) {
  // console.log(listProductPhone[1]);
  if (page === 1 && dataFlag.flagNow !== listProductPhone.length - 1) {
    listProductPhone[dataFlag.flagNow + page].classList.remove("active");
    dataFlag.flagNow++;
    listProductPhone[dataFlag.flagFirst].classList.add("active");
    dataFlag.flagFirst++;
    localStorage.setItem("myFlag", JSON.stringify(dataFlag));
  }
  if (page === -1 && dataFlag.flagFirst !== 0) {
    console.log(listProductPhone[5 + page]);
    listProductPhone[dataFlag.flagFirst + page].classList.remove("active");
    dataFlag.flagFirst--;
    listProductPhone[dataFlag.flagNow].classList.add("active");
    dataFlag.flagNow--;
    localStorage.setItem("myFlag", JSON.stringify(dataFlag));
  }
}
btnPreList.addEventListener("click", function () {
  changeSlideList(-1);
});
btnNextList.addEventListener("click", function () {
  changeSlideList(1);
});

function handleResize() {
  // Lấy chiều rộng màn hình
  let windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  // In ra console để kiểm tra
  if (windowWidth > 1280) {
    listProductPhone.forEach((element, index) => {
      if (index <= dataFlag.flagFirst + 5 && index >= dataFlag.flagFirst) {
        element.classList.remove("active");
      } else {
        element.classList.add("active");
      }
    });
    dataFlag.flagNow = dataFlag.flagFirst + 5;
    localStorage.setItem("myFlag", JSON.stringify(dataFlag));
  }
  if (windowWidth <= 1280 && windowWidth > 1024) {
    listProductPhone.forEach((element, index) => {
      if (index > dataFlag.flagFirst + 4) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
    dataFlag.flagNow = dataFlag.flagFirst + 4;
    localStorage.setItem("myFlag", JSON.stringify(dataFlag));
  }
  if (windowWidth <= 1024 && windowWidth > 768) {
    listProductPhone.forEach((element, index) => {
      if (index > dataFlag.flagFirst + 3) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
    dataFlag.flagNow = dataFlag.flagFirst + 3;
    localStorage.setItem("myFlag", JSON.stringify(dataFlag));
  }

  if (windowWidth <= 768 && windowWidth > 640) {
    listProductPhone.forEach((element, index) => {
      if (index > dataFlag.flagFirst + 2) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
    dataFlag.flagNow = dataFlag.flagFirst + 2;
    localStorage.setItem("myFlag", JSON.stringify(dataFlag));
  }
  if (windowWidth <= 640 && windowWidth > 480) {
    listProductPhone.forEach((element, index) => {
      if (index > dataFlag.flagFirst + 1) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
    dataFlag.flagNow = dataFlag.flagFirst + 1;
    localStorage.setItem("myFlag", JSON.stringify(dataFlag));
  }
  if (windowWidth <= 480) {
    listProductPhone.forEach((element, index) => {
      if (index > dataFlag.flagFirst + 0) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
    dataFlag.flagNow = dataFlag.flagFirst + 1;
    localStorage.setItem("myFlag", JSON.stringify(dataFlag));
  }
  console.log("First", flagFirst);
  console.log("now", flagNow);
  // Thực hiện các thao tác khác dựa trên chiều rộng màn hình nếu cần
}

// Đăng ký hàm handleResize để được gọi khi cửa sổ được resize
window.addEventListener("resize", handleResize);

// Gọi hàm handleResize một lần khi trang web được tải lần đầu tiên
handleResize();
