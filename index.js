function getComputerChoice () {
    const choices = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound (playerSelection, computerSelection) {
    const resultContainer = document.querySelector('.result-container');
    const result = document.querySelector('#result');
    if (result) {
        result.remove();
    }
    const resultText = document.createElement('h2');
    resultText.id = "result";

    if (
        (playerSelection === "Rock" && computerSelection === "Paper") ||  
        (playerSelection === "Paper" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Rock")
        ) {
            resultText.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
            resultContainer.appendChild(resultText);
            return [0, 1];
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||  
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock")
    ) {
            resultText.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
            resultContainer.appendChild(resultText);
            return [1, 0];
    } else {
        resultText.textContent = "Draw! " + playerSelection + " ties with " + computerSelection;
        resultContainer.appendChild(resultText);
        return [0, 0];
    }
}

function game () {
    let score = [];
    let wins = 0;
    let losses = 0;
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const computerSelection = getComputerChoice();
            const playerSelection = button.id;
            score = playRound(playerSelection, computerSelection); 
            wins += score[0];
            losses += score[1]; 
            alert("Wins: " + wins + "\nLosses: " + losses);

            if (wins == 5) {
                alert("Congratulations! You are the winner!");
                score = [];
                wins = 0;
                losses = 0;
            }
            if (losses == 5) {
                alert("Better luck next time!");
                score = [];
                wins = 0;
                losses = 0;
            }
        });
    });
}

game();