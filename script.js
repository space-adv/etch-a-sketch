let gridSize = 16;
const gridContainer = document.querySelector(".grid-container");

function createGrid() {
    for(let i = 0; i < gridSize; i++) {
      let row = document.createElement("div");
      row.classList.add("row"); 
      row.addEventListener("mouseenter", function(e) {
        console.log(e.target);
      });
      for(let j = 0; j < gridSize; j++) {
        let column = document.createElement("div");
        column.classList.add("column");
        row.appendChild(column);
        column.addEventListener("mouseenter", function(e){
          e.target.style.background = "black";
        });
      };  

      gridContainer.appendChild(row);
    };

}
createGrid();


