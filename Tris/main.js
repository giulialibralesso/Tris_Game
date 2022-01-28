//Selectors
const clicked = document.querySelector('.main-container');
const firstRow = document.querySelector('.first-row');    
const secondRow = document.querySelector('.second-row');    
const thirdRow = document.querySelector('.third-row');

//Variables
let cellIds = [0, 1, 2, 3, 4, 5, 6, 7, 8];

//Event Listeners
clicked.addEventListener('click', fillCells);

//Functions
function fillCells(event) {
    const item = event.target;

    if(item.innerText !== 'X' && item.innerText !== 'O') {
        item.innerText = 'X';
        deleteIdFromArray(item);
        checkWhoWins('X', 'You win! :-) \n Browser will automatically refresh in 5" to Play Again');
        //Call computer turn
        computerTurn(cellIds);
        //Check if computer won
        checkWhoWins('O', 'Game Over :-( Try again \n Browser will automatically refresh in 5" to Play Again');
    }
    
}

function deleteIdFromArray(element) {
    //Get element id
    const idNumberString = element.id;

    //Convert string id to int
    const idNumberInt = parseInt(idNumberString);
   
    //Find int in array and delete it
    if (cellIds.includes(idNumberInt)) {
        const index = cellIds.indexOf(idNumberInt);
        cellIds.splice(index, 1);
    }    

}

function computerTurn(updatedArray) {
    //Choose a random item from array
    const computerRandomItem = updatedArray[Math.floor(Math.random()*updatedArray.length)];

    //Delete number from array
    const indexComputer = updatedArray.indexOf(computerRandomItem);
    updatedArray.splice(indexComputer, 1);

    //Convert int to string
    const idComputerString = computerRandomItem.toString();
    
    //Fill relevant id element with computer move mark
    const computerMoveElement = document.getElementById(idComputerString);
    computerMoveElement.innerText = 'O';    
}

function checkWhoWins(value, responseMessage) {  
    
    if (

        (((firstRow.children[0].innerText === value)
        && (firstRow.children[1].innerText === value)
        && (firstRow.children[2].innerText === value))
        ||
        ((secondRow.children[0].innerText === value)
        && (secondRow.children[1].innerText === value)
        && (secondRow.children[2].innerText === value))
        ||
        ((thirdRow.children[0].innerText === value)
        && (thirdRow.children[1].innerText === value)
        && (thirdRow.children[2].innerText === value)))
        ||
        (((firstRow.children[0].innerText === value)
        && (secondRow.children[0].innerText === value)
        && (thirdRow.children[0].innerText === value)))
        ||
        (((firstRow.children[1].innerText === value)
        && (secondRow.children[1].innerText === value)
        && (thirdRow.children[1].innerText === value)))
        ||
        (((firstRow.children[2].innerText === value)
        && (secondRow.children[2].innerText === value)
        && (thirdRow.children[2].innerText === value)))
        ||
        (((firstRow.children[0].innerText === value)
        && (secondRow.children[1].innerText === value)
        && (thirdRow.children[2].innerText === value)))
        ||
        (((firstRow.children[2].innerText === value)
        && (secondRow.children[1].innerText === value)
        && (thirdRow.children[0].innerText === value)))
        
        )    {
        document.querySelector('h1').innerText = responseMessage;
        setTimeout(refresh, 5000);
}
}

function refresh() {
    location.reload();
}
