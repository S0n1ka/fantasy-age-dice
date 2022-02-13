function rollDice(){
  const die1 = document.getElementById("die1");
  const die2 = document.getElementById("die2");
  const die3 = document.getElementById("die3");
  const playerRoll = document.getElementById("rollTotal");
  const playerStunted = document.getElementById("playerStunted");
  const stuntScore = document.getElementById("stuntScore");
  const d1 = Math.floor(Math.random() * 6) + 1;
  const d2 = Math.floor(Math.random() * 6) + 1;
  const d3 = Math.floor(Math.random() * 6) + 1;
  const diceTotal = d1 + d2 + d3;
  die1.innerHTML = d1;
  die2.innerHTML = d2;
  die3.innerHTML = d3;
  playerRoll.innerHTML = `You rolled ${diceTotal}.`;
  if(d1 == d2 || d1 == d3 || d2 == d3){
    playerStunted.innerHTML = `YOU STUNTED!!`
    stuntScore.innerHTML = `You have <span class="stunted">${d3}</span> stunt points!`;
  } else {
    playerStunted.innerHTML = null;
    stuntScore.innerHTML = null;
  }
}
