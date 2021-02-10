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
        this.bricks = [];
        this.intervalId = 0;
        this.every = false;
    }

    onScreenBricks(y){
        if (y > this.canvas.height) return false;
        else return true;
    }

    startGame(){
        this.intervalId = setInterval(this.draw, 30)
    }

    drawPad() {
        this.ctx.beginPath();
        this.ctx.rect(0, this.canvas.height - 140, this.canvas.width, 140);
        this.ctx.stroke();
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
        console.log(this.bricks);
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