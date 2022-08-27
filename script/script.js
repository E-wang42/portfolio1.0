var main = document.querySelector(".main");
var nav = document.querySelector(".navi");
var logo = document.querySelector(".logo");
var navLinks = document.querySelector(".nav__links");
var hero = document.querySelector(".hero");
var skills = document.querySelector(".skills");
var projects = document.querySelector(".projects");
var contact = document.querySelector(".forms__section");
// const breakSection = document.querySelector(".break__div") as HTMLDivElement;
// const reviews = document.querySelector(".reviews__container") as HTMLDivElement;
var fadeSections = document.querySelectorAll(".scrollSection");
var scrollSection = document.querySelectorAll(".scroll");
//logo scroll
logo.addEventListener("click", function () {
    main.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
//nav fade-in
var stickyNav = function (entries) {
    var entry = entries[0];
    console.log(entry); //return type?
    if (!entry.isIntersecting) {
        nav.classList.add("sticky");
    }
    else {
        nav.classList.remove("sticky");
    }
};
var headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: "-70px"
});
headerObserver.observe(hero);
//sections slide-in
var fadeIn = function (entries, fadeIn) {
    var entry = entries[0];
    console.log(entry);
};
var scrollObserver = new IntersectionObserver(fadeIn, {
    threshold: 0
});
scrollObserver.observe(scrollSection);
//---------------------------------------
// const io = function (entries: any) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) {
//     sectionList.forEach((e) => {
//       e.classList.add("hidden");
//     });
//   }
// };
// const sectionObserver = new IntersectionObserver(io, {
//   root: null,
//   threshold: 0,
//   rootMargin: "10px",
// });
// sectionObserver.observe(onScroll);
// ----------------------------
// const sectionList = document.querySelectorAll("div");
// const revealSection = function (entries: any, observer: any) {
//   const [entry] = entries;
//   console.log(entry);
//   if (!entry.isIntersecting) return;
//   entry.target.classList.remove("hidden");
//   observer.unobserve(entry.target);
// };
// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.15,
// });
// sectionList.forEach((section) => {
//   sectionObserver.observe(section);
//   section.classList.add("hidden");
// });
