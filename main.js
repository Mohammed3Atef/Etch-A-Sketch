//values
let container = document.querySelector(".game");
let submit = document.getElementById("submit");
let displaySize = document.getElementById("size-label");
let gridSize = document.getElementById("new-size");
gridSize.value = 4;
let newSize = gridSize.value;
console.log(gridSize.value);
//Range Bar
displaySize.textContent = `${gridSize.value} * ${gridSize.value}`;
gridSize.addEventListener("mousemove", function () {
  displaySize.textContent = `${gridSize.value} * ${gridSize.value}`;
});
//get grid size
function getGridSize(width, height) {
  // let width = gridSize.value;
  // let height = gridSize.value;
  let dimensions = width * height;
  for (let i = 0; i < dimensions; i++) {
    let squares = document.createElement("div");
    squares.style.width = `calc((100%) / ${width})`;
    squares.style.height = `calc((100%) / ${height})`;
    squares.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "blue";
    });
    container.appendChild(squares);
  }
}
submit.addEventListener("click", () => {
  getGridSize(gridSize.value, gridSize.value);
});
