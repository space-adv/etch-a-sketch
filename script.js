let gridSize = 16;

function createGrid(gridSize) {
  const gridContainer = createGridContainer()
    for(let i = 0; i < gridSize; i++) {
      let row = document.createElement("div");
      row.classList.add("row"); 
      
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
createGrid(gridSize);


function gridResize() {
    let input = parseInt (prompt("Choose the grid size between 1 and 100.", "0"));
    if(input > 100 || input < 0) {
      gridSize = alert("Invalid size.");
    } else {
      const gridContainer = document.querySelector(".grid-container");
      gridContainer.remove();
      gridSize = input;
      createGrid(gridSize);
      
    }
    
    console.log(gridSize);
} 
console.log(gridSize);

function createGridContainer() {
  const gridContainer = document.createElement("div");
   gridContainer.classList.add("grid-container");
   const container = document.querySelector(".container");
   container.appendChild(gridContainer);
   return gridContainer;
   
}