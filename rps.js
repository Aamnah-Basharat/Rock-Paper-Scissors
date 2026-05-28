let userScore = 0;
let compScore = 0;
const user = document.getElementById("userScore");
const comp = document.getElementById("compScore");
const message = document.getElementById("msg");

// const choices = document.querySelectorAll(".choice");
const rockComp = document.getElementById("rock-comp");
const paperComp = document.getElementById("paper-comp");
const scissorsComp = document.getElementById("scissors-comp");

const rockUser = document.getElementById("rock");
const paperUser = document.getElementById("paper");
const scissorsUser = document.getElementById("scissors");

const genCompChoice = () => {
    const options = [rockComp, paperComp, scissorsComp];
    options.forEach(option => {
        option.style.opacity = "1";
    });

    const randIdx = Math.floor(Math.random() * 3);
    options[randIdx].style.opacity = "0.5"
    let compChoice;
    if (randIdx === 0) {
        compChoice = "rock";
    } else if (randIdx === 1) {
        compChoice = "paper";
    } else {
        compChoice = "scissors";
    }
    return (compChoice);
}
function genUserChoice(choice) {
    rockUser.style.opacity = "1";
    paperUser.style.opacity = "1";
    scissorsUser.style.opacity = "1";
    choice.style.opacity = "0.5"
    let userChoice;
    if (choice == rock) {
        userChoice = "rock";
    } else if (choice == paper) {
        userChoice = "paper";
    } else {
        userChoice = "scissors";
    }
    playGame(userChoice, genCompChoice())
}

const playGame = (userChoice, compChoice) => {
    console.log("user choice = ", userChoice);
    console.log("computer choice = ", compChoice);
    if (userChoice === compChoice) {
        console.log("draw")
        message.innerHTML = "Draw"
        message.style.backgroundColor = "black";

    } else {
        if (userChoice === "rock" && compChoice === "scissors") {
            userWins();
        } else if (userChoice === "rock" && compChoice === "paper") {
            compWins();
        } else if (userChoice === "paper" && compChoice === "rock") {
            userWins();
        } else if (userChoice === "paper" && compChoice === "scissors") {
            compWins();
        } else if (userChoice === "scissors" && compChoice === "paper") {
            userWins();
        } else if (userChoice === "scissors" && compChoice === "rock") {
            compWins();
        }
    }
}
function compWins() {
    compScore++;
    comp.innerHTML = compScore;
    message.innerHTML = "You Lose";
    message.style.backgroundColor = "red";
}
function userWins() {
    userScore++;
    user.innerHTML = userScore;
    message.innerHTML = "You Win";
    message.style.backgroundColor = "green";
}




// let lastClickedChoice = null;
// choices.forEach((choice) => {
//     choice.addEventListener("click", () => {
//         const userChoice = choice.getAttribute("id");
//         if (lastClickedChoice && lastClickedChoice !== choice) {
//             lastClickedChoice.style.opacity = "1";
//         }
//         choice.style.opacity = "0.5"
//         lastClickedChoice = choice;

//         playGame(userChoice, genCompChoice());
//     })
// })
