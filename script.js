const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const restart = document.querySelector(".restart");
let playerScore = document.querySelector(".player__score");
let computerScore = document.querySelector(".computer__score");
let remark = document.querySelector(".remark");
playerScore.innerHTML = 0;
computerScore.innerHTML = 0;

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
    playerScore.innerHTML++;
    if (playerScore.innerHTML === "5") {
      return (remark.innerHTML = "Congrats, you've fucked the pc");
    }
    remark.innerHTML = `You win! ${playerSelection} beats ${computerSelection}!`;
    return;
  }
  if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    computerScore.innerHTML++;
    if (computerScore.innerHTML === "5") {
      return (remark.innerHTML = "Oh dear, you've been fucked");
    }
    remark.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}!`;
    return;
  }
  remark.innerHTML = "It's a tie!";
}

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

restart.addEventListener("click", restartGame);

function restartGame() {
  remark.innerHTML = "";
  playerScore.innerHTML = 0;
  computerScore.innerHTML = 0;
}
