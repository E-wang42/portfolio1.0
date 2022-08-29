const main = document.querySelector(".main") as HTMLElement;
const nav = document.querySelector(".navi") as HTMLElement;
const logo = document.querySelector(".logo") as HTMLImageElement;
const navLinks = document.querySelector(".nav__links") as HTMLElement;
const hero = document.querySelector(".hero") as HTMLHeadingElement;
const skills = document.querySelector(".skills") as HTMLElement;
const projects = document.querySelector(".projects") as HTMLElement;
const contact = document.querySelector(".forms__section") as HTMLElement;
const carouselCards = document.querySelectorAll(".reviews__container--cards");

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
  console.log(entry); //debugger
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

//sections fade-in
const sectionList = document.querySelectorAll(".fade-in");

const revealSection = function (entries: any, observer: any) {
  const [entry] = entries;
  console.log(entry); //debugger

  if (!entry.isIntersecting) {
    return;
  } else {
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  }
};

const sectionObserver = new IntersectionObserver(revealSection, {
  threshold: 0.15,
});

sectionList.forEach((section) => {
  sectionObserver.observe(section);
});
