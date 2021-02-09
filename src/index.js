import "./styles/index.scss";
import * as Tone from 'tone';

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const instruct = document.getElementById("instructions");
const scroll = document.getElementById('scroll-background');
const spaceShip = new Image();
spaceShip.src = '/Users/hojungcha/Desktop/js_project/src/assets/spaceship.png'
instruct.onclick = function() {
  scroll.style.display = "block";
}

window.onclick= function(e) {
  if (e.target === scroll) {
    scroll.style.display = "none";
  }
}
const dy = 4;
const rectWidth = 80;
const rectHeight = 140;
const rectHeight2 = 280;
const rectHeightHalf = 70;
let count = 0;

let initialValues = [
  {x: 20, y: -140, start: -140, countTime: 0},
  {x: 101, y: -140, start: -140, countTime: 35},
  {x: 182, y: -140, start: -140, countTime: 70},
  {x: 263, y: -140, start: -140, countTime: 105},
  {x: 182, y: -140, start: -140, countTime: 140},
  {x: 101, y: -140, start: -140, countTime: 175},
  {x: 20, y: -280, start: -280, countTime:  210},
  {x: 263, y: -140, start: -140, countTime: 280},
  {x: 182, y: -140, start: -140, countTime: 315},
  {x: 263, y: -140, start: -140, countTime: 350},
  {x: 101, y: -140, start: -140, countTime: 385},
  {x: 263, y: -140, start: -140, countTime: 420},
  {x: 20, y: -140, start: -140, countTime: 455},
  {x: 182, y: -280, start: -280, countTime: 490},
  {x: 20, y: -140, start: -140, countTime: 560},
  {x: 182, y: -140, start: -140, countTime: 560},
  {x: 20, y: -140, start: -140, countTime: 595},
  {x: 182, y: -140, start: -140, countTime: 595},
  {x: 101, y: -140, start: -140, countTime: 630},
  {x: 263, y: -140, start: -140, countTime: 630},
  {x: 101, y: -140, start: -140, countTime: 665},
  {x: 263, y: -140, start: -140, countTime: 665},
  {x: 20, y: -140, start: -140, countTime: 700},
  {x: 263, y: -140, start: -140, countTime: 700},
  {x: 101, y: -140, start: -140, countTime: 735},
  {x: 182, y: -140, start: -140, countTime: 735},
  {x: 20, y: -280, start: -280, countTime: 770},
  {x: 182, y: -280, start: -280 , countTime: 770},
  {x: 101, y: -140, start: -140, countTime: 840},
  {x: 263, y: -140, start: -140, countTime: 840},
  {x: 182, y: -140, start: -140, countTime: 875},
  {x: 263, y: -140, start: -140, countTime: 875},
  {x: 20, y: -140, start: -140, countTime: 910},
  {x: 182, y: -140, start: -140, countTime: 910},
  {x: 20, y: -140, start: -140, countTime: 945},
  {x: 101, y: -140, start: -140, countTime: 945},
  {x: 263, y: -70, start: -70, countTime: 980},
  {x: 101, y: -70, start: -70, countTime: 997.5},
  {x: 182, y: -70, start: -70, countTime: 1015},
  {x: 20, y: -70, start: -70, countTime: 1032.5},
  {x: 101, y: -280, start: -280, countTime: 1050},
  {x: 263, y: -280, start: -280, countTime: 1050},
  {x: 20, y: -140, start: -140, countTime: 1120},
  {x: 263, y: -140, start: -140, countTime: 1155},
  {x: 182, y: -140, start: -140, countTime: 1190},
  {x: 101, y: -140, start: -140, countTime: 1225},
  {x: 182, y: -140, start: -140, countTime: 1260},
  {x: 20, y: -140, start: -140, countTime: 1295},
  {x: 263, y: -280, start: -280, countTime: 1330},
  {x: 20, y: -140, start: -140, countTime: 1400},
  {x: 101, y: -140, start: -140, countTime: 1435},
  {x: 182, y: -140, start: -140, countTime: 1470},
  {x: 263, y: -140, start: -140, countTime: 1505},
  {x: 182, y: -140, start: -140, countTime: 1540},
  {x: 101, y: -140, start: -140, countTime: 1575},
  {x: 20, y: -280, start: -280, countTime: 1610},
]

function drawBrick(x, y, start, countTime) {
  if (count >= countTime) {
    ctx.beginPath();
    let brickH = rectHeight;
    if (start === -280) {
      brickH = rectHeight2
    } else if (start === -70) {
      brickH = rectHeightHalf;
    }
    ctx.drawImage(spaceShip, x, y, rectWidth, brickH);
    ctx.strokeStyle= 'white';
    ctx.stroke();
    ctx.linewidth = 2
    ctx.strokeRect(x, y, rectWidth, brickH)
    ctx.closePath();
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  initialValues.forEach(el => {
    drawBrick(el.x, el.y, el.start, el.countTime);
    if (count >= el.countTime) {
      el.y += dy;
    }
  })
  count += 1;
}

setInterval(draw, 30)