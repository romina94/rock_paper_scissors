function getComputerChoice () {
    const choices = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound (playerSelection, computerSelection) {
    const resultTextContainer = document.querySelector('.result-text');
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
            resultTextContainer.appendChild(resultText);
            return [0, 1];
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||  
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock")
    ) {
            resultText.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
            resultTextContainer.appendChild(resultText);
            return [1, 0];
    } else {
        resultText.textContent = "Draw! " + playerSelection + " ties with " + computerSelection;
        resultTextContainer.appendChild(resultText);
        return [0, 0];
    }
}

function game () {
    let score = [];
    let player = 0;
    let computer = 0;
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const scores = document.querySelectorAll('h4');
            if (scores.length > 0) {
                scores.forEach((score) => {
                    score.remove();
                })
            }

            const final = document.querySelector('#finalText');
            if (final) {
                final.remove();
            }

            const computerSelection = getComputerChoice();
            const playerSelection = button.id;
            score = playRound(playerSelection, computerSelection); 
            player += score[0];
            computer += score[1];

            const resultContainer = document.querySelector('.result-container');

            const playerText = document.createElement('h4');
            playerText.textContent = "Player";
            const computerText = document.createElement('h4');
            computerText.textContent = "Computer";
            const playerScore = document.createElement('h4');
            playerScore.textContent = player;
            const computerScore = document.createElement('h4');
            computerScore.textContent = computer;

            resultContainer.appendChild(playerText);
            resultContainer.appendChild(computerText);
            resultContainer.appendChild(playerScore);
            resultContainer.appendChild(computerScore);

            if (player == 5) {
                const finalTextContainer = document.querySelector('.final-text');
                const finalText = document.createElement('h3');
                finalText.id = "finalText";
                finalText.textContent = "Congratulations! You are the winner!";
                finalTextContainer.appendChild(finalText);

                score = [];
                player = 0;
                computer = 0;
            }
            if (computer == 5) {
                const finalTextContainer = document.querySelector('.final-text');
                const finalText = document.createElement('h3');
                finalText.id = "finalText";
                finalText.textContent = "Better luck next time!";
                finalTextContainer.appendChild(finalText);

                score = [];
                player = 0;
                computer = 0;
            }
        });
    });
}

game();