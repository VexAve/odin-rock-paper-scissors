const getComputerChoice = () => {
    const choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

const getHumanChoice = () => {
    return prompt();
}

const toTitleCase = string => {
    return string[0].toUpperCase() + string.slice(1);
}

const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

    const playRound = (humanChoice, computerChoice) => {
        humanChoice = humanChoice.toLowerCase();
        if (
            (humanChoice === "rock" && computerChoice == "scissors") ||
            (humanChoice === "scissors" && computerChoice == "paper") ||
            (humanChoice === "paper" && computerChoice == "rock")
        ) {
            console.log("You win! " + humanChoice.toTitleCase() + " beats " + computerChoice.toTitleCase() + ".\n");
            humanScore++;
        } else if (humanChoice === computerChoice) {
            console.log("It's a tie!\n");
        } else {
            console.log("You lose! " + computerChoice.toTitleCase() + " beats " + humanChoice.toTitleCase() + ".\n");
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Human: ${humanScore}\nComputer: ${computerScore}`);
    }    
}