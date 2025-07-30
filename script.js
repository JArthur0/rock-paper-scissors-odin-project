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
    console.log("YOU CHOSE "+pick)
    return pick;
}

function playRound(humanChoice,computerChoice){
    let result = 0;
    if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        console.log("YOU WIN");
        return result = 1;
    }
    else if(humanChoice === "PAPER" && computerChoice === "ROCK"){
        console.log("YOU WIN");
        return result = 1;
    }
    else if(humanChoice === "SCISSORS" && computerChoice === "PAPER"){
        console.log("YOU WIN")
        return result = 1;
    }
    else{
        console.log("YOU LOSE")
    }
}

function playGame(){
    let humanScore=0;
    let computerScore=0;
    for(let i =0;i<4;i++){
        const humanSelection=getHumanChoice();
        const computerSelection=getComputerChoice();
        let round = playRound(humanSelection,computerSelection);

        if(round == true){
            humanScore++;
        }
        else{
            computerScore++;
        }
        console.log(humanScore);
        console.log(computerScore);
    }
}

playGame();
