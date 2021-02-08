import "./styles/index.scss";

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let x1 = 20;
let y1 = -140;
let dy = 4;
let rectWidth = 60;
let rectHeight = 140;
let rectHeight2 = 280;
let count1 = 0;

function drawBrick1(){
  if (count1 >= 0) {
    ctx.beginPath();
    ctx.rect(x1, y1, rectWidth, rectHeight);
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.linewidth = 10;
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    y1 += dy;
    count1 += 1;
  }
  
}

let x2 = 81;
let y2 = -140;
function drawBrick2(){
  if (count1 >= 36) {
    ctx.beginPath();
    ctx.rect(x2, y2, rectWidth, rectHeight);
    ctx.fillStyle = 'white';
    ctx.strokeStyle= 'black';
    ctx.stroke();
    ctx.linewidth = 2
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    y2 += dy;
  }
  
}

let x3 = 142;
let y3 = -140;

function drawBrick3(){
  if (count1 >= 72) {
    ctx.beginPath();
    ctx.rect(x3, y3, rectWidth, rectHeight);
    ctx.fillStyle = 'white';
    ctx.strokeStyle= 'black';
    ctx.stroke();
    ctx.linewidth = 2
    ctx.fill();
    ctx.closePath();
    y3 += dy;
  }
  
}

let x4 = 203;
let y4 = -140;

function drawBrick4(){
  if (count1 >= 108) {
    ctx.beginPath();
    ctx.rect(x4, y4, rectWidth, rectHeight);
    ctx.fillStyle = 'white';
    ctx.strokeStyle= 'black';
    ctx.stroke();
    ctx.linewidth = 2
    ctx.fill();
    ctx.closePath();
    y4 += dy;
  }
}

let x5 = 20;
let y5 = -140;
function drawBrick5(){
  if (count1 >= 144) {
    ctx.beginPath();
    ctx.rect(x5, y5, rectWidth, rectHeight);
    ctx.fillStyle = 'white';
    ctx.strokeStyle= 'black';
    ctx.stroke();
    ctx.linewidth = 2
    ctx.fill();
    ctx.closePath();
    y5 += dy;
  }
}

let x6 = 81;
let y6 = -140;
function drawBrick6(){
  if (count1 >= 180) {
    ctx.beginPath();
    ctx.rect(x6, y6, rectWidth, rectHeight);
    ctx.fillStyle = 'white';
    ctx.strokeStyle= 'black';
    ctx.stroke();
    ctx.linewidth = 2
    ctx.fill();
    ctx.closePath();
    y6 += dy;
  }
}

let x7 = 142;
let y7 = -280;
function drawBrick7(){
  if (count1 >= 216) {
    ctx.beginPath();
    ctx.rect(x7, y7, rectWidth, rectHeight2);
    ctx.fillStyle = 'white';
    ctx.strokeStyle= 'black';
    ctx.stroke();
    ctx.linewidth = 2
    ctx.fill();
    ctx.closePath();
    y7 += dy;
  }
}

