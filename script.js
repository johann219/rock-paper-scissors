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

const resultMessages = {
    'Rock - Scissors': 'You win! Rock beats scissors!',
    'Rock - Paper': 'You lose! Paper beats rock!',
    'Rock - Rock': 'A tie! Rock is no stronger than a rock!',

    'Paper - Rock': 'You win! Paper beats rock!',
    'Paper - Scissors': 'You lose! Scissors beats paper!',
    'Paper - Paper': 'A tie! paper is no stronger than a paper!',

    'Scissors - Paper': 'You win! Scissors beats paper!',
    'Scissors - Rock': 'You lose! Rock beats scissors!',
    'Scissors - Scissors': 'A tie! Scissors is no stronger than a scissors!',
}

const playRound = (playerChoice, computerChoice) => {
    return resultMessages[`${playerChoice} - ${computerChoice}`];
};