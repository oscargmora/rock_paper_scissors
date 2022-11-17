var getComputerChoice = [
    'Computer Picked: Rock',
    'Computer Picked: Paper',
    'Computer Picked: Scissors',
]

let playerScore = 0;
let computerScore = 0;
let playerSelection;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'ROCK') {
        if (computerSelection === 'Computer Picked: Rock') {
            return('Draw! \nPlayer Score: ' + playerScore + '\nComputer Score: ' + computerScore);
        } else if (computerSelection === 'Computer Picked: Paper') {
            ++computerScore;
            return('You lose! Paper beats rock \nPlayer Score: ' + playerScore + '\nComputer Score: ' + computerScore);
        } else if (computerSelection === 'Computer Picked: Scissors') {
            ++playerScore;
            return('You win! Rock beats scissors \nPlayer Score: ' + playerScore + '\nComputer Score: ' + computerScore);
        };
    } else if (playerSelection === 'PAPER') {
        if (computerSelection === 'Computer Picked: Rock') {
            ++playerScore;
            return('You win! Paper beats rock \nPlayer Score: ' + playerScore + '\nComputer Score: ' + computerScore);
        } else if (computerSelection === 'Computer Picked: Paper') {
            return('Draw! \nPlayer Score: ' + playerScore + '\nComputer Score: ' + computerScore);
        } else if (computerSelection === 'Computer Picked: Scissors') {
            ++computerScore;
            return('You lose! Scissors beat Paper \nPlayer Score: ' + playerScore + '\nComputer Score: ' + computerScore)
        }  
    } else if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'Computer Picked: Rock') {
            ++computerScore;
            return('You lose! Rock beats scissors \nPlayer Score: ' + playerScore + '\nComputer Score: ' + computerScore);
        } else if (computerSelection === 'Computer Picked: Paper') {
            ++playerScore;
            return('You win! Scissors beats paper \nPlayer Score: ' + playerScore + '\nComputer Score: ' + computerScore);
        } else if (computerSelection === 'Computer Picked: Scissors') {
            return('Draw! \nPlayer Score: ' + playerScore + '\nComputer Score: ' + computerScore);
        }
    } else {
        ++computerScore;
        return('learn how to spell bozo \nAUTOMATIC COMPUTER POINT \nPlayer Score: ' + playerScore + '\nComputer Score: ' + computerScore);
    }
}

function end() {
    if (playerScore > computerScore) {
        alert("YOU BEAT THE COMPUTER!");
    } else if (playerScore < computerScore) {
        alert("Damn...AI taking over the world for real");
    } else {
        alert("Tie Game")
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice[Math.floor(Math.random() * getComputerChoice.length)];
        let selection = prompt('Choose Your Fighter!');
        if (selection === null) {
            return;
        } else {
            let playerSelection = selection.toUpperCase();
            console.log(computerSelection);
            playRound;
            console.log(playRound(playerSelection, computerSelection)); 
        }
    }
    end();
}

game();