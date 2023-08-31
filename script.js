
console.log("Welcome to Britteany's Rock Paper Scissors Game!");

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}
let computerChoice = getComputerChoice()
console.log("computerChoice", computerChoice)

var playerChoice = prompt("Choose rock, paper, or scissors")
    .toString()
    .toLowerCase();

console.log("playerChoice", playerChoice);
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice)
        alert("It's a tie!")
    else if (playerChoice === 'rock' && computerChoice === 'paper')
        alert("Paper beats rock, you lose")
    else if (playerChoice === 'scissors' && computerChoice === 'rock')
        alert("Rock beats scissors, you lose")
    else if (playerChoice === 'paper' && computerChoice === 'scissors')
        alert("Scissors beat paper, you lose")
    else if (playerChoice === 'paper' && computerChoice === 'rock')
        alert("You win! Paper beats rock")
    else if (playerChoice === 'rock' && computerChoice === 'scissors')
        alert("You win! Rock beats scissors")
    else if (playerChoice === 'scissors' && computerChoice === 'paper')
        alert("You win! Scissors beats paper")
}

playRound(playerChoice, computerChoice);


