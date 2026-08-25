function getComputerChoice()
{
    let draw = Math.random();
    if (draw < 0.33)
        return 'rock';
    else if (draw < 0.66)
        return 'paper';
    else
        return 'scissors';
} 

function getHumanChoice()
{
    let response = prompt("Enter option");
    return response;
}

function playRound(humanChoice, computerChoice)
{
    humanChoice = humanChoice.toLowerCase();
    let result = 0; 

    console.log(humanChoice, computerChoice);

    if (humanChoice == computerChoice)
        result = 0;
    else if ((humanChoice == 'rock' && computerChoice == 'scissors') 
        || (humanChoice == 'paper' && computerChoice == 'rock') 
        || (humanChoice == 'scissors' && computerChoice == 'paper'))
        result = 1;
    else
        result = -1; 
    
    switch (result)
    {
        case 1:
            console.log("You win this round");
            break;
        case 0:
            console.log("It's a draw");
            break;
        case -1:
            console.log("You lose this round");
            break;
    }

    return result;
}

function playGame()
{
    const results = document.querySelector(".results");
    const results_overall = document.querySelector(".results_overall");
    let humanScore = 0;
    let computerScore = 0;

    function handlePlay(playerChoice) {
        const curr_result = playRound(playerChoice, getComputerChoice());
        switch (curr_result) {
            case 1:
                results.textContent = "You win";
                humanScore += 1;            
                break;
            case -1:
                results.textContent = "Computer wins";
                computerScore += 1;
                break;
            case 0:
                results.textContent = "It's a tie";
                break;
            default:
                results.textContent = "Something went wrong";
        }
        
        results_overall.textContent = "Human: " + String(humanScore) + " Computer: " + String(computerScore);
        if ((humanScore == 5) || (computerScore == 5))
        {
            if (humanScore > computerScore)
            {
                results_overall.textContent += ". You win overall.";
            }
            else
            {
                results_overall.textContent += ". The computer wins overall.";
            }
            humanScore = 0;
            computerScore = 0;
        }
    }

    document.querySelector("#rock").onclick = () => handlePlay("rock");
    document.querySelector("#paper").onclick = () => handlePlay("paper");
    document.querySelector("#scissors").onclick = () => handlePlay("scissors");
}

playGame();