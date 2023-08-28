
console.log("Welcome to Britteany's Rock Paper Scissors Game!");

function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*3)];
}
let x = getComputerChoice()
console.log(x)

