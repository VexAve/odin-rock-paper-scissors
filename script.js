const getComputerChoice = () => {
    const choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "raper";
    } else {
        return "scissors";
    }
}

const getHumanChoice = () => {
    return prompt();
}

console.log(getComputerChoice());
console.log(getHumanChoice());