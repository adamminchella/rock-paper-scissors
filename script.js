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
  playerSelection = findPlayerSelection();
  computerSelection = capitalizeFirstLetter(computerPlay().toLowerCase());
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
  } else "It's a tie!";
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

function findPlayerSelection() {
  if (rock.classList.contains("rock")) {
    return (playerSelection = "Rock");
  }
  if (rock.classList.contains("paper")) {
    return (playerSelection = "Paper");
  }
  if (rock.classList.contains("scissors")) {
    return (playerSelection = "Scissors");
  }
}
