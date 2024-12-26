let body = document.body;
let gridContainer = document.querySelector('#grid-container');

const gridSize = 16;

for (let i=0; i<gridSize*gridSize; i++){
    let grid = document.createElement('div');
    grid.classList.toggle('grid-square');
    gridContainer.appendChild(grid);
}