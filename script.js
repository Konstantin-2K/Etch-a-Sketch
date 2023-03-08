let container = document.querySelector('.container');

let slider = document.querySelector('.slider');
slider.addEventListener('mouseup', getNewBlockSize);

let blockSize = (600 / 16).toString() + 'px';

let clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', clearCanvas);

let eraserBtn = document.querySelector('.eraser');
eraserBtn.addEventListener('click', erase);

function drawBase(blockNum) {
    for(let i = 0; i < blockNum * blockNum; i++) {
        let block = document.createElement('div');
        
        block.style.width = blockSize;
        block.style.height = blockSize;
        block.classList.add('block');
        container.appendChild(block);
        addListeners();
    }
}

function addListeners() {
    let blocks = document.querySelectorAll('.block');
    for(let block of blocks) {
        block.addEventListener('mouseover', changeColor);
    }
}

function changeColor() {
    this.style.cssText += 'background: purple;';
}

function erase() {
    block.style.cssText += 'background: purple;';
}

function getNewBlockSize() {
    blockSize = (600 / slider.value).toString() + 'px';
    console.log("New block size: " + blockSize);
    container.innerHTML = '';
    drawBase(slider.value);
}

function clearCanvas() {
    blocks = document.querySelectorAll('.block');
    for(let block of blocks) {
        block.style.cssText += 'background: white;'
    }
}

drawBase(16);
