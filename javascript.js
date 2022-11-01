function getComputerChoice() {
    let choice;
    choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "Rock"
    } else {
        if (choice == 1) {
            return "Paper"
        } else {
            if (choice == 2) {
                return "Scissors"
            } 
        }
    }
}

function capitalize(word) {
    return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    let win, lose = false;
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            win = true
        }
        if (computerSelection == "paper") {
            lose = true
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            win = true
        }
        if (computerSelection == "scissors") {
            lose = true
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            win = true
        }
        if (computerSelection == "rock") {
            lose = true
        }
    }
    if (win) {
        return "You Win! " + capitalize(playerSelection) + " beats " + capitalize(computerSelection)
    } else {
        if (lose) {
            return "You Lose! " + capitalize(computerSelection) + " beats " + capitalize(playerSelection)
        } else {
            return "It's a tie..."
        }
    }
}

function game() {
    for (let i=0; i < 5; i++) {
        console.log(playRound(prompt("Please enter your weapon of choice"), getComputerChoice()))
    }
}

game()

