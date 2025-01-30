function getComputerChoice() {
  if (Math.random() >= 0.3) {
    return "rock";
  } else if (Math.random() >= 0.6) {
    return "scissor";
  } else {
    return "paper";
  }
}
let getHumanChoice = prompt(
  "Enter your choice",
  "Rock, Paper, Scissor"
).toLowerCase();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "scissor" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    console.log(
      `You win!!.. Your score is ${humanScore}. Computer score is ${computerScore}`
    );
  } else if (
    (humanChoice === "rock" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "scissor") ||
    (humanChoice === "paper" && computerChoice === "paper")
  ) {
    console.log(
      `Draw!!!.. Your score is ${humanScore}. Computer score is ${computerScore}`
    );
  } else {
    computerScore++;
    console.log(
      `You lose!!.. Your score is ${humanScore}. Computer score is ${computerScore}`
    );
  }
}
const humanSelection = getHumanChoice;
console.log(humanSelection);
const computerSelection = getComputerChoice();
console.log(computerSelection);
playRound(humanSelection, computerSelection);
