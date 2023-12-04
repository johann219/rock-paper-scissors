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

function updateCounter () {
  const playerCounter = document.querySelector("#player-counter-score");
  const computerCounter = document.querySelector("#computer-counter-score");

  playerCounter.textContent = `${playerScore}`;
  computerCounter.textContent = `${computerScore}`;
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

function playRoundRock (computerSelection) {
  switch (computerSelection) {
    case "Rock":
      return "It's a draw! Rock can't beat itself.";
    case "Paper":
      computerScore++;
      return "You lost! Paper beats rock.";
    case "Scissors":
      playerScore++;
      return "You won! Rock beats scissors.";
  }
}

function playRoundPaper (computerSelection) {
  switch (computerSelection) {
    case "Paper":
      return "It's a draw! Paper can't beat itself.";
    case "Scissors":
      computerScore++;
      return "You lost! Scissors beats paper.";
    case "Rock":
      playerScore++;
      return "You won! Paper beats rock.";
  }
}

function playRoundScissors (computerSelection) {
  switch (computerSelection) {
    case "Scissors":
      return "It's a draw! Scissors can't beat itself.";
    case "Rock":
      computerScore++;
      return "You lost! Rock beats scissors.";
    case "Paper":
      playerScore++;
      return "You won! Scissors beats paper.";
  }
}

const playRound = function (playerSelection) {
  const computerSelection = getComputerChoice();
  
  const p = document.querySelector("#temp-result");

  switch (playerSelection) {
    case 'Rock':
      p.textContent = playRoundRock(computerSelection);
      break;
    case 'Paper':
      p.textContent = playRoundPaper(computerSelection);
      break;
    case 'Scissors':
      p.textContent = playRoundScissors(computerSelection);
      break;
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