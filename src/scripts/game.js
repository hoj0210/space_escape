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
        this.songChoice = 0;
        this.synth1 = new Tone.Synth().toDestination();
        this.bricks = [];
        this.intervalId = 0;
        this.every = false;
        this.score = 0;
        this.nextLevel = 1;
        this.correct = false; 
        this.replay = false;
        this.pad = document.getElementById('pad');
        this.keyPressed = this.keyPressed.bind(this);
        this.keyUnpressed = this.keyUnpressed.bind(this);
        this.stopGame = this.stopGame.bind(this);
        document.addEventListener('keydown', e => this.keyPressed(e), true);
        document.addEventListener("keyup", e => this.keyUnpressed(e), true );
        document.addEventListener("click", e => this.restartGame(e), true);
    }

    restartGame(e) {
        const restart = document.getElementById('try-again-button');
        if (e.target === restart) {
            this.replay = true;
            this.stopGame();
        }
    }

    onScreenBricks(y){
        if (y > this.canvas.height) return false;
        else return true;
    }

    startGame(speed, songNum){
        this.songChoice = songNum;
        this.showScore();
        this.score = 0;
        this.bricks = [];
        this.brick = new Brick(this);
        this.intervalId = setInterval(this.draw, speed);
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
        if (!e.repeat) {
            if (e.keyCode === 65) {
                for (let i = 0; i < this.bricks.length; i++) {
                    if (this.bricks[i].x === 35) {
                        if ((this.bricks[i].start === -280 && (this.bricks[i].y + 140) < 600 && (this.bricks[i].y + 140) > 460) || (this.bricks[i].y < 600 && this.bricks[i].y > 460)) {   
                            this.bricks[i].correct = true;
                            this.score += 10;
                            const synth = new Tone.Synth().toDestination();
                            synth.triggerAttackRelease(this.bricks[i].tone, this.bricks[i].length);
                            this.updateScore();
                            this.pad.style.backgroundColor = "rgb(255, 255, 125)";
                            this.pad.style.opacity = "0.5";             
                            break
                        }    
                        if (!this.bricks[i].correct) {          
                            this.pad.style.backgroundColor = "rgb(255, 72, 72)";
                            this.pad.style.opacity = "0.5";
                            const synth = new Tone.Synth().toDestination();
                            synth.triggerAttackRelease("B4", "8n")
                        }
                    }
                }
            } else if (e.keyCode === 83) {
                for (let i = 0; i < this.bricks.length; i++) {
                    if (this.bricks[i].x === 116) {
                        if ((this.bricks[i].start === -280 && (this.bricks[i].y + 140) < 600 && (this.bricks[i].y + 140) > 460) || (this.bricks[i].y < 600 && this.bricks[i].y > 460)) {   
                            this.bricks[i].correct = true;
                            this.score += 10;
                            const synth = new Tone.Synth().toDestination();
                            synth.triggerAttackRelease(this.bricks[i].tone, this.bricks[i].length);
                            this.updateScore();
                            this.pad.style.backgroundColor = "rgb(255, 255, 125)";
                            this.pad.style.opacity = "0.5";             
                            break
                        }    
                        if (!this.bricks[i].correct) {          
                            this.pad.style.backgroundColor = "rgb(255, 72, 72)";
                            this.pad.style.opacity = "0.5";
                            const synth = new Tone.Synth().toDestination();
                            synth.triggerAttackRelease("B4", "8n")
                        }
                    }
                }
            } else if (e.keyCode === 68) {
                for (let i = 0; i < this.bricks.length; i++) {
                    if (this.bricks[i].x === 197) {
                        if ((this.bricks[i].start === -280 && (this.bricks[i].y + 140) < 600 && (this.bricks[i].y + 140) > 460) || (this.bricks[i].y < 600 && this.bricks[i].y > 460)) {   
                            this.bricks[i].correct = true;
                            this.score += 10;
                            const synth = new Tone.Synth().toDestination();
                            synth.triggerAttackRelease(this.bricks[i].tone, this.bricks[i].length);
                            this.updateScore();
                            this.pad.style.backgroundColor = "rgb(255, 255, 125)";
                            this.pad.style.opacity = "0.5";             
                            break
                        }    
                        if (!this.bricks[i].correct) {          
                            this.pad.style.backgroundColor = "rgb(255, 72, 72)";
                            this.pad.style.opacity = "0.5";
                            const synth = new Tone.Synth().toDestination();
                            synth.triggerAttackRelease("B4", "8n")
                        }
                    }
                }
            } else if (e.keyCode === 70) {
                for (let i = 0; i < this.bricks.length; i++) {
                    if (this.bricks[i].x === 278) {
                        if ((this.bricks[i].start === -280 && (this.bricks[i].y + 140) < 600 && (this.bricks[i].y + 140) > 460) || (this.bricks[i].y < 600 && this.bricks[i].y > 460)) {   
                            this.bricks[i].correct = true;
                            this.score += 10;
                            const synth = new Tone.Synth().toDestination();
                            synth.triggerAttackRelease(this.bricks[i].tone, this.bricks[i].length);
                            this.updateScore();
                            this.pad.style.backgroundColor = "rgb(255, 255, 125)";
                            this.pad.style.opacity = "0.5";             
                            break
                        }    
                        if (!this.bricks[i].correct) {          
                            this.pad.style.backgroundColor = "rgb(255, 72, 72)";
                            this.pad.style.opacity = "0.5";
                            const synth = new Tone.Synth().toDestination();
                            synth.triggerAttackRelease("B4", "8n")
                        }
                    }
                }
            } else {
                if (e.keyCode !== 13 ) {
                    this.pad.style.backgroundColor = "rgb(255, 71, 71)";
                    this.pad.style.opacity = "0.5";
                    const synth = new Tone.Synth().toDestination();
                    synth.triggerAttackRelease("B4", "8n");
                }
            }
        }
        // if (e.keyCode === 65) {
        //     for (let i = 0; i < this.bricks.length; i++) {
        //         if (this.bricks[i].x === 35) {
        //             if ((this.bricks[i].start === -280 && (this.bricks[i].y + 140) < 600 && (this.bricks[i].y + 140) > 460) || (this.bricks[i].y < 600 && this.bricks[i].y > 460)) {   
        //                 this.bricks[i].correct = true;
        //                 this.score += 10;
        //                 const synth = new Tone.Synth().toDestination();
        //                 synth.triggerAttackRelease(this.bricks[i].tone, this.bricks[i].length);
        //                 this.updateScore();
        //                 this.pad.style.backgroundColor = "rgb(255, 255, 125)";
        //                 this.pad.style.opacity = "0.5";             
        //                 break
        //             }    
        //             if (!this.bricks[i].correct) {          
        //                 this.pad.style.backgroundColor = "rgb(255, 72, 72)";
        //                 this.pad.style.opacity = "0.5";
        //                 const synth = new Tone.Synth().toDestination();
        //                 synth.triggerAttackRelease("B4", "8n")
        //             }
        //         }
        //     }
        // } else if (e.keyCode === 83) {
        //     for (let i = 0; i < this.bricks.length; i++) {
        //         if (this.bricks[i].x === 116) {
        //             if ((this.bricks[i].start === -280 && (this.bricks[i].y + 140) < 600 && (this.bricks[i].y + 140) > 460) || (this.bricks[i].y < 600 && this.bricks[i].y > 460)) {   
        //                 this.bricks[i].correct = true;
        //                 this.score += 10;
        //                 const synth = new Tone.Synth().toDestination();
        //                 synth.triggerAttackRelease(this.bricks[i].tone, this.bricks[i].length);
        //                 this.updateScore();
        //                 this.pad.style.backgroundColor = "rgb(255, 255, 125)";
        //                 this.pad.style.opacity = "0.5";             
        //                 break
        //             }    
        //             if (!this.bricks[i].correct) {          
        //                 this.pad.style.backgroundColor = "rgb(255, 72, 72)";
        //                 this.pad.style.opacity = "0.5";
        //                 const synth = new Tone.Synth().toDestination();
        //                 synth.triggerAttackRelease("B4", "8n")
        //             }
        //         }
        //     }
        // } else if (e.keyCode === 68) {
        //     for (let i = 0; i < this.bricks.length; i++) {
        //         if (this.bricks[i].x === 197) {
        //             if ((this.bricks[i].start === -280 && (this.bricks[i].y + 140) < 600 && (this.bricks[i].y + 140) > 460) || (this.bricks[i].y < 600 && this.bricks[i].y > 460)) {   
        //                 this.bricks[i].correct = true;
        //                 this.score += 10;
        //                 const synth = new Tone.Synth().toDestination();
        //                 synth.triggerAttackRelease(this.bricks[i].tone, this.bricks[i].length);
        //                 this.updateScore();
        //                 this.pad.style.backgroundColor = "rgb(255, 255, 125)";
        //                 this.pad.style.opacity = "0.5";             
        //                 break
        //             }    
        //             if (!this.bricks[i].correct) {          
        //                 this.pad.style.backgroundColor = "rgb(255, 72, 72)";
        //                 this.pad.style.opacity = "0.5";
        //                 const synth = new Tone.Synth().toDestination();
        //                 synth.triggerAttackRelease("B4", "8n")
        //             }
        //         }
        //     }
        // } else if (e.keyCode === 70) {
        //     for (let i = 0; i < this.bricks.length; i++) {
        //         if (this.bricks[i].x === 278) {
        //             if ((this.bricks[i].start === -280 && (this.bricks[i].y + 140) < 600 && (this.bricks[i].y + 140) > 460) || (this.bricks[i].y < 600 && this.bricks[i].y > 460)) {   
        //                 this.bricks[i].correct = true;
        //                 this.score += 10;
        //                 const synth = new Tone.Synth().toDestination();
        //                 synth.triggerAttackRelease(this.bricks[i].tone, this.bricks[i].length);
        //                 this.updateScore();
        //                 this.pad.style.backgroundColor = "rgb(255, 255, 125)";
        //                 this.pad.style.opacity = "0.5";             
        //                 break
        //             }    
        //             if (!this.bricks[i].correct) {          
        //                 this.pad.style.backgroundColor = "rgb(255, 72, 72)";
        //                 this.pad.style.opacity = "0.5";
        //                 const synth = new Tone.Synth().toDestination();
        //                 synth.triggerAttackRelease("B4", "8n")
        //             }
        //         }
        //     }
        // } else {
        //     if (e.keyCode !== 13 ) {
        //         this.pad.style.backgroundColor = "rgb(255, 71, 71)";
        //         this.pad.style.opacity = "0.5";
        //         const synth = new Tone.Synth().toDestination();
        //         synth.triggerAttackRelease("B4", "8n");
        //     }
        // }
    }

    keyUnpressed (e) {
        this.pad.style.backgroundColor = "transparent"
    }
    updateScore(){
        document.getElementById("score-box").innerText = `Score: ${this.score}`
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawPad();
        let brickVals = "";
        if (this.songChoice === 1) {
            brickVals = this.brick.initialValues;
        } else if (this.songChoice === 2) {
            brickVals = this.brick.initialValues2;
        }
        brickVals.forEach(el => {
                this.brick.drawBrick(el.x, el.y, el.start, el.countTime, el.correct);
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
                
            }
        ) 
        this.brick.count += 1;

        brickVals.forEach(el => {
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
        finalScore.innerText = `Congrats! Your final Score is: ${this.score}`;
        if (this.replay) {
            // clearInterval(this.intervalId);
            // let finalScore = document.getElementById("final-score-text");
            // finalScore.innerText = `Congrats! Your final Score is: ${this.score}`;
            let tryAgain = document.createElement('button');
            tryAgain.setAttribute("id", "try-again");
            tryAgain.innerText = "Try Again"
            tryAgain.style.fontFamily = "Source Code Pro, monospace";
            tryAgain.style.backgroundColor = "white";
            tryAgain.style.marginTop = "10px";
            tryAgain.style.color = "black";
            tryAgain.style.border = "solid, black, 3px";
            tryAgain.style.borderRadius = "5px";
            tryAgain.style.outline = "none";
            finalScore.appendChild(tryAgain);
            document.getElementById("final-score-background").style.display = "block";
            document.getElementById("final-score-container-top").style.display = "block";
            tryAgain.addEventListener(
                "click", () => {
                    let fallSpeed = 22;
                    if (this.nextLevel === 2) {
                        this.canvas.style.backgroundImage = "url(src/assets/level_2_canvas.png)"
                        fallSpeed = 15;
                    } else if (this.nextLevel === 3) {
                        this.canvas.style.backgroundImage = "url(src/assets/level_3_canvas.jpg)"
                        fallSpeed = 10;
                    } else if (this.nextLevel === 4) {
                        this.canvas.style.backgroundImage = "url(src/assets/level_4_canvas.png)"
                        fallSpeed = 5;
                    }
                    this.startGame(fallSpeed, this.songChoice);       
                    document.getElementById("final-score-background").style.display = "none";
                    document.getElementById("final-score-container-top").style.display = "none";
                }
            )
            this.replay = false;
        } else if (this.nextLevel === 4) {
            let lastLevelText = document.getElementById("last-level-score-text");
            lastLevelText.innerText = "You have successfully escaped! Game Over";
            lastLevelText.style.marginTop = "12px";
            document.getElementById("final-score-container-top").style.width = "400px";
            document.getElementById("final-score-background").style.display = "block";
            document.getElementById("final-score-container-top").style.display = "block";
        } else {
            // clearInterval(this.intervalId);
            // let finalScore = document.getElementById("final-score-text");
            // finalScore.innerText = `Congrats! Your final Score is: ${this.score}`;
            let tryAgain = document.createElement('button');
            tryAgain.setAttribute("id", "try-again");
            tryAgain.innerText = "Try Again"
            tryAgain.style.fontFamily = "Source Code Pro, monospace";
            tryAgain.style.backgroundColor = "white";
            tryAgain.style.marginTop = "10px";
            tryAgain.style.color = "black";
            tryAgain.style.border = "solid, black, 3px";
            tryAgain.style.borderRadius = "5px";
            tryAgain.style.outline = "none";
            finalScore.appendChild(tryAgain);
            let nextLevel = document.createElement('button');
            nextLevel.setAttribute("id", "next-level");
            nextLevel.innerText = "Next Level";
            nextLevel.style.fontFamily = "Source Code Pro, monospace";
            nextLevel.style.backgroundColor = "white";
            nextLevel.style.marginTop = "10px";
            nextLevel.style.color = "black";
            nextLevel.style.border = "solid, black, 3px";
            nextLevel.style.borderRadius = "5px";
            nextLevel.style.marginLeft = "20px";
            nextLevel.style.outline = "none";
            finalScore.appendChild(nextLevel);
            document.getElementById("final-score-background").style.display = "block";
            document.getElementById("final-score-container-top").style.display = "block";
            tryAgain.addEventListener(
                "click", () => {
                    let fallSpeed = 22;
                    if (this.nextLevel === 2) {
                        this.canvas.style.backgroundImage = "url(src/assets/level_2_canvas.png)"
                        fallSpeed = 15;
                    } else if (this.nextLevel === 3) {
                        this.canvas.style.backgroundImage = "url(src/assets/level_3_canvas.jpg)"
                        fallSpeed = 10;
                    } else if (this.nextLevel === 4) {
                        this.canvas.style.backgroundImage = "url(src/assets/level_4_canvas.png)"
                        fallSpeed = 5;
                    }
                    const scroll = document.getElementById("instruction-background");
                    window.onclick = function(e) {
                        if (e.target === scroll) {
                            scroll.style.display = "none";
                        }
                    }
                    this.startGame(fallSpeed, this.songChoice);      
                    document.getElementById("final-score-background").style.display = "none";
                    document.getElementById("final-score-container-top").style.display = "none";
                }
            )
            nextLevel.addEventListener(
                "click", () => {
                    this.nextLevel += 1;
                    let fallSpeed = 22;
                    let whichLevel = document.getElementById("which-level");
                    whichLevel.innerText = `LEVEL ${this.nextLevel}`;
                    if (this.nextLevel === 2) {
                        this.canvas.style.backgroundImage = "url(src/assets/level_2_canvas.png)"
                        fallSpeed = 15;
                    } else if (this.nextLevel === 3) {
                        this.canvas.style.backgroundImage = "url(src/assets/level_3_canvas.jpg)"
                        fallSpeed = 10;
                    } else if (this.nextLevel === 4) {
                        this.canvas.style.backgroundImage = "url(src/assets/level_4_canvas.png)"
                        fallSpeed = 5;
                    }
                    const containerTop = document.getElementById("instruction-container-top");
                    const instructBack = document.getElementById("instruction-background");
                    window.onclick = function(e) {
                        if (e.target === instructBack) {
                            instructBack.style.display = "none";
                            containerTop.style.display = "none";
                        }
                    }
                    this.startGame(fallSpeed, this.songChoice);
                    document.getElementById("final-score-background").style.display = "none";
                    document.getElementById("final-score-container-top").style.display = "none";
                }
            )

        }
    }
}

export default Game;