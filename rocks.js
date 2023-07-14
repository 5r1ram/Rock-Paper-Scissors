//perfect code
function game() {
    for (let i=0; i < 5; i++) {
      let userChoice = prompt("choose one: rock , paper or scissors");
      let computerChoice = getComputerChoice();
  
      console.log(playRound(userChoice, computerChoice));
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
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    
    if (randomNumber === 0) {
      computerChoice = "rock";
    } else if (randomNumber === 1) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    }
    return computerChoice;
  }
  
  game();



//my code has some errors
/*function game() {
for (let i=0 ;i<5 ;i++);
    function playRound(playerSelection,computerSelection) {
        if (playerSelection === computerSelection) {
            return "It's a tie"
        } else if (
            (playerSelection == "Paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper") ||
            (playerSelection == "rock" && computerSelection == "scissors")
        ){
            return("You win!")
        } else {
            return("You lose!")
        }
    }

    const playerSelection = prompt()
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection,computerSelection))

    function getComputerChoice() {
        const randomNum = Math.floor(Math.random()*3);
        if (randomNum === 0) {
            return "rock";
        } else if (randomNum == 1) {
            return "paper";
        } else {
            return "scissors"
        }
    }
    console.log(i)
}

game();*/