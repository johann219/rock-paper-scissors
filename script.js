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

const declareWinner = (winner) => {
    const winnerMessage = document.createElement('div');
    switch (winner) {
        case 'player':
            winnerMessage.classList.add('winner');
            winnerMessage.textContent = 'You won! Congratulations!';
            break;
        case 'computer':
            winnerMessage.classList.add('loser');
            winnerMessage.textContent = 'You lost! Sorry!';
            break;
    }
    gameDisplay.appendChild(winnerMessage);
};

const playRound = (playerChoice) => {
    let computerChoice = getComputerChoice();
    
    let roundResult = results[`${playerChoice} - ${computerChoice}`];
    updateScore(roundResult.result);
    updateMessage(roundResult.message);


    if (playerScore === 5) {
        declareWinner('player');
    }

    if (computerScore === 5) {
        declareWinner('computer');
    }
};

const selectionButtons = document.querySelectorAll('.selection');
for (let button of selectionButtons) {
    button.addEventListener('click', (event) => {
        const target = event.target;
        playRound(target.id);
    });
}
// Кнопки выбора - при нажатии играется раунд, счет записывается и отображается, 
// при достижении 5 очков - объявляется победитель. Кнопки становятся не активны
// Строка объявлений - объясняет исход сыгранного раунда или приглашает начать игру
    // При нулевом счете приглашает сделать первый выбор
// Кнопка Start Over позволяет начать новую игру в любой момент времени 
    // Сбрасывает счет и его отображение до 0
    // В строке объявлений показывает приглашение сделать первый выбор