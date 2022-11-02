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

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()
    let result = 0;
    if (playerChoice == "rock") {
        if (computerChoice == "scissors") {
            result = 1
        }
        if (computerChoice == "paper") {
            result = -1
        }
    }
    if (playerChoice == "paper") {
        if (computerChoice == "rock") {
            result = 1
        }
        if (computerChoice == "scissors") {
            result = -1
        }
    }
    if (playerChoice == "scissors") {
        if (computerChoice == "paper") {
            result = 1
        }
        if (computerChoice == "rock") {
            result = -1
        }
    }
    return result
}

function logRoundResult(result, playerChoice, computerChoice) {
    if (result == 0) {
        console.log("It's a tie..");
    } else {
        if (result == 1) {
            console.log("You Win! " + capitalize(playerChoice) + " beats " + capitalize(computerChoice));
        }
        if (result == -1) {
            console.log("You Lose! " + capitalize(computerChoice) + " beats " + capitalize(playerChoice));
        }
    }
}

function game() {
    let sum = 0;
    for (let i=0; i < 5; i++) {
        let playerChoice, computerChoice, result;
        playerChoice = prompt("Please enter your weapon of choice");
        computerChoice = getComputerChoice();
        result = playRound(playerChoice, computerChoice);
        logRoundResult(result, playerChoice, computerChoice);
        sum += result;
    }
    if (sum > 0) {
        console.log("You've won!");
    } else {
        if (sum < 0) {
            console.log("You've lost...");
        } else {
            console.log("It was a tie. Better luck next time!")
        }
    }
}

game()

