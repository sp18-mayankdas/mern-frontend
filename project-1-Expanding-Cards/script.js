const boxes = document.querySelectorAll(".box")

console.log(boxes)

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        boxes.forEach((b)=>{
            b.classList.remove("active");
        })

        box.classList.add("active")
    })

})