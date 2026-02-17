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

console.log(getComputerChoice());

// Write a function that prompts the user to enter their choice of rock, paper, or scissors, 
// and returns the user's input.

function getHumanChoice() {
    const userInput = prompt("Please enter rock, paper, or scissors:");

}

console.log(getHumanChoice());


