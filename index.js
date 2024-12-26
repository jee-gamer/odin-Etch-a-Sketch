let body = document.body;
let gridContainer = document.querySelector('#grid-container');
let button = document.querySelector('button');
let indexCSS = document.styleSheets[0];

function hover(target){
    target.style.backgroundColor = 'grey';
}

function buttomPrompt(){
    let squarePerSide = prompt('Enter the number of squares per side (limit 100): ');
    squarePerSide = parseInt(squarePerSide);
    if (squarePerSide > 100){
        squarePerSide = 100;
    }
    indexCSS.insertRule(`.grid-square{flex: 1 0 calc(100% / ${squarePerSide}); height: calc(100% / ${squarePerSide});`, indexCSS.cssRules.length);
    createGrid(squarePerSide);
}

function createGrid(gridSize){
    gridContainer.replaceChildren(); // replace with nothing to remove

    for (let i=0; i<gridSize*gridSize; i++){
        let grid = document.createElement('div');
        grid.classList.toggle('grid-square');
        grid.addEventListener('mouseenter', (e) => hover(e.target));
        gridContainer.appendChild(grid);
    }
}

button.addEventListener('click', buttomPrompt)

createGrid(16); // default grid