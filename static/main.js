const gamesTableBodyElement = document.getElementById("games-table-body");

async function showGames() {
  const response = await fetch("/api/games");
  const responseBodyGames = await response.json();
  const games = responseBodyGames.games;

  for (const game of games) {
    const trElement = document.createElement("tr");

    const appendTdElement = (innerText) => {
      const tdElement = document.createElement("td");
      tdElement.textContent = innerText;
      trElement.appendChild(tdElement);
    };

    appendTdElement(game.darkMoveCount);
    appendTdElement(game.lightMoveCount);
    appendTdElement(game.winnerDisc);
    appendTdElement(game.startedAt);
    appendTdElement(game.endAt);

    gamesTableBodyElement.appendChild(trElement);
  }
}

showGames();
