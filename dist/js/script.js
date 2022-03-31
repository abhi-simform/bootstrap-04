let navHam = document.querySelector("#navHam");
let navList = document.querySelector("#navList");
let header = document.querySelector("#header");

navHam.addEventListener("click", function () {
  if (navList.style.maxHeight) {
    navList.style.maxHeight = null;
  } else {
    navList.style.maxHeight = navList.scrollHeight + "px";
    header.style.backgroundColor = "#ffffff";
  }
});

let backToTop = document.querySelector("#backToTop");
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTop.style.display = "block";
    backToTop.style.opacity = "1";
    header.style.backgroundColor = "white";
    header.classList.add("shadow-sm");
  } else {
    backToTop.style.display = "none";
    backToTop.style.opacity = "0";
    header.style.backgroundColor = "transparent";
    header.classList.remove("shadow-sm");
  }
}
backToTop.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.onscroll = function () {
  scrollFunction();
};

new PureCounter({
  selector: ".counts__item--number",
  duration: 3,
});

AOS.init({
  duration: 800,
});

const swiper = new Swiper(".swiper", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  centeredSlidesBounds: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    // 480: {
    //   slidesPerView: 2,
    //   spaceBetween: 30,
    // },
    // when window width is >= 640px
    769: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

new Swiper(".clients-slider", {
  speed: 400,
  centeredSlides: true,
  centeredSlidesBounds: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  // slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 80,
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 120,
    },
  },
});
