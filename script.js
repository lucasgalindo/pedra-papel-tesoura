function getComputerChoice() {

    const choices = ["Pedra", "Papel", "Tesoura"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];

}

function getHumanChoice() {

    let choice = prompt("Digite sua escolha (Pedra, papel ou tesoura): ");
    return choice[0].toUpperCase() + choice.slice(1).toLowerCase();

}

function playGame() {

    let i = 1;
    let humanScore = 0;
    let computerScore = 0;

    while (i <= 5) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        if (humanSelection == computerSelection) {
            console.log("Deu empate.");
        }

        else if (humanSelection == "Pedra" && computerSelection == "Tesoura") {
            console.log("Humano ganhou.");
            humanScore++;
        }

        else if (humanSelection == "Tesoura" && computerSelection == "Papel") {
            console.log("Humano ganhou.");
            humanScore++;
        }

        else if (humanSelection == "Papel" && computerSelection == "Pedra") {
            console.log("Humano ganhou.");
            humanScore++;
        } else {
            console.log("Computador ganhou");
            computerScore++;
        }

        i++;
    }

    if (humanScore > computerScore) {
        console.log("Humano venceu a disputa");
    } else if (computerScore > humanScore) {
        console.log("Pc venceu a disputa");
    } else {
        console.log("Deu empate.");
    }
}

playGame();