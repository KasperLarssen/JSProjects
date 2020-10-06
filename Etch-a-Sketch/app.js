gridContainer = document.getElementById('gridContainer')
for (let index = 0; index < 256; index++) {
    let div = document.createElement('div');
    div.className = 'flex-item';
    gridContainer.appendChild(div);
}


function updateGrid(userInput) {
    userInput = document.getElementById('userInput').value;
    for (let i = 0; i < (userInput * userInput); i++) {
        let div = document.createElement('div');
        div.className = 'flex-item';
        gridContainer.appendChild(div);
        gridContainer.style.grid - template - columns = INDSÆT repeat(userinput, 1 fr)
    }
}

function testGrid() {
    gridContainer.innerHTML = "";
    gridContainer.style.width = '600px';
    gridContainer.style.height = '600px';
}