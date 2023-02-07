const menuIcon = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const itens = document.querySelector(".nav_bar_lista")

console.log(itens)

menuIcon.addEventListener("click", function () {
    nav.classList.toggle("active");
    
})