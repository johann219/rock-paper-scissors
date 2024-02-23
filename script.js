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

const capitalizeString = (string) => {
    const firstLetter = string.slice(0, 1).toUpperCase();
    string = firstLetter + string.slice(1).toLowerCase();
    return string;
}

const results = {
    'Rock - Scissors': 'You win! Rock beats scissors!',
    'Rock - Paper': 'You lose! Paper beats rock!',
    'Rock - Scissors': 'A tie! Rock is no stronger than a rock!',

    'Paper - Rock': 'You win! Paper beats rock!',
    'Paper - Scissors': 'You lose! Scissors beats paper!',
    'Paper - Paper': 'A tie! paper is no stronger than a paper!',

    'Scissors - Paper': 'You win! Scissors beats paper!',
    'Scissors - Rock': 'You lose! Rock beats scissors!',
    'Scissors - Scissors': 'A tie! Scissors is no stronger than a scissors!',
}