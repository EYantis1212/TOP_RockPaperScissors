"use strict";
// GAME LOGIC /////////////////////////////////////////////////////////////////////////////////////////////////

// GAME START CONDITION
let playerScore = 0;
let computerScore = 0;

// COMPUTER GUESS
const guess = ["rock", "paper", "scissors"];
function computerPlay() {
    return Math.floor(Math.random() * guess.length);
}
let computerSelection = guess[computerPlay()];

// PLAYER GUESS
let playerSelection = "";

// ROUND MESSAGES
const playerLose = `${computerSelection} beats ${playerSelection}, YOU LOSE!`;
const playerWin = `${playerSelection} beats ${computerSelection}, YOU WIN!`;
const tie = `${playerSelection} and ${computerSelection} are equal...TIE!`;

// ROUND LOGIC
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection == "scissors") {
        return console.log(playerWin);
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return console.log(playerWin);
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return console.log(playerWin);
    } else if (playerSelection == computerSelection) {
        return console.log(tie);
    } else return console.log(playerLose);
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
const pScore = document.getElementsByClassName("player__score");
const cScore = document.getElementsByClassName("cpu__score");
const gameMessage = document.getElementsByClassName("game__message");

// UI EVENT LISTENERS
playerRockBtn.addEventListener("click", function () {
    playerSelection = "rock";
});
playerPaperBtn.addEventListener("click", function () {
    playerSelection = "paper";
});
playerScissorsBtn.addEventListener("click", function () {
    playerSelection = "scissors";
});
