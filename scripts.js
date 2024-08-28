let round = 5;
let computerScore = 0;
let humanScore = 0;

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

function getHumanChoice() {
  const enter = prompt(
    'Please enter your choice: "Rock", "Paper", "Scissors"'
  ).toLowerCase();
  if (enter === "rock" || enter === "paper" || enter === "scissors") {
    return enter;
  } else {
    alert("Please enter right choice!!!");
    return getHumanChoice();
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    alert(
      `Your choice - ${humanChoice}, computer choice - ${computerChoice} - DRAW!, [H: ${humanScore} | C: ${computerScore}]`
    );
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    alert(
      `Your choice - ${humanChoice}, computer choice - ${computerChoice} - YOU WIN!,  [H: ${humanScore} | C: ${computerScore}]`
    );
  } else {
    computerScore++;
    alert(
      `Your choice - ${humanChoice}, computer choice - ${computerChoice} - COMPUTER WINS!,  [H: ${humanScore} | C: ${computerScore}]`
    );
  }
}

function playGame() {
  for (let i = 0; i < round; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  if (humanScore > computerScore) {
    alert(
      `You have ${humanScore}, computer has ${computerScore}, YOU WIN THIS GAME!`
    );
  } else if (humanScore === computerScore) {
    alert(`You have ${humanScore}, computer has ${computerScore}, IT's DRAW!`);
  } else {
    alert(
      `You have ${humanScore}, computer has ${computerScore}, COMPUTER WIN THIS GAME!`
    );
  }

  let playAgain = confirm("Do you want to play again?");

  if (playAgain === true) {
    humanScore = 0;
    computerScore = 0;
    return playGame();
  }
}

playGame();
