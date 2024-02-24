const getComputerChoice = () => {
    const num = Math.floor(Math.random() * 3) + 1;
    
    switch (num) {
        case 1: 
            return 'Rock';
        case 2: 
            return 'Paper';
        case 3: 
            return 'Scissors';
    }
};

const capitalizeString = (string) => {
    const firstLetter = string.slice(0, 1).toUpperCase();
    string = firstLetter + string.slice(1).toLowerCase();
    return string;
}

const results = {
    'Rock - Scissors': {
        result: 'win',
        message: 'You win! Rock beats scissors!'
    },
    'Rock - Paper': {
        result: 'lose',
        message: 'You lose! Paper beats rock!',
    },
    'Rock - Rock': {
        result: 'tie',
        message: 'A tie! Rock is no stronger than a rock!'
    },

    'Paper - Rock': {
        result: 'win',
        message: 'You win! Paper beats rock!'
    },
    'Paper - Scissors': {
        result: 'lose',
        message: 'You lose! Scissors beats paper!'
    },
    'Paper - Paper': {
        result: 'tie',
        message: 'A tie! paper is no stronger than a paper!'
    },

    'Scissors - Paper': {
        result: 'win',
        message: 'You win! Scissors beats paper!'
    },
    'Scissors - Rock': {
        result: 'lose',
        message: 'You lose! Rock beats scissors!'
    },
    'Scissors - Scissors': {
        result: 'tie',
        message: 'A tie! Scissors is no stronger than a scissors!'
    }
}

const playRound = (playerChoice, computerChoice) => {
    console.log(results[`${playerChoice} - ${computerChoice}`].message);
    return results[`${playerChoice} - ${computerChoice}`].result;
};