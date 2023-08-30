
console.log("Welcome to Britteany's Rock Paper Scissors Game!");

function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*3)];
}
let computerChoice = getComputerChoice()
console.log(computerChoice)

var playerChoice = prompt("Choose rock, paper, or scissors");


console.log(playerChoice.toString().toLowerCase());
function playRound((playerChoice.toString().toLowerCase(), computerChoice)){
if (playerChoice.toString().toLowerCase() === computerChoice)
    alert("It's a tie!") 
else if (playerChoice.toString().toLowerCase() === 'rock' && computerChoice === 'paper')  
    alert("Paper beats rock, you lose") 
else if (playerChoice.toString().toLowerCase() === 'scissors' && computerChoice === 'rock')  
    alert("Rock beats scissors, you lose")  
else if (playerChoice.toString().toLowerCase() === 'paper' && computerChoice === 'scissors')  
    alert("Scissors beat paper, you lose")   
else if (playerChoice.toString().toLowerCase() === 'paper' && computerChoice === 'rock')  
    alert("You win! Paper beats rock")   
else if (playerChoice.toString().toLowerCase() === 'rock' && computerChoice === 'scissors')  
    alert("You win! Rock beats scissors")  
else if (playerChoice.toString().toLowerCase() === 'scissors' && computerChoice === 'paper')  
    alert("You win! Scissors beats paper")   
    } 


