function computerPlay() {
    let possiblePlays = ['rock', 'scissors', 'paper'];
    let computerSelection = possiblePlays[Math.floor(Math.random() * possiblePlays.length)];

    console.log(`Computer chose: ${computerSelection}`);
    return computerSelection;
}

function playRound(computerSelection, playerSelection) {

    let winner;

    if (playerSelection === computerSelection) {
        console.log('Draw! Better luck next time!');
        return ["Draw! Better luck next time!", "None"];

    } else if (playerSelection === 'rock' && computerSelection == 'paper') {
        console.log('You lose! Paper beats Rock!');
        return ["You lose! Paper beats Rock!", "Computer"];

    } else if (playerSelection === 'rock' && computerSelection == 'scissors') {
        console.log('You win! Rock beats Scissors!');
        return ["You win! Rock beats Scissors!", "Player"];

    } else if (playerSelection === 'scissors' && computerSelection == 'rock') {
        console.log('You lose! Rock beats Scissors!');
        return ["You lose! Rock beats Scissors!", "Computer"];

    } else if (playerSelection === 'scissors' && computerSelection == 'paper') {
        console.log('You win! Scissors beats paper!');
        return ["You win! Scissors beats paper!", "Player"];

    } else if (playerSelection === 'paper' && computerSelection == 'rock') {
        console.log('You win! Paper beats Rock!');
        return ["You win! Paper beats Rock!", "Player"];

    } else if (playerSelection === 'paper' && computerSelection == 'scissors') {
        console.log('You lose! Scissors beats Paper!');
        return ["You lose! Scissors beats Paper!", "Computer"];
    }
}

function keepScore(value) {

    if (value === 'Computer') {
        computerWins += 1;
        playerLosses += 1;
        computerTally.textContent = `Computer W: ${computerWins}, L: ${computerLosses}, D: ${draws}`;
        playerTally.textContent = `Player W: ${playerWins}, L: ${playerLosses}, D: ${draws}`;
    } else if (value === "Player") {
        playerWins += 1;
        computerLosses += 1;
        computerTally.textContent = `Computer W: ${computerWins}, L: ${computerLosses}, D: ${draws}`;
        playerTally.textContent = `Player W: ${playerWins}, L: ${playerLosses}, D: ${draws}`;
    } else {
        draws += 1;
        computerTally.textContent = `Computer W: ${computerWins}, L: ${computerLosses}, D: ${draws}`;
        playerTally.textContent = `Player W: ${playerWins}, L: ${playerLosses}, D: ${draws}`;
    }

}

function whoWins(playerWins, computerWins) {
    if (playerWins === 5) {
        let winner = document.createElement('p');
        winner.textContent = 'You Win!!'
        body.appendChild(winner);

        return true;

    } else if (computerWins === 5) {
        let winner = document.createElement('p');
        winner.textContent = 'You lose!!'
        body.appendChild(winner);

        return true;
    }
}



//RPS UI portion

//intialize computer & player tally
// let playerWins = 0;
// let playerLosses = 0;
// let draws = 0;
// let computerWins = 0;
// let computerLosses = 0;

//create elements for scoreboard in DOM
// const body = document.querySelector('body');
// const div = document.createElement('div');
// div.textContent = "Scoreboard";
// const playerTally = document.createElement('p');
// playerTally.textContent = `Player W: ${playerWins}, L: ${playerLosses}, D: ${draws}`;
// const computerTally = document.createElement('p');
// computerTally.textContent = `Computer W: ${computerWins}, L: ${computerLosses}, D: ${draws}`


// div.appendChild(playerTally);
// div.appendChild(computerTally);
// body.appendChild(div);


// const rockButton = document.createElement("button");
// rockButton.textContent = "Rock";
// rockButton.addEventListener('click', function () {
//     console.log("Player chose: rock");
//     let results = playRound(computerPlay(), 'rock');
//     keepScore(results[1]);
//     let value = whoWins(playerWins, computerWins);


// });
// body.appendChild(rockButton);


// const paperButton = document.createElement("button");
// paperButton.textContent = "Paper";
// paperButton.addEventListener('click', function () {
//     console.log("Player chose: paper");
//     let results = playRound(computerPlay(), 'paper');
//     keepScore(results[1]);
//     let value = whoWins(playerWins, computerWins);


// });
// body.appendChild(paperButton);


// const scissorsButton = document.createElement("button");
// scissorsButton.textContent = "Scissors";
// scissorsButton.addEventListener('click', function () {
//     console.log("Player chose: scissors");
//     let results = playRound(computerPlay(), 'scissors');
//     keepScore(results[1]);
//     let value = whoWins(playerWins, computerWins);

// });
// body.appendChild(scissorsButton);

