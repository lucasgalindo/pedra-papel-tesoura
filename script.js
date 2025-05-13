const input = document.querySelector("#input");
const button = document.querySelector("#button");

function getComputerChoice() {

    const choices = ["Pedra", "Papel", "Tesoura"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];

}

function getHumanChoice() {
    let digitado = document.querySelector("#input");
    if (!digitado) {
        return;
    }
    
    let inputElement = digitado.value.trim();
    if (!inputElement) {
        return;
    }
    let choice = inputElement;
    choice = choice[0].toUpperCase() + choice.slice(1).toLowerCase();
    if (choice === "Pedra" || choice === "Tesoura" || choice === "Papel") {
        return choice;
    } else {
        alert("Escolha inválida, tente novamente");
        input.value = "";
        return getHumanChoice();
    }
}

button.onclick = getHumanChoice;

function playGame() {
    const humanSelection = getHumanChoice();
    if (!humanSelection) {
        return;
    }
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




    input.value= "";

}

button.addEventListener("click", playGame);
