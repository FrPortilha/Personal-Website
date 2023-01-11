const menuButton = document.getElementById("menu-button");
const menuList = document.querySelector("nav ul");
const menuItems = document.querySelectorAll("ul li");

menuButton.addEventListener("click", function() {
    menuList.classList.toggle("show");
    setTimeout(() => {
        for (i in 0,menuItems.length()){
            menuItems[i].classList.toggle("show");
        }
    },500)
});
