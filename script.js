// Элемент куда добавлять класс
const body = document.querySelector("body");

// Элемент на который нужно нажать
const burger = document.querySelector(".header-burger");

// Добавляем обработчик событий на клик
burger.addEventListener("click", () => {
  // Переключаем класс menu-active у body при клике
  body.classList.toggle("menu-active");
});
