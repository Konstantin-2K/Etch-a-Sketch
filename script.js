let container = document.querySelector('.container');

function drawBase(limit) {
    for(let i = 0; i < limit * limit; i++) {
        let block = document.createElement('div');
        block.classList.add('block');
        container.appendChild(block);
    }
}

function addListeners() {
    let blocks = document.querySelectorAll('.block');
    for(let block of blocks) {
        block.addEventListener('mouseover', changeColor);
    }
}

function changeColor() {
    this.style.cssText = 'background: purple;';
}

drawBase(16);
addListeners();