let x8 = 203;
let y8 = -140;
function drawBrick8(){
  if (count1 >= 287) {
    ctx.beginPath();
    ctx.rect(x8, y8, rectWidth, rectHeight);
    ctx.fillStyle = 'white';
    ctx.strokeStyle= 'black';
    ctx.stroke();
    ctx.linewidth = 2
    ctx.fill();
    ctx.closePath();
    y8 += dy;
  }
}
let x9 = 142;
let y9 = -140;
function drawBrick9(){
  if (count1 >= 323) {
    ctx.beginPath();
    ctx.rect(x9, y9, rectWidth, rectHeight);
    ctx.fillStyle = 'white';
    ctx.strokeStyle= 'black';
    ctx.stroke();
    ctx.linewidth = 2
    ctx.fill();
    ctx.closePath();
    y9 += dy;
  }
}
let x10 = 203;
let y10 = -140;
function drawBrick10(){
  if (count1 >= 359) {
    ctx.beginPath();
    ctx.rect(x10, y10, rectWidth, rectHeight);
    ctx.fillStyle = 'white';
    ctx.strokeStyle= 'black';
    ctx.stroke();
    ctx.linewidth = 2
    ctx.fill();
    ctx.closePath();
    y10 += dy;
  }
}
let x11 = 81;
let y11 = -140;
function drawBrick11(){
  if (count1 >= 395) {
    ctx.beginPath();
    ctx.rect(x11, y11, rectWidth, rectHeight);
    ctx.fillStyle = 'white';
    ctx.strokeStyle= 'black';
    ctx.stroke();
    ctx.linewidth = 2
    ctx.fill();
    ctx.closePath();
    y11 += dy;
  }
}
let x12 = 203;
let y12 = -140;
function drawBrick12(){
  if (count1 >= 431) {
    ctx.beginPath();
    ctx.rect(x12, y12, rectWidth, rectHeight);
    ctx.fillStyle = 'white';
    ctx.strokeStyle= 'black';
    ctx.stroke();
    ctx.linewidth = 2
    ctx.fill();
    ctx.closePath();
    y12 += dy;
  }
}
let x13 = 20;
let y13 = -140;
function drawBrick13(){
  if (count1 >= 467) {
    ctx.beginPath();
    ctx.rect(x13, y13, rectWidth, rectHeight);
    ctx.fillStyle = 'white';
    ctx.strokeStyle= 'black';
    ctx.stroke();
    ctx.linewidth = 2
    ctx.fill();
    ctx.closePath();
    y13 += dy;
  }
}
let x14 = 203;
let y14 = -280;
function drawBrick14(){
  if (count1 >= 503) {
    ctx.beginPath();
    ctx.rect(x14, y14, rectWidth, rectHeight2);
    ctx.fillStyle = 'white';
    ctx.strokeStyle= 'black';
    ctx.stroke();
    ctx.linewidth = 2
    ctx.fill();
    ctx.closePath();
    y14 += dy;
  }
}

let x15 = 20;
let y15 = -140;
function drawBrick15(){
  if (count1 >= 573) {
    ctx.beginPath();
    ctx.rect(x15, y15, rectWidth, rectHeight);
    ctx.fillStyle = 'white';
    ctx.strokeStyle= 'black';
    ctx.stroke();
    ctx.linewidth = 2
    ctx.fill();
    ctx.closePath();
    y15 += dy;
  }
}
let x16 = 142;
let y16 = -140;
function drawBrick16(){
  if (count1 >= 573) {
    ctx.beginPath();
    ctx.rect(x16, y16, rectWidth, rectHeight);
    ctx.fillStyle = 'white';
    ctx.strokeStyle= 'black';
    ctx.stroke();
    ctx.linewidth = 2
    ctx.fill();
    ctx.closePath();
    y16 += dy;
  }
}

let x17 = 20;
let y17 = -140;
function drawBrick17(){
  if (count1 >= 608) {
    ctx.beginPath();
    ctx.rect(x17, y17, rectWidth, rectHeight);
    ctx.fillStyle = 'white';
    ctx.strokeStyle= 'black';
    ctx.stroke();
    ctx.linewidth = 2
    ctx.fill();
    ctx.closePath();
    y17 += dy;
  }
}
let x18 = 142;
let y18 = -140;
function drawBrick18(){
  if (count1 >= 608) {
    ctx.beginPath();
    ctx.rect(x18, y18, rectWidth, rectHeight);
    ctx.fillStyle = 'white';
    ctx.strokeStyle= 'black';
    ctx.stroke();
    ctx.linewidth = 2
    ctx.fill();
    ctx.closePath();
    y18 += dy;
  }
}

let x19 = 81;
let y19 = -140;
function drawBrick19(){
  if (count1 >= 643) {
    ctx.beginPath();
    ctx.rect(x19, y19, rectWidth, rectHeight);
    ctx.fillStyle = 'white';
    ctx.strokeStyle= 'black';
    ctx.stroke();
    ctx.linewidth = 2
    ctx.fill();
    ctx.closePath();
    y19 += dy;
  }
}

let x20 = 203;
let y20 = -140;
function drawBrick20(){
  if (count1 >= 643) {
    ctx.beginPath();
    ctx.rect(x20, y20, rectWidth, rectHeight);
    ctx.fillStyle = 'white';
    ctx.strokeStyle= 'black';
    ctx.stroke();
    ctx.linewidth = 2
    ctx.fill();
    ctx.closePath();
    y20 += dy;
  }
}

