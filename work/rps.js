let choices = ['rock', 'paper', 'scissor']
let compScore = 0;
let playerScore = 0;

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}


function playRound(playerSelection, computerSelection) {
  const playerMove = choices.indexOf(playerSelection.toLowerCase());

  if (playerMove == computerSelection)
    return "It is a tie!";

  else if ((playerMove == 0 && computerSelection == 2) ||
    (playerMove == 1 && computerSelection == 0) ||
    (playerMove == 2 && computerSelection == 1)) {
    playerScore++;
    return "You Win!";
  }
  else {
    compScore++;
    return "You lose!";
  }
}

function game(loop) {
  compScore = 0;
  playerScore = 0;
  console.log(playRound(prompt("What is your choice?"), getComputerChoice()));
}
