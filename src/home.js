
const greet = document.querySelector("greet")
const intro = document.querySelector("intro")
const info = document.querySelector("info")

setTimeout(()=>{
    greet.classList.toggle("show");
},1000)

setTimeout(()=>{
    intro.classList.toggle("show");
},2000)

setTimeout(()=>{
    info.classList.toggle("show");
},2000)
