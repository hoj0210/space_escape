import * as Tone from 'tone';
import Brick from "./brick";

class Game {
    constructor(){
        this.brick = new Brick(this)
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.draw = this.draw.bind(this);
        this.startGame = this.startGame.bind(this);
        this.drawPad = this.drawPad.bind(this);
        this.onScreenBricks = this.onScreenBricks.bind(this);
        this.stopGame = this.stopGame.bind(this);
        this.showScore = this.showScore.bind(this);
        this.updateScore = this.updateScore.bind(this);
        this.bricks = [];
        this.intervalId = 0;
        this.every = false;
        this.score = 0;
        this.keyPressed = this.keyPressed.bind(this);
        document.addEventListener('keydown', e => this.keyPressed(e), true);
    }

    onScreenBricks(y){
        if (y > this.canvas.height) return false;
        else return true;
    }

    startGame(){
        this.showScore();
        this.intervalId = setInterval(this.draw, 30);
    }
    showScore(){
        document.getElementById("score-box").innerText = `Score: ${this.score}`;
    }
    drawPad() {
        this.ctx.beginPath();
        this.ctx.rect(0, this.canvas.height - 140, this.canvas.width, 140);
        this.ctx.stroke();
    }
    
    keyPressed(e) {
        if (e.keyCode === 65) {
            this.bricks.forEach(brick => {
                let pad = document.getElementById("pad");  
                if (brick.x === 35 && brick.y < 600 && brick.y > 460) { 
                    this.score += 10;
                    const synth = new Tone.Synth().toDestination();
                    synth.triggerAttackRelease(brick.tone, brick.length);
                    this.updateScore();
                    pad.style.backgroundColor = "lightgrey";
                    pad.style.opacity = 0.4;
                }
            })
        } else if (e.keyCode === 83) {
            this.bricks.forEach(brick => {
                if (brick.x === 116 && brick.y < 600 && brick.y > 460) {
                    this.score += 10;
                    const synth1 = new Tone.Synth().toDestination();
                    synth1.triggerAttackRelease(brick.tone, brick.length);
                    this.updateScore();
                } 
            })
        } else if (e.keyCode === 68) {
            this.bricks.forEach(brick => {
                if (brick.x === 197 && brick.y < 600 && brick.y > 460) {
                    this.score += 10;
                    const synth2 = new Tone.Synth().toDestination();
                    synth2.triggerAttackRelease(brick.tone, brick.length);
                    this.updateScore();
                } 
            })
        } else if (e.keyCode === 70) {
            this.bricks.forEach(brick => {
                if (brick.x === 278 && brick.y < 600 && brick.y > 460) {
                    this.score += 10;
                    const synth3 = new Tone.Synth().toDestination();
                    synth3.triggerAttackRelease(brick.tone, brick.length);
                    this.updateScore();
                } 
            })
        }
    }
    updateScore(){
        document.getElementById("score-box").innerText = `Score: ${this.score}`
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawPad();
        this.brick.initialValues.forEach(el => {
            this.brick.drawBrick(el.x, el.y, el.start, el.countTime);
            if (this.brick.count >= el.countTime && this.onScreenBricks(el.y)) {
                el.y += this.brick.dy;
                if (!this.bricks.includes(el)) this.bricks.push(el);
            } else {
                for (let i = 0; i < this.bricks.length; i++) {
                    if (this.bricks[i] === el) {
                        this.bricks.splice(i, 1);
                    }
                }
            }
            
        })
        this.brick.count += 1;

        this.brick.initialValues.forEach(el => {
            if (el.y <= this.canvas.height) {
                this.every = false;
            } else {
                this.every = true;
            }
        })
        if (this.every) {
            this.stopGame();
        }
    }

    stopGame(){
        clearInterval(this.intervalId);
    }
}

export default Game;