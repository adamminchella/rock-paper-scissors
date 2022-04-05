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

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Please enter your guess").toLowerCase();
  computerSelection = computerPlay().toLowerCase();
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return `You lose! ${computerSelection} beats ${playerSelection}!`;
  } else return "It's a tie!";
}

function game(numberOfRounds) {
  for (let i = 0; i < numberOfRounds; i++) {
    console.log(`Round ${i + 1}. ${playRound()}`);
  }
  return;
}

game(5);
