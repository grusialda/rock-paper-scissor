function getcomputerChoice() {
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

// function getHumanChoice() {
//   return prompt("Enter your choice", "Rock, Paper, Scissor").toLowerCase();
// }

let humanScore = 0;
let computerScore = 0;
