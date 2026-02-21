// Method 1. This function generates a random choice for the computer in a game of rock-paper-scissors. 

// function getComputerChoice() {
//     const choices = ['rock', 'paper', 'scissors'];
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices[randomIndex];
// }

// console.log(getComputerChoice());

// Method 2. This function achieves the same result using a switch statement instead of an array.

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    switch (randomIndex) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            break;
    }
}

function getHumanChoice() {
    const userInput = prompt("Please enter rock, paper, or scissors:");
    return userInput.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;  
    for (let round = 1; round <= 5; round++) {   
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
        if (result === "You win!") {
            humanScore++;
        } else if (result === "Computer wins!") {
            computerScore++;
        }
    console.log(`Round ${round}: ${result} Human Score: ${humanScore}, 
                Computer Score: ${computerScore}`);
    }
    // Determine the overall winner after 5 rounds and return a message with the final scores.
        if (humanScore > computerScore) {
            return `Congratulations! You won the game ${humanScore}–${computerScore}!`;
        } else if (computerScore > humanScore) {
            return `Sorry, you lost the game ${humanScore}–${computerScore}. Better luck next time!`;
        } else {
            return `It's a tie game ${humanScore}–${computerScore}!`;
        }
    // This function determines the winner of a single round of rock-paper-scissors 
    // based on the choices made by the human and the computer.
    function playRound(humanChoice, computerChoice) {   
        if (humanChoice === computerChoice) {
            return "It's a tie!";
        }   else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
                (humanChoice === 'paper' && computerChoice === 'rock') ||
                (humanChoice === 'scissors' && computerChoice === 'paper')) {
            return "You win!";
        }   else {
            return "Computer wins!";
        }
    }
}

console.log(playGame());
