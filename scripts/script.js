let computerSelection = function computerPlay()
{
  const choices = ["Rock", "Paper", "Scissors"];
  let choice = choices[Math.floor(Math.random() * 3)];
  return choice;
}

let playerSelection = function PlayerPlay()
{
  let response = prompt("Type your selection!");
  response = response.toLowerCase();
  response = response.charAt(0).toUpperCase() + response.slice(1);
  return response;
}