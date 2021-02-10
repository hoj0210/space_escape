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
        this.keyUnpressed = this.keyUnpressed.bind(this);
        document.addEventListener('keydown', e => this.keyPressed(e), true);
        document.addEventListener("keyup", e => this.keyUnpressed(e), true );
    }

    onScreenBricks(y){
        if (y > this.canvas.height) return false;
        else return true;
    }

    startGame(){
        // debugger
        // this.brick
        this.showScore();
        this.intervalId = setInterval(this.draw, 30);
    }
    showScore(){
        document.getElementById("score-box").innerText = `Score: 0`;
    }
    drawPad() {
        this.ctx.beginPath();
        this.ctx.rect(0, this.canvas.height - 140, this.canvas.width, 140);
        this.ctx.stroke();
    }
    
    keyPressed(e) {
        if (e.keyCode === 65) {
            this.bricks.forEach(brick => {  
                if (brick.x === 35 ) {
                    if (brick.start === -280 && (brick.y + 140) < 600 && (brick.y + 140) > 460 ) {
                        this.score += 10;
                        const synth = new Tone.Synth().toDestination();
                        synth.triggerAttackRelease(brick.tone, brick.length);
                        this.updateScore();
                    } else if (brick.y < 600 && brick.y > 460) {
                        this.score += 10;
                        const synth = new Tone.Synth().toDestination();
                        synth.triggerAttackRelease(brick.tone, brick.length);
                        this.updateScore();
                    }
                }
            })
        } else if (e.keyCode === 83) {
            this.bricks.forEach(brick => {
                if (brick.x === 116) {
                    if (brick.start === -280 && (brick.y + 140) < 600 && (brick.y + 140) > 460 ) {
                        this.score += 10;
                        const synth = new Tone.Synth().toDestination();
                        synth.triggerAttackRelease(brick.tone, brick.length);
                        this.updateScore();
                    } else if (brick.y < 600 && brick.y > 460) {
                        this.score += 10;
                        const synth = new Tone.Synth().toDestination();
                        synth.triggerAttackRelease(brick.tone, brick.length);
                        this.updateScore();
                    }
                }
            })
        } else if (e.keyCode === 68) {
            this.bricks.forEach(brick => {
                if (brick.x === 197) {
                    if (brick.start === -280 && (brick.y + 140) < 600 && (brick.y + 140) > 460 ) {
                        this.score += 10;
                        const synth = new Tone.Synth().toDestination();
                        synth.triggerAttackRelease(brick.tone, brick.length);
                        this.updateScore();
                    } else if (brick.y < 600 && brick.y > 460) {
                        this.score += 10;
                        const synth = new Tone.Synth().toDestination();
                        synth.triggerAttackRelease(brick.tone, brick.length);
                        this.updateScore();
                    }
                } 
            })
        } else if (e.keyCode === 70) {
            this.bricks.forEach(brick => {
                if (brick.x === 278 ) {
                    if (brick.start === -280 && (brick.y + 140) < 600 && (brick.y + 140) > 460 ) {
                        this.score += 10;
                        const synth = new Tone.Synth().toDestination();
                        synth.triggerAttackRelease(brick.tone, brick.length);
                        this.updateScore();
                    } else if (brick.y < 600 && brick.y > 460) {
                        this.score += 10;
                        const synth = new Tone.Synth().toDestination();
                        synth.triggerAttackRelease(brick.tone, brick.length);
                        this.updateScore();
                    }
                }
            })
        }
    }

    keyUnpressed (e) {
        
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
            window.onclick = function(e) {
                if (e.target === document.getElementById("final-score-background")) {
                    document.getElementById("final-score-background").style.display = "none"
                }
            }
            this.brick = new Brick(this);
        }
    }

    stopGame(){
        clearInterval(this.intervalId);
        let finalScore = document.getElementById("final-score-text");
        finalScore.innerText = `Game Over! Your final Score is: ${this.score}`;
        let tryAgain = document.createElement('button');
        tryAgain.setAttribute("id", "try-again");
        tryAgain.innerText = "Try Again"
        tryAgain.style.fontFamily = "Source Code Pro, monospace";
        tryAgain.style.backgroundColor = "white";
        tryAgain.style.marginTop = "10px";
        tryAgain.style.color = "black";
        tryAgain.style.border = "solid, black, 3px";
        tryAgain.style.borderRadius = "5px";
        finalScore.appendChild(tryAgain);
        document.getElementById("final-score-background").style.display = "block";
        tryAgain.addEventListener(
                "click", () => {
                document.getElementById("try-again").style.display = "none";
                this.startGame();      
                document.getElementById("final-score-background").style.display = "none";
            }
        )
    }
}

export default Game;