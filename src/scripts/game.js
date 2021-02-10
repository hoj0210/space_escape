import Brick from "./brick";
class Game {
    constructor(){
        this.brick = new Brick(this)
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.draw = this.draw.bind(this);
        this.startGame = this.startGame.bind(this);
        this.drawPad = this.drawPad.bind(this);
    }

    startGame(){
        setInterval(this.draw, 30)
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
            if (this.brick.count >= el.countTime) {
            el.y += this.brick.dy;
            }
        })
        this.brick.count += 1;
    }

    
}

export default Game;