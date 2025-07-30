function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    let pick = "";
    switch (choice) {
        
        case 1:
            console.log("ROCK");
            pick = "ROCK"
            break;
        case 2:
            console.log("PAPER");
            pick = "PAPER"
            break;
        case 3:
           console.log("SCISSORS");
           pick = "SCISSORS" 
           break;
        default:
            break;
    }
    return pick;
}
function getHumanChoice(choice){

    switch (choice) {
        case "ROCK":
            return "ROCK";  
        case "PAPER":
            return "PAPER"
        case "SCISSORS":
            return "SCISSORS"
        default:
            break;
    }
}

getHumanChoice(prompt("ROCK, PAPER or SCISSORS"))
getComputerChoice();