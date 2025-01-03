let body = document.body;
let gridContainer = document.querySelector('#grid-container');
let button = document.querySelector('button');
let indexCSS = document.styleSheets[0];

function hover(event){
    let grid = event.target
    grid.style.backgroundColor = getRandomRGB();
    let gridOpacity = parseFloat(grid.style.opacity);
    if (gridOpacity < 1){
        grid.style.opacity = gridOpacity + 0.1;
    }
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

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(gridSize){
    gridContainer.replaceChildren(); // replace with nothing to remove

    for (let i=0; i<gridSize*gridSize; i++){
        let grid = document.createElement('div');
        grid.classList.toggle('grid-square');
        grid.addEventListener('mouseenter', hover);
        grid.style.opacity = 0.1;
        gridContainer.appendChild(grid);
    }
}

button.addEventListener('click', buttomPrompt)

createGrid(16); // default grid