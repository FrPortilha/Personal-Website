
const greet = document.querySelector("greet")
const intro = document.querySelector("intro")
const info = document.getElementById("info")

document.addEventListener("DOMContentLoaded", () => {
    setTimeout( () => { info.classList.toggle("show"); },10)
});
