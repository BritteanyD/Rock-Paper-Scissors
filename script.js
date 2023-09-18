alert("Welcome to Britteany's Rock Paper Scissors Game!");

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return ("It's a tie!")
    }
    else if (playerChoice === 'rock' && computerChoice === 'paper') {
        computerScore++
        return ("Paper beats rock, you lose");
    }
    else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++
        return ("Rock beats scissors, you lose")
    }
    else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++
        return ("Scissors beat paper, you lose")
    }
    else if (playerChoice === 'paper' && computerChoice === 'rock') {
        playerScore++
        return ("You win! Paper beats rock")
    }
    else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        playerScore++
        return ("You win! Rock beats scissors")
    }
    else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        playerScore++
        return ("You win! Scissors beats paper")
    }
}

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let maxRounds = 5;
function game() {
    const computerChoice1 = getComputerChoice();
    const playerChoice1 = prompt("Round 1: Choose rock, paper, or scissors")
        .toString()
        .toLowerCase();
    const result1 = playRound(playerChoice1, computerChoice1)
    alert(result1);

    if (result1.includes("win")) {
        playerScore++;
    } else if (result1.includes("lose")) {
        computerScore++;
    }
    console.log("playerScore", playerScore)
    console.log("computerScore", computerScore)

    const computerChoice2 = getComputerChoice();
    const playerChoice2 = prompt("Round 2: Choose rock, paper, or scissors")
        .toString()
        .toLowerCase();
    const result2 = playRound(playerChoice2, computerChoice2)
    alert(result2);

    if (result2.includes("win")) {
        playerScore++;
    } else if (result2.includes("lose")) {
        computerScore++;
    }
    console.log("playerScore", playerScore)
    console.log("computerScore", computerScore)

    const computerChoice3 = getComputerChoice();
    const playerChoice3 = prompt("Round 3: Choose rock, paper, or scissors")
        .toString()
        .toLowerCase();
    const result3 = playRound(playerChoice3, computerChoice3)
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
    const playerChoice4 = prompt("Round 4: Choose rock, paper, or scissors")
        .toString()
        .toLowerCase();
    const result4 = playRound(playerChoice4, computerChoice4)
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
    const playerChoice5 = prompt("Round 5: Choose rock, paper, or scissors")
        .toString()
        .toLowerCase();
    const result5 = playRound(playerChoice5, computerChoice5)
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
/**TO DO
 * Display game winner
 * Make it pretty
 * (Replace everything with winner message and refresh page to play again)
 */
let playerChoice = document.querySelectorAll('button');
playerChoice.forEach((button) => {

    button.addEventListener('click', function () {
        const display = document.querySelector('#display');

        const result = playRound(button.id, getComputerChoice())
        roundsPlayed++
        display.textContent = result;

        const playerPoint = document.querySelector('#playerPoint');
        playerPoint.textContent = playerScore;

        const computerPoint = document.querySelector('#computerPoint');
        computerPoint.textContent = computerScore;

        if (roundsPlayed === maxRounds) {
            const gameOver = document.querySelector('#gameOver');
            gameOver.textContent = 'Game Over!'

            playerChoice.forEach(button => {
                button.disabled = true
            });
        }




    })
});