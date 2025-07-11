const container = document.querySelector(".container")
const open = document.querySelector(".open")
const close = document.querySelector(".close")
const menuContainer = document.querySelector(".menuContainer")
const navbar = document.querySelector(".navbar")

open.addEventListener("click", function menu() {
    container.style.transform = "rotate(-20deg)"
    container.style.transformOrigin = "top left"
    container.style.transition = "transform 0.7s ease"

    menuContainer.style.transform = "rotate(-45deg)"
    menuContainer.style.transition = "transform 0.7s ease"

    navbar.style.transform = "translateX(50px)";
    navbar.style.transition = "transform 1.3s ease"
    // open.style.transform = "translate(154px ,90px)"
    // open.style.transition = "transform 1s ease"

    // close.style.transform = "translate(133px , 147px)"
    // close.style.transition = "transform 1s ease"

})

close.addEventListener("click", () => {
    container.style.transform = "rotate(0deg)"
    container.style.transformOrigin = "top left"
    container.style.transition = "transform 0.7s ease"

    menuContainer.style.transform = "rotate(0deg)"
    menuContainer.style.transition = "transform 0.7s ease"

    navbar.style.transform = "translateX(-200px)";
    navbar.style.transition = "transform 0.7s ease"

    // open.style.transform = "translate(124px ,144px)"
    // open.style.transition = "transform 1s ease"

    // close.style.transform = "translate(100px , 176px)"
    // close.style.transition = "transform 1s ease"
})

