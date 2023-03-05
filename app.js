const menuButton = document.getElementById("menu-button");
const menuList = document.querySelector("nav ul");
const menuItems = document.querySelectorAll("ul li");

menuButton.addEventListener("click", () => {
    
    setTimeout(() => {
        menuList.classList.toggle("show");
        
    },200)

    setTimeout(() => {
        for (let i = 0 ; i < menuItems.length();i++){
            menuItems[i].classList.toggle("show");
        }
    },1000)
});



