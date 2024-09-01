let round = 5;
let computerScore = 0;
let humanScore = 0;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const scoreDiv = document.getElementById("score");

function getComputerChoice() {
  let choice = Math.random();

  if (choice <= 0.333) {
    return "paper";
  } else if (choice > 0.333 && choice <= 0.666) {
    return "scissors";
  } else {
    return "rock";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    scoreDiv.textContent = `Your choice - ${humanChoice}, computer choice - ${computerChoice} - DRAW!, [H: ${humanScore} | C: ${computerScore}]`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    scoreDiv.textContent = `Your choice - ${humanChoice}, computer choice - ${computerChoice} - YOU WIN!,  [H: ${humanScore} | C: ${computerScore}]`;
  } else {
    computerScore++;
    scoreDiv.textContent = `Your choice - ${humanChoice}, computer choice - ${computerChoice} - COMPUTER WINS!,  [H: ${humanScore} | C: ${computerScore}]`;
  }
}

rockButton.addEventListener("click", () =>
  playRound("rock", getComputerChoice())
);
paperButton.addEventListener("click", () =>
  playRound("paper", getComputerChoice())
);
scissorsButton.addEventListener("click", () =>
  playRound("scissors", getComputerChoice())
);

// function playGame() {
//   for (let i = 0; i < round; i++) {
//     let humanSelection = getHumanChoice();
//     let computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
//   }

//   if (humanScore > computerScore) {
//     alert(
//       `You have ${humanScore}, computer has ${computerScore}, YOU WIN THIS GAME!`
//     );
//   } else if (humanScore === computerScore) {
//     alert(`You have ${humanScore}, computer has ${computerScore}, IT's DRAW!`);
//   } else {
//     alert(
//       `You have ${humanScore}, computer has ${computerScore}, COMPUTER WIN THIS GAME!`
//     );
//   }

//   let playAgain = confirm("Do you want to play again?");

//   if (playAgain === true) {
//     humanScore = 0;
//     computerScore = 0;
//     return playGame();
//   }
// }

// playGame();
