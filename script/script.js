var main = document.querySelector(".main");
var nav = document.querySelector(".navi");
var logo = document.querySelector(".logo");
var navLinks = document.querySelector(".nav__links");
var hero = document.querySelector(".hero");
var skills = document.querySelector(".skills");
var projects = document.querySelector(".projects");
var contact = document.querySelector(".forms__section");
//Intersection Observer API
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
//logo
logo.addEventListener("click", function () {
    main.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
