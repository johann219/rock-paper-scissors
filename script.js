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

function playRound (playerSelection, computerSelection) {
  const playerSelectionFormat = formatSelection(playerSelection);

  if (playerSelectionFormat === "Rock") {
    switch (computerSelection) {
      case "Rock":
        alert("It's a draw! Rock can't beat itself.");
        return "draw";
      case "Paper":
        alert("You lost! Paper beats rock.");
        return "lose";
      case "Scissors":
        alert("You won! Rock beats scissors.");
        return "win";
    }
  }

  if (playerSelectionFormat === "Paper") {
    switch (computerSelection) {
      case "Paper":
        alert("It's a draw! Paper can't beat itself.");
        return "draw";
      case "Scissors":
        alert("You lost! Scissors beats paper.");
        return "lose";
      case "Rock":
        alert("You won! Paper beats rock.");
        return "win";
    }
  }

  if (playerSelectionFormat === "Scissors") {
    switch (computerSelection) {
      case "Scissors":
        alert("It's a draw! Scissors can't beat itself.");
        return "draw";
      case "Rock":
        alert("You lost! Rock beats scissors.");
        return "lose";
      case "Paper":
        alert("You won! Scissors beats paper.");
        return "win";
    }
  }
}

/*
function game() {
  let playerCount = 0;
  let computerCount = 0;

  for (i = 0; i < 5; i++) {
    let playerChoice = prompt("rock, paper, scissors");
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);
    if (result !== "Draw!") {
      if (result.slice(0, 7) === "You win") {
        ++playerCount;
      } else {
        ++computerCount;
      }
    }

    alert(`${result} Total score: ${playerCount}-${computerCount}`);

    if (playerCount === 3) {
      alert(`You won the game with the score of ${playerCount}-${computerCount}!`);
      return "win";
    } else if (computerCount === 3) {
      alert(`Sorry! You lost the game with the score of ${playerCount}-${computerCount}!`);
      return "lose";
    }
  }

  if (computerCount > playerCount) {
    alert(`Sorry! You lost the game with the score of ${playerCount}-${computerCount}!`);
    return "lose";
  } else if (computerCount < playerCount) {
    alert(`You won the game with the score of ${playerCount}-${computerCount}!`);
    return "win";
  } else {
    alert(`The game concluded in a draw with the score of ${playerCount}-${computerCount}`)
  }
}

game();
*/