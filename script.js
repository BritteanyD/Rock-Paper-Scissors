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

        const playerWins = document.querySelector('#playerWins');

        const computerWins = document.querySelector('#computerWins');

        const tie = document.querySelector('#tie');

        if (roundsPlayed === maxRounds) {

            if (playerScore > computerScore) {
                playerWins.textContent = 'You Won The Game!';
            }
            else if (playerScore < computerScore) {
                computerWins.textContent = 'You Lost The Game';
            }
            else {
                tie.textContent = "It's a tie!";
            };

            const gameOver = document.querySelector('#gameOver');
            gameOver.textContent = 'Game Over! Refresh Page to Play Again'

            playerChoice.forEach(button => {
                button.disabled = true
            });
        }




    })
});