let choices = ['rock', 'paper', 'scissor']
let compScore = 0;
let playerScore = 0;
const button = document.querySelectorAll('button')

//Section for showing results
const content = document.querySelector('#result')
const result = document.createElement('h1')



function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}


function playRound(playerSelection, computerSelection) {
  const playerMove = choices.indexOf(playerSelection.toLowerCase());

  if (playerMove == computerSelection)
    console.log("It's a tie!")

  else if ((playerMove == 0 && computerSelection == 2) ||
    (playerMove == 1 && computerSelection == 0) ||
    (playerMove == 2 && computerSelection == 1)) {
    ++playerScore

    console.log("You win!")
  }
  else {
    ++compScore
    console.log("You lose!")
  }


  if (compScore == 5) {
    result.textContent = 'The computer has won!'
    compScore = 0, playerScore = 0
  }
  else if (playerScore == 5) {
    result.textContent = 'You have won!'
    compScore = 0, playerScore = 0
  } else {
    result.textContent = `Wins:${playerScore} Loss:${compScore}`
  }
}

button.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    playRound(e.target.outerText, getComputerChoice())
  })
})

content.appendChild(result)

