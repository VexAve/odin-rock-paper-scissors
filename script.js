const toTitleCase = string => {
    return string[0].toUpperCase() + string.slice(1);
}

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

const buttons = document.getElementById("buttons");

buttons.addEventListener("click", event => {
    if (event.target.id !== "buttons") {
        const computerChoice = getComputerChoice();
        const humanChoice = event.target.id;
        console.log(humanChoice + computerChoice);
        playRound(humanChoice, computerChoice);
    }
});

const results = document.querySelector("#results p");
const humanScoreDisplay = document.getElementById("human-score");
const computerScoreDisplay = document.getElementById("computer-score");

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        results.textContent = "You win! " + toTitleCase(humanChoice) + " beats " + toTitleCase(computerChoice) + ".\n";
        humanScore++;
        humanScoreDisplay.textContent = humanScore;
    } else if (humanChoice === computerChoice) {
        results.textContent = "It's a tie!\n";
    } else {
        results.textContent = "You lose! " + toTitleCase(computerChoice) + " beats " + toTitleCase(humanChoice) + ".\n";
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }
}

