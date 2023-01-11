
const menuButton = document.getElementById("menu-button");
const menu = document.querySelector("nav ul");
console.log("JavaScript code is running");



  menuButton.addEventListener("click", function() {
    if (menu.classList.contains("hide")) {
      menu.classList.remove("hide");
    } else if (menu.classList.contains("show")) {
      menu.classList.add("hide");
    } else {
      menu.classList.add("show");
    }
  });