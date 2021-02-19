import "./styles/index.scss";
import Game from './scripts/game';

const instruct = document.getElementById("instructions");
const containerTop = document.getElementById("instruction-container-top");
const instructBack = document.getElementById('instruction-background');

instruct.onclick = function() {
  instructBack.style.display = "block";
  containerTop.style.display = "block";
}

window.onclick= function(e) {
  if (e.target === instructBack) {
    instructBack.style.display = "none";
    containerTop.style.display = "none";
  }
}

const game = new Game();
const startSpeed = 22;
const twinkleStar = document.getElementById("twinkle-star");
const canon = document.getElementById("canon");
document.addEventListener("click", e => {
  if (e.target === twinkleStar) {
    document.getElementById("start-game-page").style.display = "none";
    document.getElementById("keyboard").style.display = "flex";
    document.getElementById("try-again-button").style.display = "block";
    let whichLevel = document.getElementById("which-level");
    whichLevel.innerText = `LEVEL ${game.nextLevel}`;
    whichLevel.style.fontFamily = "Source Code Pro, monospace";
    whichLevel.style.color = "white";
    whichLevel.style.fontSize = "32px";
    game.startGame(startSpeed, 1);
  } else if (e.target === canon) {
    document.getElementById("start-game-page").style.display = "none";
    document.getElementById("try-again-button").style.display = "block";
    let whichLevel = document.getElementById("which-level");
    whichLevel.innerText = `LEVEL ${game.nextLevel}`;
    whichLevel.style.fontFamily = "Source Code Pro, monospace";
    whichLevel.style.color = "white";
    whichLevel.style.fontSize = "32px";
    game.startGame(startSpeed, 2);
  }
})