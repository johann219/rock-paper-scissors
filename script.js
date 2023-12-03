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

  playerCounter.textContent = `Your score: ${playerScore}`;
  computerCounter.textContent = `Computer score: ${computerScore}`;
}

function checkScore () {
  if (playerScore === 5) {
    const finalDiv = document.querySelector("#final-result");
    const result = document.createElement('p');
    result.textContent = `Congratulations! You won with the score of ${playerScore}-${computerScore}`;
    finalDiv.appendChild(result);
  }

  if (computerScore === 5) {
    const finalDiv = document.querySelector("#final-result");
    const result = document.createElement('p');
    result.textContent = `What a shame! You lost with the score of ${playerScore}-${computerScore}`;
    finalDiv.appendChild(result);
  }
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
        computerScore++;
        break;
      case "Scissors":
        p.textContent = "You won! Rock beats scissors.";
        div.appendChild(p);
        playerScore++;
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
        computerScore++;
        break;
      case "Rock":
        p.textContent = "You won! Paper beats rock.";
        div.appendChild(p);
        playerScore++;
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
        computerScore++;
      case "Paper":
        p.textContent = "You won! Scissors beats paper.";
        div.appendChild(p);
        playerScore++;
        break;
    }
  }

  updateCounter();
  checkScore();
}

const btnRock = document.querySelector("#select-rock");
const btnPaper = document.querySelector("#select-paper");
const btnScissors = document.querySelector("#select-scissors");

btnRock.addEventListener('click', () => playRound("Rock"));
btnPaper.addEventListener('click', () => playRound("Paper"));
btnScissors.addEventListener('click', () => playRound("Scissors"));

let playerScore = 0;
let computerScore = 0;