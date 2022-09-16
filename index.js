
const COLORS = ["red", "coral", "green", "blue", "orange"];
const menuContainer = document.querySelector('.container');
const items = document.querySelectorAll('.item');
const indicator = document.querySelector('.indicator');
let activeElement = menuContainer.querySelector(".active");


function workActive(item, index){
    if(activeElement == item) return;
    if(activeElement) activeElement.classList.remove("active");
        item.classList.add("active");
        document.body.style.backgroundColor = COLORS[index];
        activeElement = item;
        indiFun()
}

function indiFun() {
    let position = activeElement.offsetLeft
    indicator.style.left = `${position-((indicator.clientWidth - activeElement.clientWidth)) / 2}px`
}


items.forEach((item, index) => {
    item.addEventListener("click", (event) => workActive(item, index));
});

workActive(items[2],2)

