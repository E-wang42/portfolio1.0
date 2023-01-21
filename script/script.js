var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var _this = this;
var main = document.querySelector(".main");
var nav = document.querySelector(".navi");
var logo = document.querySelector(".logo");
var logoSmall = document.querySelector(".logosm");
var footerLogo = document.querySelector(".footer__logo");
var hero = document.querySelector(".hero");
var contact = document.querySelector(".forms__section");
var copyEmail = document.querySelector(".email__container");
var slideInCopy = document.querySelector(".new");
var portHome = document.getElementById("projects__home__button");
//logo scroll
[portHome, logo, logoSmall, footerLogo].forEach(function (item) {
  return item.addEventListener("click", function () {
    main.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
function slideUp() {
  var sectionList = document.querySelectorAll(".fade-in");
  var revealSection = function (entries, observer) {
    var entry = entries[0];
    // console.log(entry); //debugger
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("slideUp");
      observer.unobserve(entry.target);
    }
  };
  var sectionObserver = new IntersectionObserver(revealSection, {
    threshold: 0.15,
  });
  sectionList.forEach(function (section) {
    sectionObserver.observe(section);
  });
}
slideUp();
//clipboard API
copyEmail.addEventListener("click", function () {
  return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [
            4 /*yield*/,
            navigator.clipboard.writeText("ericwang42@outlook.com"),
          ];
        case 1:
          _a.sent();
          slideInCopy.textContent = "Copied!";
          return [2 /*return*/];
      }
    });
  });
});
function responsiveNav() {
  var burgerMenu = document.querySelector(".burgermenu__container");
  var navItems = document.querySelector(".nav__links");
  burgerMenu.addEventListener("click", function () {
    navItems.classList.toggle("active");
  });
}
responsiveNav();
