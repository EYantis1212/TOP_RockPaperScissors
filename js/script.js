"use strict";
// GAME LOGIC /////////////////////////////////////////////////////////////////////////////////////////////////

// GAME START CONDITION
let playerScore = 0;
let computerScore = 0;

function newGame() {
    modal.classList.remove("win");
    modal.classList.remove("lose");
    cpuRockBtn.classList.remove("cpu__choice");
    cpuPaperBtn.classList.remove("cpu__choice");
    cpuScissorsBtn.classList.remove("cpu__choice");
    playerRockBtn.classList.remove("cpu__choice");
    playerPaperBtn.classList.remove("cpu__choice");
    playerScissorsBtn.classList.remove("cpu__choice");
    playerScore = 0;
    computerScore = 0;
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    modal.classList.add("hidden");
    main.classList.remove("hidden");
    gameMessage.classList.remove("hidden");
    gameMessage.textContent = "";
}

// COMPUTER GUESS
const guess = ["Rock", "Paper", "Scissors"];
function computerPlay() {
    return guess[Math.floor(Math.random() * 3)];
}

// ROUND LOGIC//////////////

//Start Round
function startRound(playerSelect) {
    cpuRockBtn.classList.remove("cpu__choice");
    cpuPaperBtn.classList.remove("cpu__choice");
    cpuScissorsBtn.classList.remove("cpu__choice");
    playerRockBtn.classList.remove("cpu__choice");
    playerPaperBtn.classList.remove("cpu__choice");
    playerScissorsBtn.classList.remove("cpu__choice");
    let playerSelection = playerSelect;
    let computerSelection = computerPlay();
    cpuAnimation(computerSelection);
    playerAnimation(playerSelection);
    playRound(playerSelection, computerSelection);
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
}
//Play Round
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
    winCheck();
}
//Win Check Function
function winCheck() {
    if (playerScore === 5) {
        modal.classList.remove("hidden");
        modal.classList.add("win");
        main.classList.add("hidden");
        gameMessage.textContent = "";
        gameMessage.classList.add("hidden");
        winMessage.textContent = `You Win the Game! ${playerScore} to ${computerScore}`;
    } else if (computerScore === 5) {
        modal.classList.remove("hidden");
        modal.classList.add("lose");
        main.classList.add("hidden");
        gameMessage.classList.add("hidden");
        gameMessage.textContent = "";
        winMessage.textContent = `You Lose the Game! ${playerScore} to ${computerScore}`;
    } else return;
}
// ANIMATION /////////////////////////
//Computer Choice Animation
function cpuAnimation(computerSelection) {
    if (computerSelection === "Rock") {
        cpuRockBtn.classList.add("cpu__choice");
    }
    if (computerSelection === "Paper") {
        cpuPaperBtn.classList.add("cpu__choice");
    }
    if (computerSelection === "Scissors") {
        cpuScissorsBtn.classList.add("cpu__choice");
    }
}
function playerAnimation(playerSelection) {
    if (playerSelection === "Rock") {
        playerRockBtn.classList.add("cpu__choice");
    }
    if (playerSelection === "Paper") {
        playerPaperBtn.classList.add("cpu__choice");
    }
    if (playerSelection === "Scissors") {
        playerScissorsBtn.classList.add("cpu__choice");
    }
}

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
const modal = document.getElementById("modal");
const main = document.getElementById("main");
const winMessage = document.getElementById("win_message");
const newGameButton = document.getElementById("newgame");

// UI EVENT LISTENERS
playerRockBtn.addEventListener("click", () => startRound("Rock"));
playerPaperBtn.addEventListener("click", () => startRound("Paper"));
playerScissorsBtn.addEventListener("click", () => startRound("Scissors"));
newGameButton.addEventListener("click", () => newGame());
