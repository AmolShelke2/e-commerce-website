const menuIcon = document.querySelector("#menu-icon");
const navMenu = document.querySelector(".navmenu");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});
