gridContainer = document.getElementById('gridContainer');
flexItem = document.getElementsByClassName('flex-item');

//shows up as default, when page is loaded (16x16)
function defaultGrid() {
    for (let index = 0; index < 256; index++) {
        let div = document.createElement('div');
        div.className = 'flex-item';
        div.addEventListener('mouseover', function (event) {
            event.target.style.backgroundColor = 'black';
        })
        gridContainer.appendChild(div);
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function updateGrid() {
    let userInput = document.getElementById('userInput').value;
    userInput = Math.abs(userInput); //makes sure its a positive number
    if (userInput > 50) {
        userInput = 50;
    }
    removeAllChildNodes(gridContainer);
    gridContainer.style.setProperty('grid-template-columns', 'repeat(' + userInput + ', 1fr)'); //updates css property, to only allow columns corresponding to userinput.
    for (let i = 0; i < (userInput * userInput); i++) {
        let div = document.createElement('div');
        div.className = 'flex-item';
        div.addEventListener('mouseover', function (event) {
            event.target.style.backgroundColor = 'black';
        })
        gridContainer.appendChild(div);
    }
}



const clear = document.querySelector('#clear');
clear.addEventListener('click', function () {
    let cell = gridContainer.children;
    for (let i = 0; i < 2500; i++) {
        cell[i].style.backgroundColor = '';
    }
});




const rainbow = document.querySelector('#rainbowMode');
rainbow.addEventListener('click', function () {
    let cell = gridContainer.children;
    for (let i = 0; i < 2500; i++) {
        cell[i].addEventListener('mouseover', function (event) {
            event.target.style.backgroundColor = getRandomColor();
        })
    }
});

function getRandomColor() {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}
