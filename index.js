let score = [];
let player = 0;
let computer = 0;

const gameImgs = document.querySelector('.game');
const buttons = document.querySelectorAll('button');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');
const choiceImgs = document.querySelector('.choice-images');
const playerImg = document.getElementById('playerChoice');
const computerImg = document.getElementById('computerChoice');
const resultContainer = document.querySelector('.result-container');
const playerResult = document.getElementById('player-result');
const computerResult = document.getElementById('computer-result');
const finishModal = document.getElementById('finish-modal');
const finishModalMessage = document.getElementById('finish-modal-message');
const playAgain = document.getElementById('play-again');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const playerSelection = button.id;
        score = playRound(playerSelection, computerSelection); 
        player += score[0];
        computer += score[1];

        choiceImgs.style.display = "block";
        choiceImgs.classList.add('animate');
        playerImg.src = 'images/' + playerSelection + '.png';
        computerImg.src = 'images/' + computerSelection + '.png';

        playerResult.textContent = player;
        computerResult.textContent = computer;

        if (player == 5) {
            finishModalMessage.textContent = "Congratulations! You are the winner!";
        }

        if (computer == 5) {
            finishModalMessage.textContent = "Better luck next time!";
        }

        if (player == 5 || computer == 5) {
            score = [];
            player = 0;
            computer = 0;

            gameImgs.style.display = "none";
            resultTitle.style.display = "none";
            resultDescription.style.display = "none";
            choiceImgs.style.display = "none";
            resultContainer.style.display = "none";
            playerResult.textContent = player;
            computerResult.textContent = computer;
            finishModal.style.display = "block";
        }
    });
});

function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound (playerSelection, computerSelection) {
    if (
        (playerSelection === "Rock" && computerSelection === "Paper") ||  
        (playerSelection === "Paper" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Rock")
        ) {
            resultTitle.textContent = "You lose!";
            resultDescription.textContent = computerSelection + " beats " + playerSelection;
            return [0, 1];
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||  
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock")
    ) {
            resultTitle.textContent = "You win!";
            resultDescription.textContent = playerSelection + " beats " + computerSelection;
            return [1, 0];
    } else {
        resultTitle.textContent = "It's a tie!";
        resultDescription.textContent = playerSelection + " ties with " + computerSelection;
        return [0, 0];
    }
}

playAgain.addEventListener('click', () => {
    gameImgs.style.display = "flex";
    resultTitle.textContent = "Choose...";
    resultTitle.style.display = "block";
    resultDescription.textContent = "First to 5 wins!";
    resultDescription.style.display = "block";
    resultContainer.style.display = "grid";
    finishModal.style.display = "none";
});