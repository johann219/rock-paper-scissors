function getComputerChoice() {
  let random = randomOneToThree();
  let computerChoice = "";
  switch (random) {
    case 1: 
      computerChoice = "Rock";
      break;
    case 2:
      computerChoice = "Paper";
      break;
    case 3: 
      computerChoice = "Scissors";
      break;
  }
  return computerChoice;
}

function randomOneToThree () {
  return Math.floor(Math.random() * 3 + 1);
}

function formatSelection (selection) {
  const selectionLowerCase = selection.toLowerCase();
  const selectionFirstLetter = selection.slice(0, 1);
  const selectionFirstLetterCapitalized = selectionFirstLetter.toUpperCase();
  const selectionFormatted = selectionFirstLetterCapitalized + selectionLowerCase.slice(1, selection.length);
  return selectionFormatted;
}

function updateCounter () {
  const playerCounter = document.querySelector("#player-counter");
  const computerCounter = document.querySelector("#computer-counter");

  playerCounter.textContent = `Your score: ${playerCount}`;
  computerCounter.textContent = `Computer score: ${computerCount}`;
}

const playRound = function (playerSelection) {
  const computerSelection = getComputerChoice();
  
  const div = document.querySelector("#temp-result");
  if (document.querySelector('#round-result') !== null) {
    div.removeChild(document.querySelector('p'));
  }
  const p = document.createElement('p');
  p.setAttribute('id', "round-result")

  if (playerSelection === "Rock") {
    switch (computerSelection) {
      case "Rock":
        p.textContent = "It's a draw! Rock can't beat itself.";
        div.appendChild(p);
        break;
      case "Paper":
        p.textContent = "You lost! Paper beats rock.";
        div.appendChild(p);
        computerCount++;
        break;
      case "Scissors":
        p.textContent = "You won! Rock beats scissors.";
        div.appendChild(p);
        playerCount++;
        break;
    }
  }

  if (playerSelection === "Paper") {
    switch (computerSelection) {
      case "Paper":
        p.textContent = "It's a draw! Paper can't beat itself.";
        div.appendChild(p);
        break;
      case "Scissors":
        p.textContent = "You lost! Scissors beats paper.";
        div.appendChild(p);
        computerCount++;
        break;
      case "Rock":
        p.textContent = "You won! Paper beats rock.";
        div.appendChild(p);
        playerCount++;
        break;
    }
  }

  if (playerSelection === "Scissors") {
    switch (computerSelection) {
      case "Scissors":
        p.textContent = "It's a draw! Scissors can't beat itself.";
        div.appendChild(p);
        break;
      case "Rock":
        p.textContent = "You lost! Rock beats scissors.";
        div.appendChild(p);
        computerCount++;
      case "Paper":
        p.textContent = "You won! Scissors beats paper.";
        div.appendChild(p);
        playerCount++;
        break;
    }
  }

  updateCounter();
}

const btnRock = document.querySelector("#select-rock");
const btnPaper = document.querySelector("#select-paper");
const btnScissors = document.querySelector("#select-scissors");

btnRock.addEventListener('click', () => playRound("Rock"));
btnPaper.addEventListener('click', () => playRound("Paper"));
btnScissors.addEventListener('click', () => playRound("Scissors"));

let playerCount = 0;
let computerCount = 0;
/*
function game() {
  let playerCount = 0;
  let computerCount = 0;

  for (i = 0; i < 5; i++) {
    alert(`Round left: ${5-i}`);
    let playerChoice = prompt("rock, paper, scissors");
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);
    
    switch (result) {
      case "win":
        ++playerCount;
        break;
      case "lose":
        ++computerCount;
        break;
    }

    alert(`The score is ${playerCount}-${computerCount}`);
    
    if (playerCount === 3 || i < 4) {
      alert(`Congratulations! You win early with the score of ${playerCount}-${computerCount}`);
      return "Game won!";
    } 

    if (computerCount === 3 || i < 4) {
      alert(`Sorry! You lose early with the score of ${playerCount}-${computerCount}`);
      return "Game lost!";
    }
  }

  if (playerCount > computerCount) {
    alert(`Congratulations! You win with the score of ${playerCount}-${computerCount}`);
      return "Game won!";
  } else if (playerCount < computerCount) {
    alert(`Sorry! You lose with the score of ${playerCount}-${computerCount}`);
    return "Game lost!";
  } else {
    alert(`Unfortunately, game concluded as a draw with the score of ${playerCount}-${computerCount}`);
    return "The draw!";
  }
}

game();
*/