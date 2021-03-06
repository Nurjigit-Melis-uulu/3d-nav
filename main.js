let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");
let button = document.querySelector("button");

let rotating = true;
let rotateY = 0;
let rotateX = 0;
let focus = false;

li.forEach(element => {
  element.addEventListener("click", () => {
    li.forEach(element => {
      element.className = "";
    });
    element.className = "active";
  });
});

if (rotating) {
  document.addEventListener("mousedown", () => {
    focus = true;
  });
}

document.addEventListener("mouseup", () => {
  focus = false;
});

document.addEventListener("mousemove", event => {
  if (focus && rotating) {
    rotateX = (event.clientY / 2).toFixed(0);
    rotateY = (event.clientX / 2).toFixed(0);

    ul.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    console.log(rotating, focus);
  }
});

button.addEventListener("click", () => {
  rotating = !rotating;
  focus = false;
  console.log(rotating, focus);
});
