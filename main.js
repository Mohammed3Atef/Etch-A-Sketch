// design squares
let container = document.querySelector(".container");

function getColors() {
  const colors = [
    "amber",
    "lavender",
    "navy",
    "lime",
    "burgundy",
    "crimson",
    "canary",
    "hazel",
    "sky blue",
  ];
  const randomcolor = Math.floor(Math.random() * 9);
  const color = colors[randomcolor];
  console.log(color);

  return color;
}

for (let i = 0; i < 36; i++) {
  // let squares = `<div class="square"></div>`;
  let squares = document.createElement("div");

  squares.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = getColors();
  });
  // squares.addEventListener("mouseout", (e) => {
  //   e.target.style.backgroundColor = "black";
  // });

  container.appendChild(squares);
}
