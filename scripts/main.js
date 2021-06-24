function playRound(playerSelection,computerSelection){
    playerSelectionCopy= playerSelection.toLowerCase();
    switch(computerSelection){
        case "paper":
            switch(playerSelectionCopy){
                case "rock":
                    return "lose";
                case "paper":
                    return "tie";
                case "scissors":
                    return "won";
            }
        case "rock":
            switch(playerSelectionCopy){
                case "rock":
                    return "tie";
                case "paper":
                    return "won";
                case "scissors":
                    return "lose";}
        case "scissors":
            switch(playerSelectionCopy){
                case "rock":
                    return "won";
                case "paper":
                    return "lose";
                case "scissors":
                    return "tie";}
            
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



function userSelection(e){
    humanChoice=e.target.id; 
    const computerScore= document.querySelector("#computerScore");
    const humanScore=document.querySelector("#humanScore");
    computerChoice=computerPlay();
    matchResult= playRound(humanChoice,computerChoice);

    updateLastChoice('#computerLast .lastChoice',computerChoice);
    
    updateLastChoice('#humanLast .lastChoice',humanChoice);
    
    

    switch(matchResult){
        case "won":
            humanScore.textContent=Number(humanScore.textContent)+1;
            return;
        case "lose":
            computerScore.textContent=Number(computerScore.textContent)+1;
            return;
        case "tie":
            return;
    }

}

function updateLastChoice(selector,choice){
    const LastChoice=document.querySelector(selector)
    
    switch(choice){
        case "rock":
            LastChoice.src="images/rock.png";
            break;
        case "paper":
            LastChoice.src="images/paper.png";
            break;
        case "scissors":
            LastChoice.src="images/scissors.png";
            break;
    }
}

const buttons=document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', userSelection));
