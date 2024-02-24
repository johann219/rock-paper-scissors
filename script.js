const ROUND_NUMBER = 5;

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

const getPlayerChoice = () => {
    while (true) {
        let playerChoice = prompt('Rock, Paper or Scissors (capitalization doesn\'t matter)').toLowerCase();
        playerChoice = playerChoice.toLowerCase();
        if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
            return playerChoice;
        }
    }
};

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

const playRound = (playerChoice, computerChoice) => results[`${playerChoice} - ${computerChoice}`];

const playGame = () => {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= ROUND_NUMBER; i++) {
        
        if (i === ROUND_NUMBER) {
            alert('FINAL ROUND!!!');
            console.log('FINAL ROUND!!!');
        } else {
            alert(`Round ${i}!`);
            console.log(`Round ${i}!`);
        }

        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        
        let roundResult = playRound(playerChoice, computerChoice);

        switch (roundResult.result) {
            case 'win':
                playerScore++;
                break;
            case 'lose':
                computerScore++;
                break;
        }
        
        if (i !== ROUND_NUMBER) {
            alert(`${roundResult.message}\nAfter round ${i} the score is: ${playerScore}-${computerScore}`);
            console.log(`${roundResult.message}\nAfter round ${i} the score is: ${playerScore}-${computerScore}`);
        }
    }
    
    if (playerScore > computerScore) {
        alert(`Congratulations, you win! After ${ROUND_NUMBER} rounds the score is ${playerScore}-${computerScore} in your favor!`);
        console.log(`Congratulations, you win! After ${ROUND_NUMBER} rounds the score is ${playerScore}-${computerScore} in your favor!`);
    } else if (playerScore === computerScore) {
        alert(`Unfortunately, it's a tie! After ${ROUND_NUMBER} rounds the score is ${playerScore}-${computerScore}!`);
        console.log(`Unfortunately, it's a tie! After ${ROUND_NUMBER} rounds the score is ${playerScore}-${computerScore}!`);
    } else {
        alert(`Sorry, you lost! After ${ROUND_NUMBER} rounds the score is ${playerScore}-${computerScore} in your opponents favor!`);
        console.log(`Sorry, you lost! After ${ROUND_NUMBER} rounds the score is ${playerScore}-${computerScore} in your opponents favor!`);
    }
};

playGame();