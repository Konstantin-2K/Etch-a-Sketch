let container = document.querySelector('.container');

let slider = document.querySelector('.slider');
slider.addEventListener('input', getNewBlockSize);

let blockSize = (600 / 16).toString() + 'px';

let paintMode = '';

let clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', clearCanvas);

let eraserBtn = document.querySelector('.eraser');
eraserBtn.onclick = () => paintMode = 'erase';

let colorBtn = document.querySelector('.color');
colorBtn.onclick = () => paintMode = 'color';

let rainbowBtn = document.querySelector('.rainbow');
rainbowBtn.onclick = () => paintMode = 'rainbow';

let count = document.querySelector('.count');

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function drawBase(blockNum) {
    for (let i = 0; i < blockNum * blockNum; i++) {
        let block = document.createElement('div');

        block.style.width = blockSize;
        block.style.height = blockSize;
        block.classList.add('block');
        container.appendChild(block);
    }
    addListeners();
}

function addListeners() {
    let blocks = document.querySelectorAll('.block');
    for (let block of blocks) {
        block.addEventListener('mouseover', changeColor)
        block.addEventListener('mousedown', changeColor)
    }
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) {
        return
    } else if (paintMode === 'color') {
        this.style.cssText += 'background: purple;';
    } else if (paintMode === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        this.style.cssText += `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if (paintMode === 'erase') {
        this.style.cssText += 'background: white;';
    }
}

function getNewBlockSize() {
    count.textContent = slider.value + ' X ' + slider.value;
    blockSize = (600 / slider.value).toString() + 'px';
    console.log("New block size: " + blockSize);
    container.innerHTML = '';
    drawBase(slider.value);
}

function clearCanvas() {
    blocks = document.querySelectorAll('.block');
    for (let block of blocks) {
        block.style.cssText += 'background: white;'
    }
}

drawBase(16);
