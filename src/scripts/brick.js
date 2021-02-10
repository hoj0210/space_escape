
class Brick {
    constructor(game) {
        this.game = game;
        this.dy = 4;
        this.spaceShip = new Image();
        this.spaceShip.src = 'src/assets/spaceship.png';
        this.ufo = new Image();
        this.ufo.src = 'src/assets/ufo.png';
        this.bigShip = new Image();
        this.bigShip.src = 'src/assets/bigspaceship.png'
        this.rectWidth = 80;
        this.rectHeight = 140;
        this.rectHeight2 = 280;
        this.count = 0;
        this.rectHeightHalf = 70;
        this.initialValues = [
                {x: 35, y: -140, start: -140, countTime: 0},
                {x: 116, y: -140, start: -140, countTime: 35},
                {x: 197, y: -140, start: -140, countTime: 70},
                {x: 278, y: -140, start: -140, countTime: 105},
                {x: 197, y: -140, start: -140, countTime: 140},
                {x: 116, y: -140, start: -140, countTime: 175},
                {x: 35, y: -280, start: -280, countTime:  210},
                {x: 278, y: -140, start: -140, countTime: 280},
                {x: 197, y: -140, start: -140, countTime: 315},
                {x: 278, y: -140, start: -140, countTime: 350},
                {x: 116, y: -140, start: -140, countTime: 385},
                // {x: 278, y: -140, start: -140, countTime: 420},
                // {x: 35, y: -140, start: -140, countTime: 455},
                {x: 35, y: -70, start: -70, countTime: 420},
                {x: 197, y: -70, start: -70, countTime: 437.5},
                {x: 116, y: -70, start: -70, countTime: 455},
                {x: 278, y: -70, start: -70, countTime: 472.5},
                {x: 197, y: -280, start: -280, countTime: 490},
                {x: 35, y: -140, start: -140, countTime: 560},
                {x: 197, y: -140, start: -140, countTime: 560},
                {x: 35, y: -140, start: -140, countTime: 595},
                {x: 197, y: -140, start: -140, countTime: 595},
                {x: 116, y: -140, start: -140, countTime: 630},
                {x: 278, y: -140, start: -140, countTime: 630},
                {x: 116, y: -140, start: -140, countTime: 665},
                {x: 278, y: -140, start: -140, countTime: 665},
                {x: 35, y: -140, start: -140, countTime: 700},
                {x: 278, y: -140, start: -140, countTime: 700},
                {x: 116, y: -140, start: -140, countTime: 735},
                {x: 197, y: -140, start: -140, countTime: 735},
                {x: 35, y: -280, start: -280, countTime: 770},
                {x: 197, y: -280, start: -280 , countTime: 770},
                {x: 116, y: -140, start: -140, countTime: 840},
                {x: 278, y: -140, start: -140, countTime: 840},
                {x: 197, y: -140, start: -140, countTime: 875},
                {x: 278, y: -140, start: -140, countTime: 875},
                {x: 35, y: -140, start: -140, countTime: 910},
                {x: 197, y: -140, start: -140, countTime: 910},
                {x: 35, y: -140, start: -140, countTime: 945},
                {x: 116, y: -140, start: -140, countTime: 945},
                {x: 278, y: -70, start: -70, countTime: 980},
                {x: 116, y: -70, start: -70, countTime: 997.5},
                {x: 197, y: -70, start: -70, countTime: 1015},
                {x: 35, y: -70, start: -70, countTime: 1032.5},
                {x: 116, y: -280, start: -280, countTime: 1050},
                {x: 278, y: -280, start: -280, countTime: 1050},
                {x: 35, y: -140, start: -140, countTime: 1120},
                {x: 278, y: -140, start: -140, countTime: 1155},
                {x: 197, y: -140, start: -140, countTime: 1190},
                {x: 116, y: -140, start: -140, countTime: 1225},
                {x: 197, y: -140, start: -140, countTime: 1260},
                {x: 35, y: -140, start: -140, countTime: 1295},
                {x: 278, y: -280, start: -280, countTime: 1330},
                {x: 35, y: -140, start: -140, countTime: 1400},
                {x: 116, y: -140, start: -140, countTime: 1435},
                {x: 197, y: -140, start: -140, countTime: 1470},
                {x: 278, y: -140, start: -140, countTime: 1505},
                {x: 197, y: -140, start: -140, countTime: 1540},
                {x: 116, y: -140, start: -140, countTime: 1575},
                {x: 35, y: -280, start: -280, countTime: 1610},
            ]
    }

    drawBrick(x, y, start, countTime) {
        if (this.count >= countTime) {
            this.game.ctx.beginPath();
            let brickImg = this.spaceShip;
            let brickH = this.rectHeight;
            if (start === -280) {
                brickH = this.rectHeight2;
                brickImg = this.bigShip;
            } else if (start === -70) {
                brickH = this.rectHeightHalf;
                brickImg = this.ufo;
            }
            this.game.ctx.drawImage(brickImg, x, y, this.rectWidth, brickH);
            this.game.ctx.strokeStyle= 'white';
            this.game.ctx.stroke();
            this.game.ctx.linewidth = 2
            this.game.ctx.strokeRect(x, y, this.rectWidth, brickH)
            this.game.ctx.closePath();
        }
    }

}

export default Brick