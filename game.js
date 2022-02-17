function computerPlay() {
    let possiblePlays = ['rock', 'scissors', 'paper'];
    let computerSelection = possiblePlays[Math.floor(Math.random() * possiblePlays.length)];

    let computerMove = document.querySelector('#computerChose')

    computerMove.textContent = `Computer chose: ${computerSelection}`;
    return computerSelection;
}

function playRound(computerSelection, playerSelection) {

    let playerMove = document.querySelector('#player')
    playerMove.textContent = `You chose: ${playerSelection}`;
    let outcome = document.querySelector('#outcome');

    if (playerSelection === computerSelection) {
        outcome.textContent = "Draw! Better luck next time";
        return ["Draw! Better luck next time!", "None"];

    } else if (playerSelection === 'rock' && computerSelection == 'paper') {
        outcome.textContent = 'You lose! Paper beats Rock!';
        return ["You lose! Paper beats Rock!", "Computer"];

    } else if (playerSelection === 'rock' && computerSelection == 'scissors') {
        outcome.textContent = 'You win! Rock beats Scissors!';
        return ["You win! Rock beats Scissors!", "Player"];

    } else if (playerSelection === 'scissors' && computerSelection == 'rock') {
        outcome.textContent = 'You lose! Rock beats Scissors!';
        return ["You lose! Rock beats Scissors!", "Computer"];

    } else if (playerSelection === 'scissors' && computerSelection == 'paper') {
        outcome.textContent = 'You win! Scissors beats paper!';
        return ["You win! Scissors beats paper!", "Player"];

    } else if (playerSelection === 'paper' && computerSelection == 'rock') {
        outcome.textContent = 'You win! Paper beats Rock!';
        return ["You win! Paper beats Rock!", "Player"];

    } else if (playerSelection === 'paper' && computerSelection == 'scissors') {
        outcome.textContent = 'You lose! Scissors beats Paper!';
        return ["You lose! Scissors beats Paper!", "Computer"];
    }
}

function keepScore(value) {

    let scoreboard = document.querySelector('#scoreboard');

    if (value === 'Computer') {
        computerWins += 1;
        scoreboard.textContent = `Player Wins: ${playerWins}; Computer Wins: ${computerWins}; Draws: ${draws}`;

    } else if (value === "Player") {
        playerWins += 1;
        scoreboard.textContent = `Player Wins: ${playerWins}; Computer Wins: ${computerWins}; Draws: ${draws}`;

    } else {
        draws += 1;
        scoreboard.textContent = `Player Wins: ${playerWins}; Computer Wins: ${computerWins}; Draws: ${draws}`;

    }

}

function playAgain() {

    let scoreContainer = document.querySelector('#scoreContainer');
    let playAgainButton = document.createElement('button');
    playAgainButton.setAttribute('id', 'againButton');
    playAgainButton.textContent = 'Play Again';
    let exists = document.getElementById('#againButton');



}



//RPS UI portion

//intialize computer & player tally
let playerWins = 0;
let playerLosses = 0;
let draws = 0;
let computerWins = 0;
let computerLosses = 0;


const rockButton = document.querySelector("#rock");
rockButton.textContent = "Rock";
rockButton.addEventListener('click', function () {
    if (playerWins < 5 && computerWins < 5) {
        console.log("Player chose: rock");
        let results = playRound(computerPlay(), 'rock');
        keepScore(results[1]);
    }
    if (playerWins >= 5) {
        this.removeEventListener('click', arguments.callee);
        let outcome = document.querySelector('#outcome')
        outcome.textContent = 'Game Over! You beat the computer!';

    } else if (computerWins >= 5) {
        this.removeEventListener('click', arguments.callee);
        let outcome = document.querySelector('#outcome')
        outcome.textContent = 'Game Over! The computer beat you!';
    }


});
// body.appendChild(rockButton);


const paperButton = document.querySelector("#paper");
paperButton.textContent = "Paper";
paperButton.addEventListener('click', function () {
    if (playerWins < 5 && computerWins < 5) {
        console.log("Player chose: paper");
        let results = playRound(computerPlay(), 'paper');
        keepScore(results[1]);
        let value = whoWins(playerWins, computerWins);
    }
    if (playerWins >= 5) {
        this.removeEventListener('click', arguments.callee);
        let outcome = document.querySelector('#outcome')
        outcome.textContent = 'Game Over! You beat the computer!';

    } else if (computerWins >= 5) {
        this.removeEventListener('click', arguments.callee);
        let outcome = document.querySelector('#outcome')
        outcome.textContent = 'Game Over! The computer beat you!';
    }


});
// body.appendChild(paperButton);


const scissorsButton = document.querySelector("#scissors");
scissorsButton.textContent = "Scissors";
scissorsButton.addEventListener('click', function () {
    if (playerWins < 5 && computerWins < 5) {
        console.log("Player chose: scissors");
        let results = playRound(computerPlay(), 'scissors');
        keepScore(results[1]);
        let value = whoWins(playerWins, computerWins);
    }
    if (playerWins >= 5) {
        this.removeEventListener('click', arguments.callee);
        let outcome = document.querySelector('#outcome')
        outcome.textContent = 'Game Over! You beat the computer!';

    } else if (computerWins >= 5) {
        this.removeEventListener('click', arguments.callee);
        let outcome = document.querySelector('#outcome')
        outcome.textContent = 'Game Over! The computer beat you!';
    }



});
// body.appendChild(scissorsButton);

