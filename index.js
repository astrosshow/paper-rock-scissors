function rockFunc() {
    const randomNumber = Math.random();

    let computerMove = ""; 

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = "rock";
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = "paper";
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = "scissors"
    }

    console.log(computerMove);

    let result = "";

    if (computerMove === "rock") {
        result = "Tie.";
    } else if (computerMove === "paper") {
        result = "You lose.";
    } else if (computerMove === "scissors") {
        result = "You win.";
    }

    swal(`You picked rock. Computer picked
     ${computerMove}. ${result}`);
} 


function paperFunc() {
    const randomNumber = Math.random();

    let computerMove = ""; 

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = "rock";
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = "paper";
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = "scissors"
    }

    console.log(computerMove);

    let result = "";

    if (computerMove === "rock") {
        result = "You win.";
    } else if (computerMove === "paper") {
        result = "Tie.";
    } else if (computerMove === "scissors") {
        result = "You lose.";
    }

    swal(`You picked paper. Computer picked
     ${computerMove}. ${result}`);
}

function scissorsFunc() {
    const randomNumber = Math.random();

    let computerMove = ""; 

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = "rock";
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = "paper";
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = "scissors"
    }

    console.log(computerMove);

    let result = "";

    if (computerMove === "rock") {
        result = "You lose";
    } else if (computerMove === "paper") {
        result = "You win.";
    } else if (computerMove === "scissors") {
        result = "Tie.";
    }

    swal(`You picked scissors. Computer picked
     ${computerMove}. ${result}`);
}