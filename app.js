
const menuButton = document.getElementById("menu-button");
const menuList = document.querySelector("nav ul");

menuButton.addEventListener("click", () => {
    setTimeout(() => {menuList.classList.toggle("show");},150)
});
