"use strict";

// The Odin Project Coding Project - Rock Paper Scissors Game

// 1. Create Variable with guesses
const guess = ["rock", "paper", "scissors"];

// 2. Create Function 'computerPlay that creates random guess for computer
function computerPlay() {
	return Math.floor(Math.random() * guess.length);
}
// 3. Create constant for Player and Computer Guess and Win Lose Statements
let computerSelection = guess[computerPlay()];
let playerSelection = "rock";
const playerLose = `${computerSelection} beats ${playerSelection}, YOU LOSE!`;
const playerWin = `${playerSelection} beats ${computerSelection}, YOU WIN!`;
const tie = `${playerSelection} and ${computerSelection} are equal...TIE!`;

// 4. Create Function 'playRound' for one round to compare Player and Computer Guesses
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
function game() {
	for (let i = 0; i < 5; i++) {
		computerPlay();
		let computerSelection = guess[computerPlay()];
		let playerSelection = prompt();
		playRound(playerSelection, computerSelection);
	}
}
game();
