class Brick {
    constructor(props) {
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.x1 = 20;
        this.x2 = 81;
        this.x3 = 142;
        this.x4 = 203;
        this.y1 = -140;
        this.dy = 4;
        this.rectWidth = 60;
        this.rectHeight = 140;
        this.rectHeight2 = 280;
        this.count1 = 0;
        this.rectHeightHalf = 70;
    }

    drawBrick1(){
        if (this.count1 >= 0) {
            this.ctx.beginPath();
            this.ctx.rect(this.x1, this.y1, this.rectWidth, this.rectHeight);
            this.ctx.fillStyle = 'white';
            this.ctx.strokeStyle = 'black';
            this.ctx.linewidth = 10;
            this.ctx.stroke();
            this.ctx.fill();
            this.ctx.closePath();
            y1 += dy;
            count1 += 1;
        }
    }
}

export default Brick