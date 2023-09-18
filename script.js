
// function that returns either rock papper scissors randomly

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;

    if(random == 1) {
        random = 'Rock';
        return random;
    }else if(random == 2){
        random = 'Paper';
        return random;
    }else{
        random = 'Scissors';
        return random;
    };


}

let playerScore = 0;
    let computerScore = 0;

// function that plays a single round

function playRound(computerSelection, playerSelection) {
    

        if(computerSelection == 'Rock' && playerSelection == 'Paper'){
            let result = 'You win! Paper beats Rock!';
            playerScore += 1;
            return result;
            
        }else if(computerSelection == 'Rock' && playerSelection == 'Scissors'){
            let result = 'You lose! Rock beats Scissors!';
            computerScore += 1;
            return result;
        }else if(computerSelection == 'Rock' && playerSelection == 'Rock'){
            let result = 'Draw!';
            return result;
        }else if(computerSelection == 'Paper' && playerSelection == 'Rock'){
            let result = 'You lose! Paper beats Rock!';
            computerScore += 1;
            return result;
        }else if(computerSelection == 'Paper' && playerSelection == 'Scissors'){
            let result = 'You win! Scissors beats Paper!';
            playerScore += 1;
            return result;
        }else if(computerSelection == 'Paper' && playerSelection == 'Paper'){
            let result = 'Draw!';
            return result;
        }else if(computerSelection == 'Scissors' && playerSelection == 'Rock'){
            let result = 'You win! Rock beats Scissors!';
            playerScore += 1;
            return result;
        }else if(computerSelection == 'Scissors' && playerSelection == 'Paper'){
            let result = 'You lose! Scissors beats Paper!';
            computerScore += 1;
            return result;
        }else if(computerSelection == 'Scissors' && playerSelection == 'Scissors'){
            let result = 'Draw!';
            return result;
        }
    
        



}

/*
function game() {
    

    for( let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter your choice here: ');
        const computerSelection = getComputerChoice();

        let fiveRounds = playRound(computerSelection,playerSelection);
        console.log(fiveRounds)
    }
}
*/



// onclick functions for the buttons
function clickRock() {
    const playerSelection = 'Rock';
    const computerSelection =  getComputerChoice();

    const displayResult = document.createElement('p');
    displayResult.classList.add('content');
    displayResult.textContent = playRound(computerSelection, playerSelection);
    container.appendChild(displayResult);

}

function clickPaper() {
    const playerSelection = 'Paper';
    const computerSelection =  getComputerChoice();

    
    const displayResult = document.createElement('p');
    displayResult.classList.add('container');
    displayResult.textContent = playRound(computerSelection, playerSelection);
    container.appendChild(displayResult);
}

function clickScissors() {
    const playerSelection = 'Scissors';
    const computerSelection =  getComputerChoice();

    const displayResult = document.createElement('p');
    displayResult.classList.add('container');
    displayResult.textContent = playRound(computerSelection, playerSelection);
    container.appendChild(displayResult);

}








// Rock button
const container = document.querySelector(".content");
const rockButton = document.createElement('button');
rockButton.classList.add('content');
rockButton.textContent = 'Rock';
container.appendChild(rockButton);
rockButton.onclick = clickRock;

// Paper button
const paperButton = document.createElement('button');
paperButton.classList.add('content');
paperButton.textContent = 'Paper';
container.appendChild(paperButton);
paperButton.onclick = clickPaper;

// Scissors button
const scissorsButton = document.createElement('button');
scissorsButton.classList.add('content');
scissorsButton.textContent = 'Scissors';
container.appendChild(scissorsButton);
scissorsButton.onclick = clickScissors;




