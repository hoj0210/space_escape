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
    game.startGame(startSpeed);
  }
})