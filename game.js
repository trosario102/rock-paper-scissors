function computerPlay() {
    let possiblePlays = ['rock', 'scissors', 'paper'];
    let computerSelection = possiblePlays[Math.floor(Math.random() * possiblePlays.length)];
    return computerSelection;
}

function playerPlay() {
    let playerSelection = prompt('Please enter rock, paper, or scissors:');
    return playerSelection;
}

function playRound(computerSelection, playerSelection) {

    if (playerSelection.toLowerCase() !== 'rock' || playerSelection.toLowerCase() !== 'paper' || playerSelection.toLowerCase() !== 'scissors') {
        return "Invalid play. Please try again";

    } else if (playerSelection.toLowerCase() === computerSelection) {
        return "Draw! Better luck next time!";

    } else if (playerSelection.toLocaleLowerCase() === 'rock' && computerSelection == 'paper') {
        return "You lose! Paper beats Rock!";

    } else if (playerSelection.toLocaleLowerCase() === 'rock' && computerSelection == 'scissors') {
        return "You win! Rock beats Scissors!";

    } else if (playerSelection.toLocaleLowerCase() === 'scissors' && computerSelection == 'rock') {
        return "You lose! Rock beats Scissors!";

    } else if (playerSelection.toLocaleLowerCase() === 'scissors' && computerSelection == 'paper') {
        return "You win! Scissors beats paper!";

    } else if (playerSelection.toLocaleLowerCase() === 'paper' && computerSelection == 'rock') {
        return "You win! Paper beats Rock!";

    } else if (playerSelection.toLocaleLowerCase() === 'paper' && computerSelection == 'scissors') {
        return "You lose! Scissors beats Paper!";
    }
}