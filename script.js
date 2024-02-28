const ROUND_NUMBER = 5;

const results = {
    'rock - scissors': {
        result: 'win',
        message: 'You win! Rock beats scissors!'
    },
    'rock - paper': {
        result: 'lose',
        message: 'You lose! Paper beats rock!',
    },
    'rock - rock': {
        result: 'tie',
        message: 'A tie! Rock is no stronger than a rock!'
    },

    'paper - rock': {
        result: 'win',
        message: 'You win! Paper beats rock!'
    },
    'paper - scissors': {
        result: 'lose',
        message: 'You lose! Scissors beats paper!'
    },
    'paper - paper': {
        result: 'tie',
        message: 'A tie! paper is no stronger than a paper!'
    },

    'scissors - paper': {
        result: 'win',
        message: 'You win! Scissors beats paper!'
    },
    'scissors - rock': {
        result: 'lose',
        message: 'You lose! Rock beats scissors!'
    },
    'scissors - scissors': {
        result: 'tie',
        message: 'A tie! Scissors is no stronger than a scissors!'
    }
}

const getComputerChoice = () => {
    const num = Math.floor(Math.random() * 3) + 1;
    
    switch (num) {
        case 1: 
            return 'rock';
        case 2: 
            return 'paper';
        case 3: 
            return 'scissors';
    }
};

let playerScoreDisplay = document.querySelector('.player-score');
let computerScoreDisplay = document.querySelector('.computer-score');

let playerScore = 0;
let computerScore = 0;

let messageDisplay = document.querySelector('.message');

let gameDisplay = document.querySelector('.game-wrapper');

let selectionButtons = document.querySelectorAll('.selection');

let gameResultDisplay = document.querySelector('.result');

let restartButton = document.querySelector('.restart');

const updateScore = (result) => {
    switch (result) {
        case 'win':
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case 'lose':
            computerScore++
            computerScoreDisplay.textContent = computerScore;
            break;
    }
};

const updateMessage = (message) => {
    messageDisplay.textContent = message;
};

const createRestart = () => {
    restartButton.classList.add('restart-style');
    restartButton.textContent = 'Restart the game!';
};

const blockSelection = () => {
    for (let button of selectionButtons) {
        button.disabled = true;
    }
};

const declareResult = (winner) => {
    switch (winner) {
        case 'player':
            gameResultDisplay.classList.remove('hidden');
            gameResultDisplay.classList.add('winner');
            gameResultDisplay.textContent = 'You won! Congratulations!';
            break;
        case 'computer':
            gameResultDisplay.classList.remove('hidden');
            gameResultDisplay.classList.add('loser');
            gameResultDisplay.textContent = 'You lost! Sorry!';
            break;
    }

    blockSelection();
    createRestart();
};

const playRound = (playerChoice) => {
    let computerChoice = getComputerChoice();
    
    let roundResult = results[`${playerChoice} - ${computerChoice}`];
    updateScore(roundResult.result);
    updateMessage(roundResult.message);

    if (playerScore === 5) declareResult('player');
    if (computerScore === 5) declareResult('computer');
};

for (let button of selectionButtons) {
    button.addEventListener('click', (event) => {
        const target = event.target;
        playRound(target.id);
    });
}


const restartGame = () => {
    
    
    // const resultRemoval = document.querySelector('.result');
    // resultRemoval.remove();

    // const restartRemoval = document.querySelector('.restart-button');
    // restartRemoval.remove();
};

restartButton.addEventListener('click', () => {
    for (let button of selectionButtons) {
        button.disabled = false;
    }
    playerScore = 0;
    computerScore = 0;

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = playerScore;

    gameResultDisplay.classList.contains('winner') ? gameResultDisplay.classList.remove('winner') : gameResultDisplay.classList.remove('loser');
    gameResultDisplay.textContent = ''
    gameResultDisplay.classList.add('hidden');

    restartButton.classList.remove('restart-style');
    restartButton.textContent = ''
    restartButton.classList.add('hidden');

    updateMessage('Start the game: pick Rock, Paper ;or Scissors!');
});