let x21 = 81;
let y21 = -140;
function drawBrick21(){
  if (count1 >= 678) {
    ctx.beginPath();
    ctx.rect(x21, y21, rectWidth, rectHeight);
    ctx.fillStyle = 'white';
    ctx.strokeStyle= 'black';
    ctx.stroke();
    ctx.linewidth = 2
    ctx.fill();
    ctx.closePath();
    y21 += dy;
  }
}

let x22 = 203;
let y22 = -140;
function drawBrick22(){
  if (count1 >= 678) {
    ctx.beginPath();
    ctx.rect(x22, y22, rectWidth, rectHeight);
    ctx.fillStyle = 'white';
    ctx.strokeStyle= 'black';
    ctx.stroke();
    ctx.linewidth = 2
    ctx.fill();
    ctx.closePath();
    y22 += dy;
  }
}

let x23 = 20;
let y23 = -140;
function drawBrick23(){
  if (count1 >= 713) {
    ctx.beginPath();
    ctx.rect(x23, y23, rectWidth, rectHeight);
    ctx.fillStyle = 'white';
    ctx.strokeStyle= 'black';
    ctx.stroke();
    ctx.linewidth = 2
    ctx.fill();
    ctx.closePath();
    y23 += dy;
  }
}

let x24 = 203;
let y24 = -140;
function drawBrick24(){
  if (count1 >= 713) {
    ctx.beginPath();
    ctx.rect(x24, y24, rectWidth, rectHeight);
    ctx.fillStyle = 'white';
    ctx.strokeStyle= 'black';
    ctx.stroke();
    ctx.linewidth = 2
    ctx.fill();
    ctx.closePath();
    y24 += dy;
  }
}

let x25 = 20;
let y25 = -140;
function drawBrick25(){
  if (count1 >= 748) {
    ctx.beginPath();
    ctx.rect(x25, y25, rectWidth, rectHeight);
    ctx.fillStyle = 'white';
    ctx.strokeStyle= 'black';
    ctx.stroke();
    ctx.linewidth = 2
    ctx.fill();
    ctx.closePath();
    y25 += dy;
  }
}

let x26 = 142;
let y26 = -140;
function drawBrick26(){
  if (count1 >= 748) {
    ctx.beginPath();
    ctx.rect(x26, y26, rectWidth, rectHeight);
    ctx.fillStyle = 'white';
    ctx.strokeStyle= 'black';
    ctx.stroke();
    ctx.linewidth = 2
    ctx.fill();
    ctx.closePath();
    y26 += dy;
  }
}

let x27 = 20;
let y27 = -280;
function drawBrick27(){
  if (count1 >= 783) {
    ctx.beginPath();
    ctx.rect(x27, y27, rectWidth, rectHeight2);
    ctx.fillStyle = 'white';
    ctx.strokeStyle= 'black';
    ctx.stroke();
    ctx.linewidth = 2
    ctx.fill();
    ctx.closePath();
    y27 += dy;
  }
}

let x28 = 81;
let y28 = -280;
function drawBrick28(){
  if (count1 >= 783) {
    ctx.beginPath();
    ctx.rect(x28, y28, rectWidth, rectHeight2);
    ctx.fillStyle = 'white';
    ctx.strokeStyle= 'black';
    ctx.stroke();
    ctx.linewidth = 2
    ctx.fill();
    ctx.closePath();
    y28 += dy;
  }
}


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBrick1();
  drawBrick2();
  drawBrick3();
  drawBrick4();
  drawBrick5();
  drawBrick6();
  drawBrick7();
  drawBrick8();
  drawBrick9();
  drawBrick10();
  drawBrick11();
  drawBrick12();
  drawBrick13();
  drawBrick14();
  drawBrick15();
  drawBrick16();
  drawBrick17();
  drawBrick18();
  drawBrick19();
  drawBrick20();
  drawBrick21();
  drawBrick22();
  drawBrick23();
  drawBrick24();
  drawBrick25();
  drawBrick26();
  drawBrick27();
  drawBrick28();
}

setInterval(draw, 30)