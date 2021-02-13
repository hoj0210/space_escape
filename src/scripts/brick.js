
class Brick {
    constructor(game) {
        this.game = game;
        this.dy = 4;
        this.spaceShip = new Image();
        this.spaceShip.src = 'src/assets/spaceship.png';
        this.ufo = new Image();
        this.ufo.src = 'src/assets/ufo.png';
        this.bigShip = new Image();
        this.bigShip.src = 'src/assets/bigspaceship.png';
        this.rectWidth = 80;
        this.rectHeight = 140;
        this.rectHeight2 = 280;
        this.count = 0;
        this.explode = new Image();
        this.explode.src = 'src/assets/explosion.png';
        this.rectHeightHalf = 70;
        this.initialValues = [
                {x: 35, y: -140, start: -140, tone: "C3", length: "4n", correct: false, countTime: 0},
                {x: 116, y: -140, start: -140, tone: "C3", length: "4n", correct: false, countTime: 35},
                {x: 197, y: -140, start: -140, tone: "G3", length: "4n", correct: false, countTime: 70},
                {x: 278, y: -140, start: -140, tone: "G3", length: "4n", correct: false, countTime: 105},
                {x: 197, y: -140, start: -140, tone: "A3", length: "4n", correct: false, countTime: 140},
                {x: 116, y: -140, start: -140, tone: "A3", length: "4n", correct: false, countTime: 175},
                {x: 35, y: -280, start: -280, tone: "G3", length: "2n", correct: false, countTime:  210},
                {x: 278, y: -140, start: -140, tone: "F3", length: "4n", correct: false, countTime: 280},
                {x: 197, y: -140, start: -140, tone: "F3", length: "4n", correct: false, countTime: 315},
                {x: 278, y: -140, start: -140, tone: "E3", length: "4n", correct: false, countTime: 350},
                {x: 116, y: -140, start: -140, tone: "E3", length: "4n", correct: false, countTime: 385},
                {x: 35, y: -70, start: -70, tone: "D3", length: "8n", correct: false, countTime: 420},
                {x: 197, y: -70, start: -70, tone: "E3", length: "8n", correct: false, countTime: 437.5},
                {x: 116, y: -70, start: -70, tone: "F3", length: "8n", correct: false, countTime: 455},
                {x: 278, y: -70, start: -70, tone: "D3", length: "8n", correct: false, countTime: 472.5},
                {x: 197, y: -280, start: -280, tone: "C3", length: "2n", correct: false, countTime: 490},
                {x: 35, y: -140, start: -140, tone: "G3", length: "4n", correct: false, countTime: 560},
                {x: 197, y: -140, start: -140, tone: "E3", length: "4n", correct: false, countTime: 560},
                {x: 35, y: -140, start: -140, tone: "G3", length: "4n", correct: false, countTime: 595},
                {x: 197, y: -140, start: -140, tone: "E3", length: "4n", correct: false, countTime: 595},
                {x: 116, y: -140, start: -140, tone: "F3", length: "4n", correct: false, countTime: 630},
                {x: 278, y: -140, start: -140, tone: "D3", length: "4n", correct: false, countTime: 630},
                {x: 116, y: -140, start: -140, tone: "F3", length: "4n", correct: false, countTime: 665},
                {x: 278, y: -140, start: -140, tone: "D3", length: "4n", correct: false, countTime: 665},
                {x: 35, y: -140, start: -140, tone: "E3", length: "4n", correct: false, countTime: 700},
                {x: 278, y: -140, start: -140, tone: "C3", length: "4n", correct: false, countTime: 700},
                {x: 116, y: -140, start: -140, tone: "E3", length: "4n", correct: false, countTime: 735},
                {x: 197, y: -140, start: -140, tone: "C3", length: "4n", correct: false, countTime: 735},
                {x: 35, y: -280, start: -280, tone: "D3", length: "2n", correct: false, countTime: 770},
                {x: 197, y: -280, start: -280 , tone: "B2", length: "2n", correct: false, countTime: 770},
                {x: 116, y: -140, start: -140, tone: "G3", length: "4n", correct: false, countTime: 840},
                {x: 278, y: -140, start: -140, tone: "C3", length: "4n", correct: false, countTime: 840},
                {x: 197, y: -140, start: -140, tone: "G3", length: "4n", correct: false, countTime: 875},
                {x: 278, y: -140, start: -140, tone: "E3", length: "4n", correct: false, countTime: 875},
                {x: 35, y: -140, start: -140, tone: "F3", length: "4n", correct: false, countTime: 910},
                {x: 197, y: -140, start: -140, tone: "D3", length: "4n", correct: false, countTime: 910},
                {x: 35, y: -140, start: -140, tone: "F3", length: "4n", correct: false, countTime: 945},
                {x: 116, y: -140, start: -140, tone: "B2", length: "4n", correct: false, countTime: 945},
                {x: 278, y: -70, start: -70, tone: "G3", length: "8n", correct: false, countTime: 980},
                {x: 116, y: -70, start: -70, tone: "F3", length: "8n", correct: false, countTime: 997.5},
                {x: 197, y: -70, start: -70, tone: "E3", length: "8n", correct: false, countTime: 1015},
                {x: 35, y: -70, start: -70, tone: "G3", length: "8n", correct: false, countTime: 1032.5},
                {x: 116, y: -280, start: -280, tone: "D3", length: "2n", correct: false, countTime: 1050},
                {x: 278, y: -280, start: -280, tone: "G2", length: "2n", correct: false, countTime: 1050},
                {x: 35, y: -140, start: -140, tone: "C3", length: "4n", correct: false, countTime: 1120},
                {x: 278, y: -140, start: -140, tone: "C3", length: "4n", correct: false, countTime: 1155},
                {x: 197, y: -140, start: -140, tone: "G3", length: "4n", correct: false, countTime: 1190},
                {x: 116, y: -140, start: -140, tone: "G3", length: "4n", correct: false, countTime: 1225},
                {x: 197, y: -140, start: -140, tone: "A3", length: "4n", correct: false, countTime: 1260},
                {x: 35, y: -140, start: -140, tone: "A3", length: "4n", correct: false, countTime: 1295},
                {x: 278, y: -280, start: -280, tone: "G3", length: "2n", correct: false, countTime: 1330},
                {x: 35, y: -140, start: -140, tone: "F3", length: "4n", correct: false, countTime: 1400},
                {x: 116, y: -140, start: -140, tone: "F3", length: "4n", correct: false, countTime: 1435},
                {x: 197, y: -140, start: -140, tone: "E3", length: "4n", correct: false, countTime: 1470},
                {x: 278, y: -140, start: -140, tone: "E3", length: "4n", correct: false, countTime: 1505},
                {x: 197, y: -140, start: -140, tone: "D3", length: "4n", correct: false, countTime: 1540},
                {x: 116, y: -140, start: -140, tone: "G2", length: "4n", correct: false, countTime: 1575},
                {x: 35, y: -280, start: -280, tone: "C3", length: "2n", correct: false, countTime: 1610},
                {x: 278, y: -280, start: -280, tone: "G3", length: "2n", correct: false, countTime: 1610}
            ]


        this.initialValues2 = [
                {x: 35, y: -280, start: -280, tone: "E3", length: "2n", correct: false, countTime: 0},
                {x: 116, y: -280, start: -280, tone: "D3", length: "2n", correct: false, countTime: 70},
                {x: 197, y: -280, start: -280, tone: "C3", length: "2n", correct: false, countTime: 140},
                {x: 278, y: -280, start: -280, tone: "B2", length: "2n", correct: false, countTime: 210},
                {x: 197, y: -280, start: -280, tone: "A2", length: "2n", correct: false, countTime: 280},
                {x: 278, y: -280, start: -280, tone: "G2", length: "2n", correct: false, countTime: 350},
                {x: 116, y: -280, start: -280, tone: "A2", length: "2n", correct: false, countTime: 420},
                {x: 35, y: -280, start: -280, tone: "B2", length: "2n", correct: false, countTime: 490},
                {x: 116, y: -280, start: -280, tone: "E3", length: "2n", correct: false, countTime: 560},
                {x: 278, y: -280, start: -280, tone: "C3", length: "2n", correct: false, countTime: 560},
                {x: 35, y: -280, start: -280, tone: "D3", length: "2n", correct: false, countTime: 630},
                {x: 197, y: -280, start: -280, tone: "B2", length: "2n", correct: false, countTime: 630},
                {x: 35, y: -280, start: -280, tone: "C3", length: "2n", correct: false, countTime: 700},
                {x: 278, y: -280, start: -280, tone: "A2", length: "2n", correct: false, countTime: 700},
                {x: 116, y: -280, start: -280, tone: "B2", length: "2n", correct: false, countTime: 770},
                {x: 197, y: -280, start: -280, tone: "G2", length: "2n", correct: false, countTime: 770},
                {x: 35, y: -280, start: -280, tone: "A2", length: "2n", correct: false, countTime: 840},
                {x: 116, y: -280, start: -280, tone: "F2", length: "2n", correct: false, countTime: 840},
                {x: 116, y: -280, start: -280, tone: "G2", length: "2n", correct: false, countTime: 910},
                {x: 197, y: -280, start: -280, tone: "E2", length: "2n", correct: false, countTime: 910},
                {x: 197, y: -280, start: -280, tone: "A2", length: "2n", correct: false, countTime: 980},
                {x: 278, y: -280, start: -280, tone: "F2", length: "2n", correct: false, countTime: 980},
                {x: 35, y: -280, start: -280, tone: "B2", length: "2n", correct: false, countTime: 1050},
                {x: 278, y: -280, start: -280, tone: "G2", length: "2n", correct: false, countTime: 1050},
                {x: 278, y: -140, start: -140, tone: "G3", length: "4n", correct: false, countTime: 1120},
                {x: 35, y: -70, start: -70, tone: "E3", length: "8n", correct: false, countTime: 1155},
                {x: 116, y: -70, start: -70, tone: "F3", length: "8n", correct: false, countTime: 1172.5},
                {x: 35, y: -140, start: -140, tone: "G3", length: "4n", correct: false, countTime: 1190},
                {x: 116, y: -70, start: -70, tone: "E3", length: "8n", correct: false, countTime: 1225},
                {x: 197, y: -70, start: -70, tone: "F3", length: "8n", correct: false, countTime: 1242.5},
                {x: 278, y: -70, start: -70, tone: "G3", length: "8n", correct: false, countTime: 1260},
                {x: 35, y: -70, start: -70, tone: "G2", length: "8n", correct: false, countTime: 1277.5},
                {x: 116, y: -70, start: -70, tone: "A2", length: "8n", correct: false, countTime: 1295},
                {x: 35, y: -70, start: -70, tone: "B2", length: "8n", correct: false, countTime: 1312.5},
                {x: 116, y: -70, start: -70, tone: "C3", length: "8n", correct: false, countTime: 1330},
                {x: 197, y: -70, start: -70, tone: "D3", length: "8n", correct: false, countTime: 1347.5},
                {x: 278, y: -70, start: -70, tone: "E3", length: "8n", correct: false, countTime: 1365},
                {x: 197, y: -70, start: -70, tone: "F3", length: "8n", correct: false, countTime: 1382.5},
                {x: 278, y: -140, start: -140, tone: "E3", length: "4n", correct: false, countTime: 1400},
                {x: 35, y: -70, start: -70, tone: "C3", length: "8n", correct: false, countTime: 1435},
                {x: 278, y: -70, start: -70, tone: "D3", length: "8n", correct: false, countTime: 1452.5},
                {x: 35, y: -140, start: -140, tone: "E3", length: "4n", correct: false, countTime: 1470},
                {x: 197, y: -70, start: -70, tone: "E2", length: "8n", correct: false, countTime: 1505},
                {x: 278, y: -70, start: -70, tone: "F2", length: "8n", correct: false, countTime: 1522.5},
                {x: 197, y: -70, start: -70, tone: "G2", length: "8n", correct: false, countTime: 1540},
                {x: 35, y: -70, start: -70, tone: "A2", length: "8n", correct: false, countTime: 1557.5},
                {x: 116, y: -70, start: -70, tone: "G2", length: "8n", correct: false, countTime: 1575},
                {x: 35, y: -70, start: -70, tone: "E2", length: "8n", correct: false, countTime: 1592.5},
                {x: 116, y: -70, start: -70, tone: "G2", length: "8n", correct: false, countTime: 1610},
                {x: 197, y: -70, start: -70, tone: "C3", length: "8n", correct: false, countTime: 1627.5},
                {x: 278, y: -70, start: -70, tone: "B2", length: "8n", correct: false, countTime: 1645},
                {x: 116, y: -70, start: -70, tone: "C3", length: "8n", correct: false, countTime: 1662.5},
                {x: 35, y: -140, start: -140, tone: "A2", length: "4n", correct: false, countTime: 1680},
                {x: 278, y: -70, start: -70, tone: "C3", length: "8n", correct: false, countTime: 1715},
                {x: 35, y: -70, start: -70, tone: "B2", length: "8n", correct: false, countTime: 1732.5},
                {x: 116, y: -140, start: -140, tone: "C3", length: "4n", correct: false, countTime: 1750},
                {x: 197, y: -70, start: -70, tone: "B2", length: "8n", correct: false, countTime: 1785},
                {x: 278, y: -70, start: -70, tone: "A2", length: "8n", correct: false, countTime: 1802.5},
                {x: 197, y: -70, start: -70, tone: "G2", length: "8n", correct: false, countTime: 1820},
                {x: 116, y: -70, start: -70, tone: "F2", length: "8n", correct: false, countTime: 1837.5},
                {x: 197, y: -70, start: -70, tone: "E2", length: "8n", correct: false, countTime: 1855},
                {x: 35, y: -70, start: -70, tone: "F2", length: "8n", correct: false, countTime: 1872.5},
                {x: 116, y: -70, start: -70, tone: "G2", length: "8n", correct: false, countTime: 1890},
                {x: 278, y: -70, start: -70, tone: "A2", length: "8n", correct: false, countTime: 1907.5},
                {x: 197, y: -70, start: -70, tone: "B2", length: "8n", correct: false, countTime: 1925},
                {x: 278, y: -70, start: -70, tone: "C3", length: "8n", correct: false, countTime: 1942.5},
                {x: 197, y: -140, start: -140, tone: "A2", length: "4n", correct: false, countTime: 1960},
                {x: 35, y: -70, start: -70, tone: "C3", length: "8n", correct: false, countTime: 1995},
                {x: 197, y: -70, start: -70, tone: "B2", length: "8n", correct: false, countTime: 2012.5},
                {x: 278, y: -140, start: -140, tone: "C3", length: "4n", correct: false, countTime: 2030},
                {x: 116, y: -70, start: -70, tone: "B2", length: "8n", correct: false, countTime: 2065},
                {x: 197, y: -70, start: -70, tone: "A2", length: "8n", correct: false, countTime: 2082.5},
                {x: 278, y: -70, start: -70, tone: "B2", length: "8n", correct: false, countTime: 2100},
                {x: 116, y: -70, start: -70, tone: "A2", length: "8n", correct: false, countTime: 2117.5},
                {x: 197, y: -70, start: -70, tone: "B2", length: "8n", correct: false, countTime: 2135},
                {x: 278, y: -70, start: -70, tone: "C3", length: "8n", correct: false, countTime: 2152.5},
                {x: 35, y: -70, start: -70, tone: "D3", length: "8n", correct: false, countTime: 2170},
                {x: 197, y: -70, start: -70, tone: "E3", length: "8n", correct: false, countTime: 2187.5},
                {x: 35, y: -70, start: -70, tone: "F3", length: "8n", correct: false, countTime: 2205},
                {x: 197, y: -70, start: -70, tone: "G3", length: "8n", correct: false, countTime: 2222.5},
                {x: 116, y: -140, start: -140, tone: "E3", length: "4n", correct: false, countTime: 2240},
                {x: 197, y: -140, start: -140, tone: "G2", length: "4n", correct: false, countTime: 2275},
                {x: 35, y: -140, start: -140, tone: "D3", length: "4n", correct: false, countTime: 2310},
                {x: 197, y: -140, start: -140, tone: "B2", length: "4n", correct: false, countTime: 2345},
                {x: 116, y: -140, start: -140, tone: "C3", length: "4n", correct: false, countTime: 2380},
                {x: 278, y: -140, start: -140, tone: "E3", length: "4n", correct: false, countTime: 2415},
                {x: 116, y: -140, start: -140, tone: "G3", length: "4n", correct: false, countTime: 2450},
                {x: 278, y: -140, start: -140, tone: "G3", length: "4n", correct: false, countTime: 2485},
                {x: 35, y: -140, start: -140, tone: "A3", length: "4n", correct: false, countTime: 2520},
                {x: 278, y: -140, start: -140, tone: "G3", length: "4n", correct: false, countTime: 2555},
                {x: 116, y: -140, start: -140, tone: "F3", length: "4n", correct: false, countTime: 2590},
                {x: 197, y: -140, start: -140, tone: "A3", length: "4n", correct: false, countTime: 2625},
                {x: 35, y: -140, start: -140, tone: "G3", length: "4n", correct: false, countTime: 2660},
                {x: 197, y: -140, start: -140 , tone: "F3", length: "4n", correct: false, countTime: 2695},
                {x: 116, y: -140, start: -140, tone: "E3", length: "4n", correct: false, countTime: 2730},
                {x: 278, y: -140, start: -140, tone: "C3", length: "4n", correct: false, countTime: 2765},
                {x: 35, y: -140, start: -140, tone: "D3", length: "4n", correct: false, countTime: 2800},
                {x: 116, y: -140, start: -140, tone: "E3", length: "4n", correct: false, countTime: 2835},
                {x: 197, y: -140, start: -140 , tone: "F3", length: "4n", correct: false, countTime: 2870},
                {x: 278, y: -140, start: -140, tone: "B2", length: "4n", correct: false, countTime: 2905},
                {x: 35, y: -280, start: -280, tone: "C3", length: "2n", correct: false, countTime: 2940},
                {x: 116, y: -280, start: -280, tone: "G3", length: "2n", correct: false, countTime: 2940},
                {x: 278, y: -280, start: -280, tone: "C4", length: "2n", correct: false, countTime: 2940},

            ]
    }
 
    drawBrick(x, y, start, countTime, correct) {
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
        if (correct) {
            let brickL = this.rectHeight;
            if (start === -280) {
                brickL = this.rectHeight2;
            } else if (start === -70) {
                brickL = this.rectHeightHalf;
            }
            this.game.ctx.beginPath();
            this.game.ctx.drawImage(this.explode, x, y, this.rectWidth, brickL);
            this.game.ctx.strokeStyle= 'white';
            this.game.ctx.stroke();
            this.game.ctx.linewidth = 2
            this.game.ctx.strokeRect(x, y, this.rectWidth, brickL);
            this.game.ctx.closePath();
        }
    }

}

export default Brick