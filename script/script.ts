const main = document.querySelector(".main") as HTMLElement;
const nav = document.querySelector(".navi") as HTMLElement;
const logo = document.querySelector(".logo") as HTMLImageElement;
const navLinks = document.querySelector(".nav__links") as HTMLElement;
const hero = document.querySelector(".hero") as HTMLHeadingElement;
const skills = document.querySelector(".skills") as HTMLElement;
const projects = document.querySelector(".projects") as HTMLElement;
const contact = document.querySelector(".forms__section") as HTMLElement;
// const breakSection = document.querySelector(".break__div") as HTMLDivElement;
// const reviews = document.querySelector(".reviews__container") as HTMLDivElement;
const fadeSections = document.querySelectorAll(".scrollSection");
const scrollSection = document.querySelectorAll(".scroll");

//logo scroll
logo.addEventListener("click", function () {
  main.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//nav fade-in
const stickyNav = function (entries: any) {
  const [entry] = entries;
  console.log(entry); //return type?
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-70px",
});

headerObserver.observe(hero);

//sections slide-in

const fadeIn = function (entries: any, fadeIn: any) {
  const [entry] = entries;
  console.log(entry);
};

const scrollObserver = new IntersectionObserver(fadeIn, {
  threshold: 0,
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
