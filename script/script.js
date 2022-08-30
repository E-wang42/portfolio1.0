var main = document.querySelector(".main");
var nav = document.querySelector(".navi");
var logo = document.querySelector(".logo");
var hero = document.querySelector(".hero");
var contact = document.querySelector(".forms__section");
//logo scroll
logo.addEventListener("click", function () {
  main.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
//nav fade-in
var stickyNav = function (entries) {
  var entry = entries[0];
  console.log(entry); //debugger
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};
//init intersection obvserver
var headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-70px",
});
headerObserver.observe(hero); //element observed
//sections fade-in
var sectionList = document.querySelectorAll(".fade-in");
var revealSection = function (entries, observer) {
  var entry = entries[0];
  console.log(entry); //debugger
  if (!entry.isIntersecting) {
    return;
  } else {
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  }
};
var sectionObserver = new IntersectionObserver(revealSection, {
  threshold: 0.15,
});
sectionList.forEach(function (section) {
  sectionObserver.observe(section);
});
//reviews carousel
// var reviewsCards = document.querySelector(".reviews__wrapper--card");
// var reviewsWrapper = document.querySelector(".reviews__wrapper");
// var prevBtn = document.getElementById("arrow-prev");
// var nextBtn = document.getElementById("arrow-next");
// nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.addEventListener("click", function () {
//     var slideWidth = reviewsCards === null || reviewsCards === void 0 ? void 0 : reviewsCards.clientWidth;
//     reviewsWrapper.scrollLeft += slideWidth;
// });
// prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.addEventListener("click", function () {
//     var slideWidth = reviewsCards === null || reviewsCards === void 0 ? void 0 : reviewsCards.clientWidth;
//     reviewsWrapper === null || reviewsWrapper === void 0 ? void 0 : reviewsWrapper.scrollLeft -= slideWidth;
// });
// slides.forEach((slide: any, index: any) => {
//   slide.style.transform = `translateX(${index * 100})%`;
// });

const reviewsCards = document.querySelector(".reviews__wrapper--card");
const reviewsWrapper = document.querySelector(".reviews__wrapper");
const prevBtn = document.getElementById("arrow-prev");
const nextBtn = document.getElementById("arrow-next");

nextBtn.addEventListener("click", () => {
  const slideWidth = reviewsCards.clientWidth;
  reviewsWrapper.scrollLeft += slideWidth;
});

prevBtn.addEventListener("click", () => {
  const slideWidth = reviewsCards.clientWidth;
  reviewsWrapper.scrollLeft -= slideWidth;
});
