function playRound(playerSelection,computerSalection){
    playerSelectionCopy= playerSelection.toLowerCase();
    switch(computerSelection){
        case "paper":
            switch(playerSelectionCopy){
                case "rock":
                    return "Paper beats rock! You Lose";
                case "paper":
                    return "Both selected the same, play again.";
                case "scissors":
                    return "Scissors beats paper! You won!";
            }
        case "rock":
            switch(playerSelectionCopy){
                case "rock":
                    return "Both selected the same, play again.";
                case "paper":
                    return "Paper beats rock. You won!";
                case "scissors":
                    return "Rock beats Scissors! You Lose!";}
        case "scissors":
            switch(playerSelectionCopy){
                case "rock":
                    return "Rock beats Scissors! You won!";
                case "paper":
                    return "Scissors beats paper! You lose!";
                case "scissors":
                    return "Both selected the same, play again.";}
            
    }
}
function computerPlay(){
    numberChoice=Math.floor(Math.random()*3);
    switch(numberChoice){
        case 0:
            return "rock";
            
        case 1:
            return "paper";
            
        case 2:
            return "scissors" ;
    }
}
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));
