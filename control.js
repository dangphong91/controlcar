let car = document.getElementById("img");
car.style.width = "200px";
car.style.height = "100px";
car.style.position = "relative";
car.style.left = "0px";
car.style.top = "0px";
let step = 2;
let width = window.innerWidth;
let height = window.innerHeight;
function move(evt) {
    switch (evt.keyCode) {
        case 37:
            car.src = "images/left.jpg";
            car.style.width = "200px";
            car.style.height = "100px";
            if (car.style.left >= "0px") {
                car.style.left = `${parseInt(car.style.left) - step}px`;
            }
        break;
        case 39:
            car.src = "images/right.jpg";
            car.style.width = "200px";
            car.style.height = "100px";
            car.style.left = `${parseInt(car.style.left) + step}px`;
        break;
        case 38:
            car.src = "images/up.jpg";
            car.style.width = "100px";
            car.style.height = "200px";
            if (car.style.top >= "0px") {
                car.style.top = `${parseInt(car.style.top) - step}px`;
            }
        break;
        case 40:
            car.src = "images/down.jpg";
            car.style.width = "100px";
            car.style.height = "200px";
            car.style.top = `${parseInt(car.style.top) + step}px`;
        break;
    }
}
window.addEventListener("keydown", move);