function computerPlay() {
    let possiblePlays = ['rock', 'scissors', 'paper'];
    let computerSelection = possiblePlays[Math.floor(Math.random() * possiblePlays.length)];
    return computerSelection;
}

function playerPlay() {
    let valid = true;
    let playerSelection;

    while (valid) {
        playerSelection = prompt('Please enter rock, paper, or scissors:');

        if (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors')) {
            console.log("Invalid play. Try again.");
        } else {
            valid = false;
        }
    }

    return playerSelection;
}

function playRound(computerSelection, playerSelection) {

    let winner;

    if (playerSelection === computerSelection) {
        return ["Draw! Better luck next time!", "None"];

    } else if (playerSelection === 'rock' && computerSelection == 'paper') {
        return ["You lose! Paper beats Rock!", "Computer"];

    } else if (playerSelection === 'rock' && computerSelection == 'scissors') {
        return ["You win! Rock beats Scissors!", "Player"];

    } else if (playerSelection === 'scissors' && computerSelection == 'rock') {
        return ["You lose! Rock beats Scissors!", "Computer"];

    } else if (playerSelection === 'scissors' && computerSelection == 'paper') {
        return ["You win! Scissors beats paper!", "Player"];

    } else if (playerSelection === 'paper' && computerSelection == 'rock') {
        return ["You win! Paper beats Rock!", "Player"];

    } else if (playerSelection === 'paper' && computerSelection == 'scissors') {
        return ["You lose! Scissors beats Paper!", "Computer"];
    }
}

function game(rounds) {
    let computerWins = 0;
    let playerWins = 0;
    let ties = 0;

    for (let i = 0; i < rounds; i++) {

        let computerSelection = computerPlay();
        let playerSelection = playerPlay();

        console.log(`Round ${i + 1}`);
        console.log(`Computer play: ${computerSelection}`);
        console.log(`Your play: ${playerSelection}`);

        let result = playRound(computerSelection, playerSelection);

        console.log(`${result[0]}`);

        if (result[1] === "Computer") {
            computerWins += 1;
        } else if (result[1] === "Player") {
            playerWins += 1;
        } else {
            ties += 1;
        }
    }

    console.log(`Computer Wins: ${computerWins}, Player Wins: ${playerWins}, Ties: ${ties}`);
    return;
}

let rounds = prompt("Number of rounds:");
game(rounds);