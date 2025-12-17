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

const choices = document.getElementById("choices");

choices.addEventListener("click", event => {
    if (event.target.tagName === "BUTTON") {
        const computerChoice = getComputerChoice();
        const humanChoice = event.target.id;
        console.log(humanChoice + computerChoice);
        playRound(humanChoice, computerChoice);
    }
});

let humanScore = 0;
let computerScore = 0;


const playRound = (humanChoice, computerChoice) => {
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log("You win! " + toTitleCase(humanChoice) + " beats " + toTitleCase(computerChoice) + ".\n");
        humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log("It's a tie!\n");
    } else {
        console.log("You lose! " + toTitleCase(computerChoice) + " beats " + toTitleCase(humanChoice) + ".\n");
    }
}

