
// function that returns either rock papper scissors randomly

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;

    if(random == 1) {
        random = 'Rock';
    }else if(random == 2){
        random = 'Paper';
    }else{
        random = 'Scissors';
    };

    return random;ß
}

// function that plays a single round

function playRound(computerSelection, playerSelection) {
        if(computerSelection == 'Rock' && playerSelection == 'Paper'){
            let result = 'You win! Paper beats Rock';
            return result;
        }else if(computerSelection == 'Rock' && playerSelection == 'Scissors'){
            let result = 'You lose! Rock beats Scissors';
            return result;
        }else if(computerSelection == 'Rock' && playerSelection == 'Rock'){
            let result = 'Draw!';
            return result;
        }else if(computerSelection == 'Paper' && playerSelection == 'Rock'){
            let result = 'You lose! Paper beats Rock!';
            return result;
        }else if(computerSelection == 'Paper' && playerSelection == 'Scissors'){
            let result = 'You win! Scissors beats Paper!';
            return result;
        }else if(computerSelection == 'Paper' && playerSelection == 'Paper'){
            let result = 'Draw!';
            return result;
        }else if(computerSelection == 'Scissors' && playerSelection == 'Rock'){
            let result = 'You win! Rock beats Scissors!';
            return result;
        }else if(computerSelection == 'Scissors' && playerSelection == 'Paper'){
            let result = 'You lose! Scissors beats Paper!';
            return result;
        }else if(computerSelection == 'Scissors' && playerSelection == 'Scissors'){
            let result = 'Draw!';
            return result;
        }
}

function game() {
    

    for( let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter your choice here: ');
        const computerSelection = getComputerChoice();

        let fiveRounds = playRound(computerSelection,playerSelection);
        console.log(fiveRounds)
    }
}



