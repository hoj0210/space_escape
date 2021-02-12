import "./styles/index.scss";
import Game from './scripts/game';

const instruct = document.getElementById("instructions");
const scroll = document.getElementById('instruction-background');

instruct.onclick = function() {
  scroll.style.display = "block";
}

window.onclick= function(e) {
  if (e.target === scroll) {
    scroll.style.display = "none";
  }
}

const game = new Game();
const startSpeed = 30;
document.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    document.getElementById("start-game-page").style.display = "none";
    document.getElementById("try-again-button").style.display = "block";
    let whichLevel = document.getElementById("which-level");
    whichLevel.innerText = `LEVEL ${game.nextLevel}`;
    whichLevel.style.fontFamily = "Source Code Pro, monospace";
    whichLevel.style.color = "white";
    whichLevel.style.position = "absolute";
    whichLevel.style.bottom = "845px";
    whichLevel.style.fontSize = "26px";
    game.startGame(startSpeed);
  }
})