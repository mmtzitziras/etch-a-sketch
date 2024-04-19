let gridSize = 16;

const container = document.querySelector('.container');
const body = document.querySelector('body');
const changeGrid = document.querySelector('.change-grid'); 
createGrid();   

changeGrid.addEventListener('click', changeSize => {
    let newSize = parseInt(prompt('Enter new grid size:'));
    while (newSize<0){
        let newSize = parseInt(prompt('Enter new grid size:'));
    }
    removeGrid();
    gridSize = newSize;
    createGrid();
});


function createGrid() {

    for (let i = 0; i < gridSize*gridSize + gridSize; i++) {
        const div = document.createElement('div');
        div.addEventListener("mouseover", event => {
            div.style.backgroundColor = 'red';
        });
        div.addEventListener("mouseout", event => {
            div.style.backgroundColor = 'white';
        });
        if ( i % (gridSize + 1) === 0){
            
            div.style.height = "0";
            div.style.border = "0";
            div.style.marginRight = "100%";
        }
        container.appendChild(div);
    }
    body.style.minWidth = `${gridSize * 40 + gridSize*10}px`;
}

function removeGrid(){

    container.replaceChildren();
}



