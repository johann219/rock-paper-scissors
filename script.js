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