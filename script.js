let humanScore=0;
let computerScore=0;
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
    console.log("THE COMPUTER CHOSE "+pick)
    return pick;
}
function getHumanChoice(){
    let pick = prompt("ROCK, PAPER or SCISSORS");
    pick.toUpperCase
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
    console.log("YOU CHOSE "+pick)
    return pick;
}

function playRound(humanChoice,computerChoice){
    if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        console.log("YOU WIN");
    }
    else if(humanChoice === "PAPER" && computerChoice === "ROCK"){
        console.log("YOU WIN");
    }
    else if(humanChoice === "SCISSORS" && computerChoice === "PAPER"){
        console.log("YOU WIN")
    }
    else{
        console.log("YOU LOSE")
    }
}

const humanSelection=getHumanChoice();
const computerSelection=getComputerChoice();

playRound(humanSelection,computerSelection);