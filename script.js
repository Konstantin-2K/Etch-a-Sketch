let container = document.querySelector('.container');

let slider = document.querySelector('.slider');
slider.addEventListener('input', getNewBlockSize);

let blockSize = (600 / 16).toString() + 'px';

let colorPicker = document.querySelector('.picker');

let paintMode = 'color';
let colorBtn = document.querySelector('.color');
let rainbowBtn = document.querySelector('.rainbow');
let eraserBtn = document.querySelector('.eraser');

colorBtn.onclick = () => {
    paintMode = 'color';
    activeButton(paintMode);
};
rainbowBtn.onclick = () => {
    paintMode = 'rainbow';
    activeButton(paintMode);
};
eraserBtn.onclick = () => {
    paintMode = 'erase';
    activeButton(paintMode);
};

let clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', clearCanvas);


let count = document.querySelector('.count');

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

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
        block.addEventListener('mouseover', changeColor);
        block.addEventListener('mousedown', changeColor);
    }
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) {
        return;
    }

    if (paintMode === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        this.style.cssText += `background: rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if (paintMode === 'erase') {
        this.style.cssText += 'background: white;';
    } else if (paintMode === 'color') {
        this.style.cssText += `background: ${colorPicker.value}`;
    }
}

function getNewBlockSize() {
    count.textContent = slider.value + ' X ' + slider.value;
    blockSize = (600 / slider.value).toString() + 'px';
    container.innerHTML = '';
    drawBase(slider.value);
}

function clearCanvas() {
    blocks = document.querySelectorAll('.block');
    for (let block of blocks) {
        block.style.cssText += 'background: white;';
    }
}

function activeButton(mode) {
    if (mode === 'rainbow') {
        rainbowBtn.classList.add('active');
        eraserBtn.classList.remove('active');
        colorBtn.classList.remove('active');
    } else if (mode === 'erase') {
        rainbowBtn.classList.remove('active');
        eraserBtn.classList.add('active');
        colorBtn.classList.remove('active');
    } else if (mode === 'color') {
        rainbowBtn.classList.remove('active');
        eraserBtn.classList.remove('active');
        colorBtn.classList.add('active');
    }
}

activeButton(paintMode);
drawBase(16);