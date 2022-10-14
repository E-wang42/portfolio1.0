const main = document.querySelector(".main") as HTMLElement;
const nav = document.querySelector(".navi") as HTMLElement;
const logo = document.querySelector(".logo") as HTMLImageElement;
const hero = document.querySelector(".hero") as HTMLHeadingElement;
const contact = document.querySelector(".forms__section") as HTMLElement;
const copyEmail = document.querySelector(".email__container") as HTMLDivElement;
const slideInCopy = document.querySelector(".new") as HTMLSpanElement;

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
    console.log(entry); //debugger

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

//forms default page
// var form = document.getElementById("form__form");

// async function handleSubmit(event) {
//   event.preventDefault();
//   var status = document.getElementById("my-form-status");
//   var data = new FormData(event.target);
//   fetch(event.target.action, {
//     method: form.method,
//     body: data,
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((response) => {
//       if (response.ok) {
//         status.innerHTML = "Thanks for your submission!";
//         form.reset();
//       } else {
//         response.json().then((data) => {
//           if (Object.hasOwn(data, "errors")) {
//             status.innerHTML = data["errors"]
//               .map((error) => error["message"])
//               .join(", ");
//           } else {
//             status.innerHTML = "Oops! There was a problem submitting your form";
//           }
//         });
//       }
//     })
//     .catch((error) => {
//       status.innerHTML = "Oops! There was a problem submitting your form";
//     });
// }
// form.addEventListener("submit", handleSubmit);

function responsiveNav() {
  const burgerMenu = document.querySelector(
    ".burgermenu__container"
  ) as HTMLDivElement;
  const navItems = document.querySelector(".nav__links") as HTMLUListElement;

  burgerMenu.addEventListener("click", () => {
    navItems.classList.toggle("active");
  });
}
responsiveNav();
