function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "Rock";
  } else if (randomNumber === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalizeFirstLetter(
    prompt("Please enter your guess").toLowerCase()
  );
  computerSelection = capitalizeFirstLetter(computerPlay().toLowerCase());
  if (
    playerSelection !== "Rock" &&
    playerSelection !== "Paper" &&
    playerSelection !== "Scissors"
  ) {
    return false;
  }
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    return `You lose! ${computerSelection} beats ${playerSelection}!`;
  } else return "It's a tie!";
}

function game(numberOfRounds) {
  for (let i = 0; i < numberOfRounds; i++) {
    let roundResult = playRound();
    if (roundResult === false) {
      console.log("Fuck you, enter a valid guess");
      i--;
    } else console.log(`Round ${i + 1}. ${roundResult}`);
  }
  return;
}

game(5);
