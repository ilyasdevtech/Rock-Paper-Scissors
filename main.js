// Method 1. This function generates a random choice for the computer in a game of rock-paper-scissors. 
// It creates an array of possible choices, selects a random index, 
// and returns the corresponding choice.

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

console.log(getComputerChoice());
