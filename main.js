// Method 1. This function generates a random choice for the computer in a game of rock-paper-scissors. 
// It creates an array of possible choices, selects a random index, 
// and returns the corresponding choice.

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
    const humanScore = 0;
    const computerScore = 0;  
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

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    console.log(result);
}

console.log(playGame());