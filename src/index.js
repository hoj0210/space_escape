import "./styles/index.scss";
import * as Tone from 'tone';
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
document.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    document.getElementById("start-game-page").style.display = "none"
    game.startGame();
  }
})

// let initialValues = [
//   {x: 35, y: -140, start: -140, countTime: 0},
//   {x: 116, y: -140, start: -140, countTime: 35},
//   {x: 197, y: -140, start: -140, countTime: 70},
//   {x: 278, y: -140, start: -140, countTime: 105},
//   {x: 197, y: -140, start: -140, countTime: 140},
//   {x: 116, y: -140, start: -140, countTime: 175},
//   {x: 35, y: -280, start: -280, countTime:  210},
//   {x: 278, y: -140, start: -140, countTime: 280},
//   {x: 197, y: -140, start: -140, countTime: 315},
//   {x: 278, y: -140, start: -140, countTime: 350},
//   {x: 116, y: -140, start: -140, countTime: 385},
//   {x: 278, y: -140, start: -140, countTime: 420},
//   {x: 35, y: -140, start: -140, countTime: 455},
//   {x: 197, y: -280, start: -280, countTime: 490},
//   {x: 35, y: -140, start: -140, countTime: 560},
//   {x: 197, y: -140, start: -140, countTime: 560},
//   {x: 35, y: -140, start: -140, countTime: 595},
//   {x: 197, y: -140, start: -140, countTime: 595},
//   {x: 116, y: -140, start: -140, countTime: 630},
//   {x: 278, y: -140, start: -140, countTime: 630},
//   {x: 116, y: -140, start: -140, countTime: 665},
//   {x: 278, y: -140, start: -140, countTime: 665},
//   {x: 35, y: -140, start: -140, countTime: 700},
//   {x: 278, y: -140, start: -140, countTime: 700},
//   {x: 116, y: -140, start: -140, countTime: 735},
//   {x: 197, y: -140, start: -140, countTime: 735},
//   {x: 35, y: -280, start: -280, countTime: 770},
//   {x: 197, y: -280, start: -280 , countTime: 770},
//   {x: 116, y: -140, start: -140, countTime: 840},
//   {x: 278, y: -140, start: -140, countTime: 840},
//   {x: 197, y: -140, start: -140, countTime: 875},
//   {x: 278, y: -140, start: -140, countTime: 875},
//   {x: 35, y: -140, start: -140, countTime: 910},
//   {x: 197, y: -140, start: -140, countTime: 910},
//   {x: 35, y: -140, start: -140, countTime: 945},
//   {x: 116, y: -140, start: -140, countTime: 945},
//   {x: 278, y: -70, start: -70, countTime: 980},
//   {x: 116, y: -70, start: -70, countTime: 997.5},
//   {x: 197, y: -70, start: -70, countTime: 1015},
//   {x: 35, y: -70, start: -70, countTime: 1032.5},
//   {x: 116, y: -280, start: -280, countTime: 1050},
//   {x: 278, y: -280, start: -280, countTime: 1050},
//   {x: 35, y: -140, start: -140, countTime: 1120},
//   {x: 278, y: -140, start: -140, countTime: 1155},
//   {x: 197, y: -140, start: -140, countTime: 1190},
//   {x: 116, y: -140, start: -140, countTime: 1225},
//   {x: 197, y: -140, start: -140, countTime: 1260},
//   {x: 35, y: -140, start: -140, countTime: 1295},
//   {x: 278, y: -280, start: -280, countTime: 1330},
//   {x: 35, y: -140, start: -140, countTime: 1400},
//   {x: 116, y: -140, start: -140, countTime: 1435},
//   {x: 197, y: -140, start: -140, countTime: 1470},
//   {x: 278, y: -140, start: -140, countTime: 1505},
//   {x: 197, y: -140, start: -140, countTime: 1540},
//   {x: 116, y: -140, start: -140, countTime: 1575},
//   {x: 35, y: -280, start: -280, countTime: 1610},
// ]

// function drawBrick(x, y, start, countTime) {
//   if (count >= countTime) {
//     ctx.beginPath();
//     let brickH = rectHeight;
//     if (start === -280) {
//       brickH = rectHeight2
//     } else if (start === -70) {
//       brickH = rectHeightHalf;
//     }
//     ctx.drawImage(spaceShip, x, y, rectWidth, brickH);
//     ctx.strokeStyle= 'white';
//     ctx.stroke();
//     ctx.linewidth = 2
//     ctx.strokeRect(x, y, rectWidth, brickH)
//     ctx.closePath();
//   }
// }

// document.addEventListener("keydown", keyPressed, false);
// function keyPressed(e) {
//   debugger
//   if (e.keyCode === 65) {
//     debugger

//   } else if (e.keyCode === 83) {

//   } else if (e.keyCode === 68) {

//   } else if (e.keyCode === 70) {

//   }
// }
// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawPad();
//   initialValues.forEach(el => {
//     drawBrick(el.x, el.y, el.start, el.countTime);
//     if (count >= el.countTime) {
//       el.y += dy;
//     }
//   })
//   count += 1;
// }

// setInterval(draw, 30)