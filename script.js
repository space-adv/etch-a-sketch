let gridSize = 16;
const colorBtn = document.querySelector(".color-btn");
const clearBtn = document.querySelector(".clear-btn");
const eraserBtn = document.querySelector(".eraser-btn");
const blackBtn = document.querySelector(".black-btn");
let color = "black";

function createGrid(gridSize) {
  const gridContainer = createGridContainer()
    for(let i = 0; i < gridSize; i++) {
      let row = document.createElement("div");
      row.classList.add("row"); 
      
      for(let j = 0; j < gridSize; j++) {
        let column = document.createElement("div");
        column.classList.add("column");
        row.appendChild(column);
        column.addEventListener("mouseenter", function(e) {
          if (e.target.classList.contains("column")) {
            if (color === "white") {
              e.target.style.background = "white";
            } else if (color === "black") {
              e.target.style.background = "black";
            } else {
              e.target.style.background = randomColor();
            }
          }
        });
      }; 
      gridContainer.appendChild(row);
    };

}


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
} 

function createGridContainer() {
  const gridContainer = document.createElement("div");
   gridContainer.classList.add("grid-container");
   const container = document.querySelector(".container");
   container.appendChild(gridContainer);
   return gridContainer;
}

clearBtn.addEventListener("click", function() {
  const columns = document.querySelectorAll(".column");
  columns.forEach((column) => {
    column.style.background = "";
  });
});

eraserBtn.addEventListener("click", function() {
  color = "white"; 
});

colorBtn.addEventListener("click", function() {
  color = randomColor();
});

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

blackBtn.addEventListener("click", function() {
  color = "black";
});

createGrid(gridSize);