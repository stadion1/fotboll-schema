// script.js

// Exempelspelare (byt ut mot dina egna)
const players = ["Otto", "Jonathan", "Thiliam", "William", "Tod"];

// Antal perioder (t.ex. 6 perioder = 2 matcher med 3 perioder vardera)
const periods = 6;

// Vem som startar (0 = första spelaren i listan)
let startPlayerIndex = 0;

// Funktion för att generera spelschema
function generateSchedule(players, periods, startIndex) {
  let schedule = [];
  let playerIndex = startIndex;

  for (let i = 0; i < periods; i++) {
    schedule.push(players[playerIndex]);
    playerIndex = (playerIndex + 1) % players.length; // hoppa till nästa spelare
  }

  return schedule;
}

// Kör funktionen och visa i webbsidan
const schedule = generateSchedule(players, periods, startPlayerIndex);

const resultDiv = document.getElementById("resultat");
resultDiv.innerHTML = "<h2>Spelschema</h2>";

schedule.forEach((player, index) => {
  resultDiv.innerHTML += `<p>Period ${index + 1}: ${player}</p>`;
});
