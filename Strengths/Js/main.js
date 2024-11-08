/* show menu*/

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/* remove menu mobile*/

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/* scroll section active link*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/* change backgroun header*/
function scrollHeader() {
  const header = document.getElementById("header");

  if (this.scrollY >= 200) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

/* show scroll up*/
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");

  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollTop);

/* mixitup flter portfolio*/

const mixer = mixitup(".portfolio__container", {
  selectors: {
    target: ".portfolio__content",
  },
  animation: {
    duration: 400,
  },
});

/* link active portfolio*/

const linkPortfolio = document.querySelectorAll(".portfolio__item");

function activePortfolio() {
  if (linkPortfolio) {
    linkPortfolio.forEach((l) => l.classList.remove("active-portfolio"));
    this.classList.add("active-portfolio");
  }
}

linkPortfolio.forEach((l) => l.addEventListener("click", activePortfolio));

/*scroll reveal animation*/

/* scroll reveal animation

const sr = ScrollReveal({
    origin:'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__social, .home__img, .about, .about__container, .about__data, .about__img, .qualification, .qualification__container, .qualification__content, .qualification__data,
.services, .services__container,  .project__data, .portfolio, .portfolio__nav, .portfolio__content, .contact, .contact__container, .contact__content
, .footer__container, .footer__social`,{
    interval: 200
})

*/
