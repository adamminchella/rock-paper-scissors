const images = document.querySelectorAll(".image");
const restart = document.querySelector(".restart");
let playerScore = document.querySelector(".player__score");
let computerScore = document.querySelector(".computer__score");
let remark = document.querySelector(".remark");
let tryAgain = document.querySelector(".try-again");
playerScore.innerHTML = 0;
computerScore.innerHTML = 0;

images.forEach((image) => {
  image.addEventListener("click", () => playRound(image.id));
});

restart.addEventListener("click", restartGame);
tryAgain.addEventListener("click", restartGame);

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

function playRound(playerSelection) {
  if (isGameOver()) {
    return;
  }
  playerSelection = capitalizeFirstLetter(playerSelection);
  computerSelection = capitalizeFirstLetter(computerPlay().toLowerCase());
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    playerScore.innerHTML++;
    if (isGameOver()) {
      tryAgain.classList.remove("try-again");
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
    if (isGameOver()) {
      tryAgain.classList.remove("try-again");
      return (remark.innerHTML = "Oh dear, you've been truly fucked");
    }
    remark.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}!`;
    return;
  }
  remark.innerHTML = "It's a tie!";
}

function restartGame() {
  remark.innerHTML = "";
  playerScore.innerHTML = 0;
  computerScore.innerHTML = 0;
  if (!tryAgain.classList.contains("try-again")) {
    tryAgain.classList.add("try-again");
  }
}

function isGameOver() {
  if (playerScore.innerHTML == "5" || computerScore.innerHTML == "5") {
    return true;
  }
}
