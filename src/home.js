
const greet = document.querySelector("greet")
const intro = document.querySelector("intro")
const info = document.getElementById("info")

const def1 = document.getElementById("def1")
const def2 = document.getElementById("def2")
const def3 = document.getElementById("def3")
const def4 = document.getElementById("def4")

const definition1 = document.getElementById("definition1")
const definition2 = document.getElementById("definition2")
const definition3 = document.getElementById("definition3")
const definition4 = document.getElementById("definition4")

def1.addEventListener("mouseover", () => { definition1.classList.toggle("fade");})
def1.addEventListener("mouseleave", () => { definition1.classList.toggle("fade");})
def2.addEventListener("mouseover", () => { definition2.classList.toggle("fade");})
def2.addEventListener("mouseleave", () => { definition2.classList.toggle("fade");})
def3.addEventListener("mouseover", () => { definition3.classList.toggle("fade");})
def3.addEventListener("mouseleave", () => { definition3.classList.toggle("fade");})
def4.addEventListener("mouseover", () => { definition4.classList.toggle("fade");})
def4.addEventListener("mouseleave", () => { definition4.classList.toggle("fade");})



