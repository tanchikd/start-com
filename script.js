const element = document.querySelector(".header-burger");
const menu = document.querySelector(".menu");

element.addEventListener("click", (event) => {
  event.target.classList.toggle("active");
  menu.classList.toggle("active");
});
