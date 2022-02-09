function computerPlay() {
    let possiblePlays = ['rock', 'scissors', 'paper'];
    let computerSelection = possiblePlays[Math.floor(Math.random() * possiblePlays.length)];
    return computerSelection;
}

function playerPlay() {
    let playerSelection = prompt('Please enter rock, paper, or scissors:');
    return playerSelection;
}