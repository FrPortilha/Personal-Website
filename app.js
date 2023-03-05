
const menuButton = document.getElementById("menu-button");
const menuList = document.querySelector("nav ul");

menuButton.addEventListener("click", () => {
    setTimeout(() => {menuList.classList.toggle("show");},150)
});


import ScrollMagic from "scrollmagic";

new ScrollMagic.Scene({
    triggerElement: "#trigger1"
})
.setClassToggle("#reveal1", "visible") // add class to reveal
.addIndicators() // add indicators (requires plugin)
.addTo(controller);
