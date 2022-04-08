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

game(0);
