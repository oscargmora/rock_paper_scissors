var getComputerChoice = [
    'Computer Fighter: Rock',
    'Computer Fighter: Paper',
    'Computer Fighter: Scissors',
    'Computer Fighter: Lizard',
    'Computer Fighter: Spock'
]

let playerScore = 0;
let computerScore = 0;
let playerSelection;

const winLose = document.querySelector('.win-lose');
const rocks = document.querySelector('#rock');
const papers = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const lizards = document.querySelector('#lizard');
const spocks = document.querySelector('#spock');
const yourFighter = document.querySelector('#your-fighter');
const computerFighter = document.querySelector('#computer-fighter');
const playerScoreText = document.querySelector('#player-score');
const computerScoreText = document.querySelector('#computer-score');
const rules = document.querySelector('.rules');
const btn = document.querySelectorAll('.btn');
const restart = document.querySelector('.restart');

rocks.addEventListener('click', () => {
    yourFighter.textContent = 'Your Fighter: Rock';
    playerSelection = 'ROCK';
    game();
});

papers.addEventListener('click', () => {
    yourFighter.textContent = 'Your Fighter: Paper';
    playerSelection = 'PAPER';
    game();
});

scissors.addEventListener('click', () => {
    yourFighter.textContent = 'Your Fighter: Scissors';
    playerSelection = 'SCISSORS';
    game();
});

lizards.addEventListener('click', () => {
    yourFighter.textContent = 'Your Fighter: Lizard';
    playerSelection = 'LIZARD';
    game();
});

spocks.addEventListener('click', () => {
    yourFighter.textContent = 'Your Fighter: Spock';
    playerSelection = 'SPOCK';
    game();
});

restart.addEventListener('click', () => {
    window.location.reload();
});

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'ROCK') {
        if (computerSelection === 'Computer Fighter: Rock') {
            rules.textContent = ("It's a tie! No Points for Anyone")
            return('Draw!');
        } else if (computerSelection === 'Computer Fighter: Paper') {
            ++computerScore;
            rules.textContent = ('Paper covers Rock');
            return('You lose!');
        } else if (computerSelection === 'Computer Fighter: Scissors') {
            ++playerScore;
            rules.textContent = ('Rock Crushes Scissors');
            return('You win!');
        } else if (computerSelection === 'Computer Fighter: Lizard') {
            ++playerScore;
            rules.textContent = ('Rock crushes Lizard');
            return('You win!');
        } else if (computerSelection === 'Computer Fighter: Spock') {
            ++computerScore;
            rules.textContent = ('Spock vaporizes Rock');
            return('You lose!');
        };
    } else if (playerSelection === 'PAPER') {
        if (computerSelection === 'Computer Fighter: Rock') {
            ++playerScore;
            rules.textContent = ('Paper covers Rock');
            return('You win!');
        } else if (computerSelection === 'Computer Fighter: Paper') {
            rules.textContent = ("It's a Tie! No Points for Anyone");
            return('Draw!');
        } else if (computerSelection === 'Computer Fighter: Scissors') {
            ++computerScore;
            rules.textContent = ('Scissors cuts Paper');
            return('You lose!')
        } else if (computerSelection === 'Computer Fighter: Lizard') {
            ++computerScore;
            rules.textContent = ('Lizard eats Paper');
            return('You lose!');
        } else if (computerSelection === 'Computer Fighter: Spock') {
            ++playerScore;
            rules.textContent = ('Paper disproves Spock');
            return('You win!');
        };
    } else if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'Computer Fighter: Rock') {
            ++computerScore;
            rules.textContent = ('Rock crushed scissors');
            return('You lose!');
        } else if (computerSelection === 'Computer Fighter: Paper') {
            ++playerScore;
            rules.textContent = ('Scissors cuts Paper');
            return('You win!');
        } else if (computerSelection === 'Computer Fighter: Scissors') {
            rules.textContent = ("It's a Tie! No Points for Anyone");
            return('Draw!');
        } else if (computerSelection === 'Computer Fighter: Lizard') {
            ++playerScore;
            rules.textContent = ('Scissors decapitates Lizard');
            return('You win!');
        } else if (computerSelection === 'Computer Fighter: Spock') {
            ++computerScore;
            rules.textContent = ('Spock smashes Scissors');
            return('You lose!');
        };
    } else if (playerSelection === 'LIZARD') {
        if (computerSelection === 'Computer Fighter: Rock') {
            ++computerScore;
            rules.textContent = ('Rock Crushes Lizard');
            return('You lose!');
        } else if (computerSelection === 'Computer Fighter: Paper') {
            ++playerScore;
            rules.textContent = ('Lizard eats Paper');
            return('You win!');
        } else if (computerSelection === 'Computer Fighter: Scissors') {
            ++computerScore;
            rules.textContent = ('Scissors decapitates Lizard');
            return('You lose!');
        } else if (computerSelection === 'Computer Fighter: Lizard') {
            rules.textContent = ("It's a Tie! No Points for Anyone");
            return('Draw!');
        } else if (computerSelection === 'Computer Fighter: Spock') {
            ++playerScore;
            rules.textContent = ('Lizard poisons Spock');
            return('You win!');
        };
    } else if (playerSelection === 'SPOCK') {
        if (computerSelection === 'Computer Fighter: Rock') {
            ++playerScore;
            rules.textContent = ('Spock vaporizes Rock');
            return('You win!');
        } else if (computerSelection === 'Computer Fighter: Paper') {
            ++computerScore;
            rules.textContent = ('Paper disproves Spock');
            return('You lose!');
        } else if (computerSelection === 'Computer Fighter: Scissors') {
            ++playerScore;
            rules.textContent = ('Spock Smashes Scissors');
            return('You win!');
        } else if (computerSelection === 'Computer Fighter: Lizard') {
            ++computerScore;
            rules.textContent = ('Lizard Poisons Spock');
            return('You lose!');
        } else if (computerSelection === 'Computer Fighter: Spock') {
            rules.textContent = ("It's a Tie! No Points for Anyone");
            return('Draw!');
        };
    } else {
        ++computerScore;
        rules.textContent = ('AUTOMATIC COMPUTER POINT');
        return('learn how to spell bozo');
    }
};

function disableButtons() {
    btn.forEach(elem => {
        elem.disabled = true
    })
};

function end() {
    if (playerScore === 5) {
        winLose.textContent = ("YOU BEAT THE COMPUTER!");
        disableButtons();
    } else if (computerScore === 5) {
        winLose.textContent = ("Damn...AI taking over the world for real");
        disableButtons();
    } else if (playerScore === 5 && computerScore === 5) {
        winLose.textContent = ("Tie Game");
        disableButtons();
    } else {
        return;
    }
};

function game() {
    let computerSelection = getComputerChoice[Math.floor(Math.random() * getComputerChoice.length)];
    computerFighter.textContent = `${computerSelection}`;
    playRound;
    winLose.textContent = (playRound(playerSelection, computerSelection));
    playerScoreText.textContent = `Your Score: ${playerScore}`;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;
    end();
};