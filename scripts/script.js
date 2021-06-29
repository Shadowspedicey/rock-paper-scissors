const computerSelection = function computerPlay()
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