
console.log("Welcome to Britteany's Rock Paper Scissors Game!");

function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*3)];
}
let computerChoice = getComputerChoice()
console.log(computerChoice)

var playerChoice = prompt("Choose rock, paper, or scissors");
console.log(playerChoice)



if (playerChoice === computerChoice){
    alert("It's a tie!")   
    } 



function playRound(playerChoice, computerChoice){
    
}
