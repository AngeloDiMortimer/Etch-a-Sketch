const resetButton = document.querySelector('button');
const container = document.querySelector('.container');

let sizeOfGrid = 16;

const createGrid = (numbOfGrids) => { //Creates an specific number of grids as needed. I.E: A 16x16 grid of square divs.
    
    for (let i = 0; i < numbOfGrids; i++) {//makes the rows where the gridboxes will be
        const widthAndHeight = 660 / sizeOfGrid; //size of the container
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j = 0; j < numbOfGrids; j++) { //makes the gridboxes
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;

            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'black';
            });

            row.appendChild(gridBox);
        }

        container.appendChild(row);
    }
}

createGrid(sizeOfGrid);