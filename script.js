const grid = document.querySelector('#grid');

function gridCreator(num) {
  if (num > 100 ||    num < 0 || num === undefined) {
    console.log("default behavior for grid 16x16");
    for (i = 0; i <= 16; i++){
      const square = document.create("div");
      square.classList.add("square");
      grid.appendChild(cell);
    }
  }
}

gridCreator();
