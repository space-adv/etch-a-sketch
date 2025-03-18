let gridSize = 16;
const gridContainer = document.querySelector(".grid-container");

function createGrid() {
    for(let i = 0; i < gridSize; i++) {
      let row = document.createElement("div");
      row.classList.add("row"); 

      for(let j = 0; j < gridSize; j++) {
        let column = document.createElement("div");
        column.classList.add("column");
        row.appendChild(column);
        column.textContent = j;
      };  

      gridContainer.appendChild(row);
    };
}
createGrid();