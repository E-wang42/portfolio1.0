const main = document.querySelector(".main") as HTMLElement;
const nav = document.querySelector(".navi") as HTMLElement;
const logo = document.querySelector(".logo") as HTMLImageElement;
const navLinks = document.querySelector(".nav__links") as HTMLElement;
const hero = document.querySelector(".hero") as HTMLHeadingElement;
const skills = document.querySelector(".skills") as HTMLElement;
const projects = document.querySelector(".projects") as HTMLElement;
const contact = document.querySelector(".forms__section") as HTMLElement;

//Intersection Observer API
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

//logo
logo.addEventListener("click", function () {
  main.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
