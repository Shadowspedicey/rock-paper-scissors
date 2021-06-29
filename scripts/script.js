let playerScore = 0;
let computerScore = 0;
let round = 1;

const computerSelection = function()
{
  const choices = ["Rock", "Paper", "Scissors"];
  let choice = choices[Math.floor(Math.random() * 3)];
  return choice;
}

const playerSelection = function()
{
  let response = "";
  response = prompt("Type your selection!").toString();
  response = response.toLowerCase();
  response = response.charAt(0).toUpperCase() + response.slice(1);

  if (response === ("Rock") || response === ("Paper") || response === ("Scissors"))
  {
    return response;
  }
  else if (response == 0)
  {
    alert("Hey asshole, Type your fucking selection.");
    return playerSelection();
  }
  else
  {
    alert("Something's not right! Choose between Rock, Paper or Scissors.");
    return playerSelection();
  }
}

function playRound(_playerSelection, _computerSelection)
{
  _playerSelection = playerSelection();
  _computerSelection = computerSelection();

  if (_playerSelection === "Rock")
  {
    if (_computerSelection === _playerSelection)
    {
      console.log("Tie.");
      console.log("Player score is: " + playerScore + ".");
      console.log("Computer score is: " + computerScore + ".");
      console.log("Round number " + round) + ".";
    }
    else if (_computerSelection === "Scissors")
    {
      playerScore++;
      console.log("You win this round! Fuck you AI.");
      console.log("Player score is: " + playerScore) + ".";
      console.log("Computer score is: " + computerScore) + ".";
      console.log("Round number " + round) + ".";
    }
    else if (_computerSelection === "Paper")
    {
      computerScore++;
      console.log("Fuck. You lost this one, champ.");
      console.log("Player score is: " + playerScore + ".")
      console.log("Computer score is: " + computerScore + ".")
      console.log("Round number " + round + ".")
    }
  }
  else if (_playerSelection === "Scissors")
  {
    if (_computerSelection === _playerSelection)
    {
      console.log("Tie.");
      console.log("Player score is: " + playerScore) + ".";
      console.log("Computer score is: " + computerScore) + ".";
      console.log("Round number " + round) + ".";
    }
    else if (_computerSelection === "Rock")
    {
      playerScore++;
      console.log("You win this round! Fuck you AI.");
      console.log("Player score is: " + playerScore) + ".";
      console.log("Computer score is: " + computerScore) + ".";
      console.log("Round number " + round) + ".";
    }
    else if (_computerSelection === "Paper")
    {
      computerScore++;
      console.log("Fuck. You lost this one, champ.");
      console.log("Player score is: " + playerScore) + ".";
      console.log("Computer score is: " + computerScore) + ".";
      console.log("Round number " + round) + ".";
    }
  }
  else if (_playerSelection === "Paper")
  {
    if (_computerSelection === _playerSelection)
    {
      console.log("Tie.");
      console.log("Player score is: " + playerScore) + ".";
      console.log("Computer score is: " + computerScore) + ".";
      console.log("Round number " + round) + ".";
    }
    else if (_computerSelection === "Rock")
    {
      playerScore++;
      console.log("You win this round! Fuck you AI.");
      console.log("Player score is: " + playerScore) + ".";
      console.log("Computer score is: " + computerScore) + ".";
      console.log("Round number " + round) + ".";
    }
    else if (_computerSelection === "Paper")
    {
      playerScore++;
      console.log("Fuck. You lost this one, champ.");
      console.log("Player score is: " + playerScore) + ".";
      console.log("Computer score is: " + computerScore) + ".";
      console.log("Round number " + round) + ".";
    }
  }
  round++;
}

function game()
{
  for (let i = 0; i < 5; i++)
  {
    playRound();
  }

  if (playerScore > computerScore)
  {
    console.log("Player won!");
  }
  else
  {
    console.log("Computer won!");
  }
}

game();