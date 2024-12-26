let body = document.body;
let gridContainer = document.querySelector('#grid-container');

const gridSize = 16;

function hover(target){
    target.style.backgroundColor = 'grey';
}

for (let i=0; i<gridSize*gridSize; i++){
    let grid = document.createElement('div');
    grid.classList.toggle('grid-square');
    grid.addEventListener('mouseenter', (e) => hover(e.target));
    gridContainer.appendChild(grid);
}