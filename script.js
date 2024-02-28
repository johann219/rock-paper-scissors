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

const playRound = (playerChoice) => {
    let computerChoice = getComputerChoice();
    
    let roundResult = results[`${playerChoice} - ${computerChoice}`];
    console.log(roundResult.message);

    return roundResult;
};

const selectionButtons = document.querySelectorAll('.selection');

for (let button of selectionButtons) {
    button.addEventListener('click', (event) => {
        const target = event.target;
        playRound(target.id);
    });
}

const startButton = document.querySelector('.start');
startButton.addEventListener('click', () => {
    playerScoreDisplay.classList.remove('hidden');
    computerScoreDisplay.classList.remove('hidden');
});