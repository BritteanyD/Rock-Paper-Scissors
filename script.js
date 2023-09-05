
console.log("Welcome to Britteany's Rock Paper Scissors Game!");
alert("Practice Round!")

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}
const computerChoice = getComputerChoice();
console.log("computerChoice", computerChoice)

const playerChoice = prompt("Choose rock, paper, or scissors")
    .toString()
    .toLowerCase();

console.log("playerChoice", playerChoice);

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice)
        return ("It's a tie!")
    else if (playerChoice === 'rock' && computerChoice === 'paper')
        return ("Paper beats rock, you lose")
    else if (playerChoice === 'scissors' && computerChoice === 'rock')
        return ("Rock beats scissors, you lose")
    else if (playerChoice === 'paper' && computerChoice === 'scissors')
        return ("Scissors beat paper, you lose")
    else if (playerChoice === 'paper' && computerChoice === 'rock')
        return ("You win! Paper beats rock")
    else if (playerChoice === 'rock' && computerChoice === 'scissors')
        return ("You win! Rock beats scissors")
    else if (playerChoice === 'scissors' && computerChoice === 'paper')
        return ("You win! Scissors beats paper")
}
alert(playRound(playerChoice, computerChoice))
console.log(playRound(playerChoice, computerChoice));

let playerScore = 0;
let computerScore = 0;
console.log("playerScore", playerScore)
console.log("computerScore", computerScore)

function game() {
    const computerChoice1 = getComputerChoice();
    console.log("computerChoice1", computerChoice1)
    const playerChoice1 = prompt("Round 1: Choose rock, paper, or scissors")
        .toString()
        .toLowerCase();
    console.log("playerChoice1", playerChoice1);
    const result1 = playRound(playerChoice1, computerChoice1)
    console.log(result1)
    alert(result1);

    if (result1.includes("win")) {
        playerScore++;
    } else if (result1.includes("lose")) {
        computerScore++;
    }
    console.log("playerScore", playerScore)
    console.log("computerScore", computerScore)

    const computerChoice2 = getComputerChoice();
    console.log("computerChoice2", computerChoice2)
    const playerChoice2 = prompt("Round 2: Choose rock, paper, or scissors")
        .toString()
        .toLowerCase();
    console.log("playerChoice2", playerChoice2);
    const result2 = playRound(playerChoice2, computerChoice2)
    console.log(result2)
    alert(result2);

    if (result2.includes("win")) {
        playerScore++;
    } else if (result2.includes("lose")) {
        computerScore++;
    }
    console.log("playerScore", playerScore)
    console.log("computerScore", computerScore)

    const computerChoice3 = getComputerChoice();
    console.log("computerChoice3", computerChoice3)
    const playerChoice3 = prompt("Round 3: Choose rock, paper, or scissors")
        .toString()
        .toLowerCase();
    console.log("playerChoice3", playerChoice3);
    const result3 = playRound(playerChoice3, computerChoice3)
    console.log(result3)
    alert(result3);

    if (result3.includes("win")) {
        playerScore++;
    }
    else if (result3.includes("lose")) {
        computerScore++;
    }
    console.log("playerScore", playerScore)
    console.log("computerScore", computerScore)

    const computerChoice4 = getComputerChoice();
    console.log("computerChoice4", computerChoice4)
    const playerChoice4 = prompt("Round 4: Choose rock, paper, or scissors")
        .toString()
        .toLowerCase();
    console.log("playerChoice4", playerChoice4);
    const result4 = playRound(playerChoice4, computerChoice4)
    console.log(result4)
    alert(result4);

    if (result4.includes("win")) {
        playerScore++;
    }
    else if (result4.includes("lose")) {
        computerScore++;
    }
    console.log("playerScore", playerScore)
    console.log("computerScore", computerScore)

    const computerChoice5 = getComputerChoice();
    console.log("computerChoice5", computerChoice5)
    const playerChoice5 = prompt("Round 5: Choose rock, paper, or scissors")
        .toString()
        .toLowerCase();
    console.log("playerChoice5", playerChoice5);
    const result5 = playRound(playerChoice5, computerChoice5)
    console.log(result5)
    alert(result5);

    if (result5.includes("win")) {
        playerScore++;
    }
    else if (result5.includes("lose")) {
        computerScore++;
    }
    console.log("playerScore", playerScore)
    console.log("computerScore", computerScore)


    if (playerScore > computerScore) {
        console.log("You won the game!")
        alert("You won the game!");
    }
    else if (playerScore < computerScore) {
        console.log("You lost the game")
        alert("You lost the game");
    }
    else {
        console.log("Tie!")
        alert("Tie!")
    }
}
game()
