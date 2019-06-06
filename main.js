let ul = document.querySelector("ul");

let rotateY = 0;
let rotateX = 0;
let focus = false;

document.addEventListener("mousedown", () => {
  focus = true;
});

document.addEventListener("mouseup", () => {
  focus = false;
});

document.addEventListener("mousemove", event => {
  if (focus) {
    rotateX = (event.clientY / 3).toFixed(0);
    rotateY = (event.clientX / 3).toFixed(0);

    ul.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  } else return;
});
