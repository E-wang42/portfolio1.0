var main = document.querySelector(".main");
var nav = document.querySelector(".navi");
var logo = document.querySelector(".logo");
var hero = document.querySelector(".hero");
var contact = document.querySelector(".forms__section");
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
    console.log(entry); //debugger
    if (!entry.isIntersecting) {
        nav.classList.add("sticky");
    }
    else {
        nav.classList.remove("sticky");
    }
};
//init intersection obvserver
var headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: "-70px"
});
headerObserver.observe(hero); //element observed
//sections fade-in
function slideUp() {
    var sectionList = document.querySelectorAll(".fade-in");
    var revealSection = function (entries, observer) {
        var entry = entries[0];
        console.log(entry); //debugger
        if (!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add("slideUp");
            observer.unobserve(entry.target);
        }
    };
    var sectionObserver = new IntersectionObserver(revealSection, {
        threshold: 0.15
    });
    sectionList.forEach(function (section) {
        sectionObserver.observe(section);
    });
}
slideUp();
