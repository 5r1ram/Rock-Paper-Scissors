//Game
let yourChoiceBlock;
let compChoiceBlock;

function game()  {
  for (let i=0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    yourChoiceBlock = document.getElementById('your-choice')
    compChoiceBlock = document.getElementById('comp-choice')

    const selectionButtons = document.querySelectorAll('.selection')
    selectionButtons.forEach ((button) => {
      button.addEventListener('click', function() {

        const userChoice = button.querySelector('img').getAttribute('alt');
        yourChoiceBlock.innerHTML = button.innerHTML;
        
        const computerChoice = getComputerChoice();
        compChoiceBlock.innerHTML = `<img src="${computerChoice}.jpeg" alt="${computerChoice}">`;

        const result = playRound(userChoice, computerChoice)
        updateResult(result)
      })
    })
  }
}


function playRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a Tie!"
  } else if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "rock" && computerChoice === "scissors")
  ) {
    return "You win!"
  } else {
    return "You lose!"
  }
}
  
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function updateResult(result) {
  const resultElement = document.getElementById('middle')
  resultElement.textContent = result;
}

game();
