function getComputerChoice() {
  let random = Math.floor(Math.random() * 3 + 1);
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

function formatSelection (selection) {
  const selectionLowerCase = selection.toLowerCase();
  const selectionFirstLetter = selection.slice(0, 1);
  const selectionFirstLetterCapitalized = selectionFirstLetter.toUpperCase();
  const selectionFormatted = selectionFirstLetterCapitalized + selectionLowerCase.slice(1, selection.length);
  return selectionFormatted;
}

function playRound (playerSelection, computerSelection) {
  const playerSelectionFormat = formatSelection(playerSelection);
  const computerSelectionFormat = formatSelection(computerSelection);

  if (playerSelectionFormat === computerSelectionFormat) {
    return "Draw!";
  }

  if (playerSelectionFormat === "Rock") {
    return computerSelectionFormat === "Scissors" ? "You win! Rock beats scissors." : "You lose! Paper beats rock.";
  }
  
  if (playerSelectionFormat === "Paper") {
    return computerSelectionFormat === "Rock" ? "You win! Paper beats rock." : "You lose! Scissors beat paper.";
  }
  
  if (playerSelectionFormat === "Scissors") {
    return computerSelectionFormat === "Paper" ? "You win! Scissors beat paper." : "You lose! Rock beats scissors.";
  }
}
// Convert player choice to lower case
// Convert player choice first letter to upper case
// If player choice is the same as computer choice declare a draw
// If player choice is paper and computer choice is rock return "You win!"