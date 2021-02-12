import "./styles/index.scss";
import Game from './scripts/game';

const instruct = document.getElementById("instructions");
const scroll = document.getElementById('instruction-background');
const restart = document.getElementById('try-again-button');

restart.onclick = function() {
  debugger
  game.stopGame();
}

instruct.onclick = function() {
  scroll.style.display = "block";
}

window.onclick= function(e) {
  if (e.target === scroll) {
    scroll.style.display = "none";
  }
}

const game = new Game();
document.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    document.getElementById("start-game-page").style.display = "none"
    game.startGame();
  }
})