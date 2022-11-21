const resetButton = document.querySelector('button');
const container = document.querySelector('.container');

let sizeOfGrid = 16; //Default value of grid

const createGrid = (numbOfGrids) => { //Creates an specific number of grids as needed. I.E: A 16x16 grid of square divs.
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');


    for (let i = 0; i < numbOfGrids; i++) {//makes the rows where the gridboxes will be
        const widthAndHeight = 560 / numbOfGrids; //size of the container
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

        wrapper.appendChild(row);
    }
    container.appendChild(wrapper);
}

createGrid(sizeOfGrid);

resetButton.addEventListener('click', () => { //creates new grid with a different number provided by the user
    let userSize = Number(prompt('What dimensions do you want your new grid to be?'))

    while(userSize > 100) {
        userSize = Number(prompt('Please pick a smaller number and make sure its 100 or less'));
    }
    
    const wrapper = document.querySelector('.wrapper');
    if (!wrapper) {
        createGrid(userSize);
    } else {
        wrapper.remove();
        createGrid(userSize);
    }
});
