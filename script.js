let gridSize = 16;
const gridContainer = document.querySelector(".grid-container");

function createGrid() {
    for(let i = 0; i < gridSize; i++) {
      const row = document.createElement("div");
      row.className = "row";
      gridContainer.appendChild(row);
      row.textContent = i;

    for(let j = 0; j < gridSize; j++) {
        const column = document.createElement("div");
        column.className = "column";
        gridContainer.appendChild(column);
        column.textContent = j;
    }    
    }
}
createGrid();