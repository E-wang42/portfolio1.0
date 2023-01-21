const main = document.querySelector(".main") as HTMLElement;
const nav = document.querySelector(".navi") as HTMLElement;
const logo = document.querySelector(".logo") as HTMLImageElement;
const logoSmall = document.querySelector(".logosm") as HTMLImageElement;
const footerLogo = document.querySelector(".footer__logo") as HTMLImageElement;
const hero = document.querySelector(".hero") as HTMLHeadingElement;
const contact = document.querySelector(".forms__section") as HTMLElement;
const copyEmail = document.querySelector(".email__container") as HTMLDivElement;
const slideInCopy = document.querySelector(".new") as HTMLSpanElement;
const portHome = document.getElementById(
  "projects__home__button"
) as HTMLElement;

//logo scroll
[portHome, logo, logoSmall, footerLogo].forEach((item) =>
  item.addEventListener("click", function () {
    main.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  })
);

//nav fade-in
const stickyNav = function (entries: any) {
  const [entry] = entries;
  // console.log(entry); //debug
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

//init intersection obvserver
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-70px",
});

headerObserver.observe(hero); //element observed

//sections fade-in
function slideUp() {
  const sectionList = document.querySelectorAll(".fade-in");

  const revealSection = function (entries: any, observer: any) {
    const [entry] = entries;
    // console.log(entry); //debug

    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("slideUp");
      observer.unobserve(entry.target);
    }
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    threshold: 0.15,
  });

  sectionList.forEach((section) => {
    sectionObserver.observe(section);
  });
}
slideUp();

//clipboard API
copyEmail.addEventListener("click", async () => {
  await navigator.clipboard.writeText("ericwang42@outlook.com");
  slideInCopy.textContent = "Copied!";
});
