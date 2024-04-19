let gridSize = 16;

const container = document.querySelector('.container');
const changeGrid = document.querySelector('.change-grid'); 
createGrid();   

changeGrid.addEventListener('click', changeSize => {
    let newSize = parseInt(prompt('Enter new grid size:'));
    while (newSize<0 || newSize>100){
        newSize = parseInt(prompt('Enter new grid size:'));
    }
    removeGrid();
    gridSize = newSize;
    createGrid();
});


function createGrid() {

    for (let i = 0; i < gridSize*gridSize; i++) {
        const div = document.createElement('div');
        div.addEventListener("mouseover", event => {
            div.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255)
            + "," + Math.floor(Math.random() * 255) + ","
            + Math.floor(Math.random() * 255);
        });
        div.addEventListener("mouseout", event => {
            div.style.backgroundColor = 'white';
        });

        div.style.width = `${(500/gridSize) - 2}px`;
        div.style.height = `${(500/gridSize) - 2}px`;
        container.appendChild(div);
    }
    
}

function removeGrid(){

    container.replaceChildren();
}



