const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const timer = document.querySelector(".timer");
const end = document.querySelector(".end");

const beforeDiv = document.querySelector(".beforeDiv");
const afterDiv = document.querySelector(".afterDiv");

let startCounter = null;
let count = 0;
timer.textContent = count;


function StartCounter() {
    startCounter = setInterval(() => {

        count++;
        timer.textContent = count
        console.log(timer.textContent)

        if (count === 10) {
            clearInterval(startCounter);
        }


        const before = document.createElement("p");
        before.textContent = "Before";
        before.style.backgroundColor = "blue"
        beforeDiv.appendChild(before);

        const after = document.createElement("p");
        after.textContent = "After";
        after.style.backgroundColor = "green"
        afterDiv.appendChild(after)

    }, 1000);
}

function ResetCounter() {
    clearInterval(startCounter);
    count = 0;
    timer.textContent = count;

    beforeDiv.textContent = "";
    afterDiv.textContent = "";

}

function EndCounter() {
    clearInterval(startCounter);
}

start.addEventListener("click", StartCounter)

reset.addEventListener("click", ResetCounter)

end.addEventListener("click", EndCounter)






