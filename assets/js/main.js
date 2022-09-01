const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav)
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
};

showMenu("nav-toggle", "nav-menu");

const navLink = document.querySelectorAll(".nav__link");

console.log(navLink);

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1500,
  reset: true,
});

sr.reveal(".home__title", { delay: 200 });
sr.reveal(".buttons a", { delay: 200 });
sr.reveal(".cont", { delay: 200 });
sr.reveal(".site img", { delay: 200 });
sr.reveal(".inf1, .inf2", { delay: 200 });

sr.reveal(".head img", { delay: 200 });
sr.reveal(".inputsm", { delay: 200 });
sr.reveal(".cachorros, .adote, .is, .is1, .td3 img", { delay: 200 });

sr.reveal("body", { delay: 50 });
sr.reveal(".se1, .se2, .se3, .se4", { delay: 50 });
sr.reveal(".dog1, .dog2", { delay: 50 });
