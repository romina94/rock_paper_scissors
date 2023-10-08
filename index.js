function getComputerChoice () {
    const choices = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    if (!(playerSelection === "Rock" || playerSelection === "Paper" || playerSelection === "Scissors")) {
        alert("Invalid Input");
        return [0, 0];
    } else {
        if (
            (playerSelection === "Rock" && computerSelection === "Paper") ||  
            (playerSelection === "Paper" && computerSelection === "Scissors") ||
            (playerSelection === "Scissors" && computerSelection === "Rock")
           ) {
                alert("You Lose! " + computerSelection + " beats " + playerSelection);
                return [0, 1];
        } else if (
            (playerSelection === "Rock" && computerSelection === "Scissors") ||  
            (playerSelection === "Scissors" && computerSelection === "Paper") ||
            (playerSelection === "Paper" && computerSelection === "Rock")
        ) {
                alert("You Win! " + playerSelection + " beats " + computerSelection);
                return [1, 0];
        } else {
            alert("Draw! " + playerSelection + " ties with " + computerSelection);
            return [0, 0];
        }
    }
}

function game () {
    let score = [];
    let wins = 0;
    let losses = 0;
    let i = 1;
    while (i < 6) {
        const playerSelection = prompt("Choose: Rock, Paper or Scissors?");
        const computerSelection = getComputerChoice();
        score = playRound(playerSelection, computerSelection); 
        wins += score[0];
        losses += score[1]; 
        alert("Wins: " + wins + "\nLosses: " + losses);

        if (i == 5) {
            if (wins > losses) {
                alert("Congratulations! You are the winner!");
            } else if (wins == losses) {
                alert("It's a draw!");
            } else {
                alert("Better luck next time!");
            }
        }

        i++;
    }
}

game();