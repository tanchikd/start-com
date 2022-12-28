const element = document.querySelector(".header-burger");
const menu = document.querySelector(".menu");

element.addEventListener("click", function () {
  element.classList.toggle("active");
  menu.classList.toggle("active");
});
