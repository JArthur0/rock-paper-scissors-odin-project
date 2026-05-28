//Elements
const paperBtn = document.querySelector(".paper");
const rockBtn = document.querySelector(".rock");
const scissorsBtn = document.querySelector(".scissors");
const playerScoreTxt = document.querySelector(".player-score");
const computerScoreTxt = document.querySelector(".computer-score");
const computerChoiceTxt = document.querySelector(".computer-choice");
const playerChoiceTxt = document.querySelector(".player-choice");
const roundResultTxt = document.getElementById("round-result")

let humanScore = 0;
let computerScore = 0;


setupEventListeners();


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    let pick = "";
    switch (choice) {

        case 1:
            pick = "ROCK"
            break;
        case 2:
            pick = "PAPER"
            break;
        case 3:
            pick = "SCISSORS"
            break;
        default:
            break;
    }
    console.log("THE COMPUTER CHOSE " + pick)
    return pick;
}
function getHumanChoice() {
    let pick = prompt("ROCK, PAPER or SCISSORS").toUpperCase();
    switch (pick) {
        case "ROCK":
            pick = "ROCK"
            break;
        case "PAPER":
            pick = "PAPER"
            break;
        case "SCISSORS":
            pick = "SCISSORS"
            break;
        default:
            break;
    }
    console.log("YOU CHOSE " + pick)
    return pick;
}

function playRound(humanChoice, computerChoice) {
    let result = 0;
    if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        return result = 1;
    }
    else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        return result = 1;
    }
    else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        return result = 1;
    }
    else if (humanChoice === computerChoice) {
        return result = 2
    }

}

function playGame(pick) {
    const humanSelection = pick;
    const computerSelection = getComputerChoice();
    let round = playRound(humanSelection, computerSelection);

    computerChoiceTxt.textContent = `Computer chose ${computerSelection}`
    playerChoiceTxt.textContent = `Player chose ${humanSelection}`

    if (round === 1) {
        humanScore++;
        playerScoreTxt.textContent = `Player:${humanScore}`;
        roundResultTxt.textContent = "Player won the round!!"
    }
    else if (round === 2) {
        humanScore = humanScore;
        computerScore = computerScore;
        roundResultTxt.textContent = "It's a TIE!"
    }
    else {
        computerScore++;
        computerScoreTxt.textContent = `Computer:${computerScore}`;
        roundResultTxt.textContent = "Computer won the round!!"
    }

    console.log("Your points: " + humanScore);
    console.log("Computer points: " + computerScore);

    if (humanScore === 5 || computerScore === 5) {
        gameOver();
    }

}

function gameOver() {
    document.getElementById("choice").style.display="none";
    document.getElementById("buttons").style.display="none";
    roundResultTxt.style.fontSize="70px"
    if (humanScore > computerScore) roundResultTxt.textContent= "PLAYER WON THE GAME!!!!";
    else if (humanScore == computerScore) roundResultTxt.textContent= "THE GAME ENDED IN A TIE";
    else roundResultTxt.textContent = "COMPUTER WON THE GAME !!!";
}

function setupEventListeners() {
    paperBtn.addEventListener("click", () => {
        let pick = "PAPER";
        playGame(pick);
    })
    rockBtn.addEventListener("click", () => {
        let pick = "ROCK";
        playGame(pick);
    })
    scissorsBtn.addEventListener("click", () => {
        let pick = "SCISSORS";
        playGame(pick);
    })
}