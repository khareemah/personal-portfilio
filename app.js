const links = document.querySelector(".nav ul").children;
const nav = document.querySelector(".nav");
const navOverlay = document.querySelector(".nav-overlay");
const navToggle = document.querySelector(".nav-toggle");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    for (let j = 0; j < links.length; j++) {
      links[j].classList.remove("active");
    }
    links[i].classList.add("active");
  });
}
navToggle.addEventListener("click", function() {
  nav.classList.toggle("open");
  navToggle.classList.toggle("open");
});
