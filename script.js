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