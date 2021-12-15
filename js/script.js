"use strict";
// GAME LOGIC /////////////////////////////////////////////////////////////////////////////////////////////////

// GAME START CONDITION
let playerScore = 0;
let computerScore = 0;

// COMPUTER GUESS
const guess = ["Rock", "Paper", "Scissors"];
function computerPlay() {
    return guess[Math.floor(Math.random() * 3)];
}

// ROUND LOGIC//////////////

//Start Round
function startRound(playerSelect) {
    let playerSelection = playerSelect;
    let computerSelection = computerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
}
function playRound(playerSelection, computerSelection) {
    //Player Wins
    if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock")
    ) {
        gameMessage.textContent = `You Win: ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    }
    //Tie
    else if (playerSelection === computerSelection) {
        gameMessage.textContent = `You Tie: ${playerSelection} and ${computerSelection} are equal...`;

        //Lose
    } else {
        gameMessage.textContent = `You Lose: ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }
}
// // 7. Create Game Reset

// 7. Create loop to run game for 5 rounds
// function game() {
// 	for (let i = 0; i < 5; i++) {
// 		computerPlay();
// 		let computerSelection = guess[computerPlay()];
// 		let playerSelection = prompt();
// 		playRound(playerSelection, computerSelection);
// 	}
// }
// game();

// UI //////////////////////////////////////////////////////////////////

// UI ELEMENT SELECT METHODS
const playerRockBtn = document.getElementById("playerRockBtn");
const playerPaperBtn = document.getElementById("playerPaperBtn");
const playerScissorsBtn = document.getElementById("playerScissorsBtn");
const cpuRockBtn = document.getElementById("cpuRockBtn");
const cpuPaperBtn = document.getElementById("cpuPaperBtn");
const cpuScissorsBtn = document.getElementById("cpuScissorsBtn");
const pScore = document.getElementById("player__score");
const cScore = document.getElementById("cpu__score");
const gameMessage = document.getElementById("game__message");

// UI EVENT LISTENERS
playerRockBtn.addEventListener("click", () => startRound("Rock"));
playerPaperBtn.addEventListener("click", () => startRound("Paper"));
playerScissorsBtn.addEventListener("click", () => startRound("Scissors"));
