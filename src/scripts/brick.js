
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
                {x: 35, y: -280, start: -280, tone: "B2", length: "2n", correct: false, countTime: 1150},
                {x: 278, y: -280, start: -280, tone: "G2", length: "2n", correct: false, countTime: 1150},

                {x: 278, y: -140, start: -140, tone: "G3", length: "4n", correct: false, countTime: 1220},
                {x: 35, y: -70, start: -70, tone: "E3", length: "8n", correct: false, countTime: 1255},
                {x: 116, y: -70, start: -70, tone: "F3", length: "8n", correct: false, countTime: 1272.5},
                {x: 35, y: -140, start: -140, tone: "G3", length: "4n", correct: false, countTime: 1290},
                {x: 116, y: -70, start: -70, tone: "E3", length: "8n", correct: false, countTime: 1325},
                {x: 197, y: -70, start: -70, tone: "F3", length: "8n", correct: false, countTime: 1342.5},
                {x: 278, y: -70, start: -70, tone: "G3", length: "8n", correct: false, countTime: 1360},
                {x: 35, y: -70, start: -70, tone: "G2", length: "8n", correct: false, countTime: 1377.5},
                {x: 116, y: -70, start: -70, tone: "A2", length: "8n", correct: false, countTime: 1395},
                {x: 35, y: -70, start: -70, tone: "B2", length: "8n", correct: false, countTime: 1412.5},
                {x: 116, y: -70, start: -70, tone: "C3", length: "8n", correct: false, countTime: 1430},
                {x: 197, y: -70, start: -70, tone: "D3", length: "8n", correct: false, countTime: 1447.5},
                {x: 278, y: -70, start: -70, tone: "E3", length: "8n", correct: false, countTime: 1465},
                {x: 197, y: -70, start: -70, tone: "F3", length: "8n", correct: false, countTime: 1482.5},

                {x: 278, y: -140, start: -140, tone: "E3", length: "4n", correct: false, countTime: 1500},
                {x: 35, y: -70, start: -70, tone: "C3", length: "8n", correct: false, countTime: 1535},
                {x: 278, y: -70, start: -70, tone: "D3", length: "8n", correct: false, countTime: 1552.5},
                {x: 35, y: -140, start: -140, tone: "E3", length: "4n", correct: false, countTime: 1570},
                {x: 197, y: -70, start: -70, tone: "E2", length: "8n", correct: false, countTime: 1605},
                {x: 278, y: -70, start: -70, tone: "F2", length: "8n", correct: false, countTime: 1622.5},
                {x: 197, y: -70, start: -70, tone: "G2", length: "8n", correct: false, countTime: 1640},
                {x: 35, y: -70, start: -70, tone: "A2", length: "8n", correct: false, countTime: 1657.5},
                {x: 116, y: -70, start: -70, tone: "G2", length: "8n", correct: false, countTime: 1675},
                {x: 35, y: -70, start: -70, tone: "E2", length: "8n", correct: false, countTime: 1692.5},
                {x: 116, y: -70, start: -70, tone: "G2", length: "8n", correct: false, countTime: 1710},
                {x: 197, y: -70, start: -70, tone: "C3", length: "8n", correct: false, countTime: 1727.5},
                {x: 278, y: -70, start: -70, tone: "B2", length: "8n", correct: false, countTime: 1745},
                {x: 116, y: -70, start: -70, tone: "C3", length: "8n", correct: false, countTime: 1762.5},

                {x: 35, y: -140, start: -140, tone: "A2", length: "4n", correct: false, countTime: 1780},
                {x: 278, y: -70, start: -70, tone: "C3", length: "8n", correct: false, countTime: 1815},
                {x: 35, y: -70, start: -70, tone: "B2", length: "8n", correct: false, countTime: 1832.5},
                {x: 116, y: -140, start: -140, tone: "C3", length: "4n", correct: false, countTime: 1850},
                {x: 197, y: -70, start: -70, tone: "B2", length: "8n", correct: false, countTime: 1885},
                {x: 278, y: -70, start: -70, tone: "A2", length: "8n", correct: false, countTime: 1902.5},
                {x: 197, y: -70, start: -70, tone: "G2", length: "8n", correct: false, countTime: 1920},
                {x: 116, y: -70, start: -70, tone: "F2", length: "8n", correct: false, countTime: 1937.5},
                {x: 197, y: -70, start: -70, tone: "E2", length: "8n", correct: false, countTime: 1955},
                {x: 35, y: -70, start: -70, tone: "F2", length: "8n", correct: false, countTime: 1972.5},
                {x: 116, y: -70, start: -70, tone: "G2", length: "8n", correct: false, countTime: 1990},
                {x: 278, y: -70, start: -70, tone: "A2", length: "8n", correct: false, countTime: 2007.5},
                {x: 197, y: -70, start: -70, tone: "B2", length: "8n", correct: false, countTime: 2025},
                {x: 278, y: -70, start: -70, tone: "C3", length: "8n", correct: false, countTime: 2042.5},

                {x: 197, y: -140, start: -140, tone: "A2", length: "4n", correct: false, countTime: 2060},
                {x: 35, y: -70, start: -70, tone: "C3", length: "8n", correct: false, countTime: 2095},
                {x: 197, y: -70, start: -70, tone: "B2", length: "8n", correct: false, countTime: 2112.5},
                {x: 278, y: -140, start: -140, tone: "C3", length: "4n", correct: false, countTime: 2130},
                {x: 116, y: -70, start: -70, tone: "B2", length: "8n", correct: false, countTime: 2165},
                {x: 197, y: -70, start: -70, tone: "A2", length: "8n", correct: false, countTime: 2182.5},
                {x: 278, y: -70, start: -70, tone: "B2", length: "8n", correct: false, countTime: 2200},
                {x: 116, y: -70, start: -70, tone: "A2", length: "8n", correct: false, countTime: 2217.5},
                {x: 197, y: -70, start: -70, tone: "B2", length: "8n", correct: false, countTime: 2235},
                {x: 278, y: -70, start: -70, tone: "C3", length: "8n", correct: false, countTime: 2252.5},
                {x: 35, y: -70, start: -70, tone: "D3", length: "8n", correct: false, countTime: 2270},
                {x: 197, y: -70, start: -70, tone: "E3", length: "8n", correct: false, countTime: 2287.5},
                {x: 35, y: -70, start: -70, tone: "F3", length: "8n", correct: false, countTime: 2305},
                {x: 197, y: -70, start: -70, tone: "G3", length: "8n", correct: false, countTime: 2322.5},

                {x: 116, y: -140, start: -140, tone: "E3", length: "4n", correct: false, countTime: 2340},
                {x: 197, y: -140, start: -140, tone: "G2", length: "4n", correct: false, countTime: 2375},
                {x: 35, y: -140, start: -140, tone: "D3", length: "4n", correct: false, countTime: 2410},
                {x: 197, y: -140, start: -140, tone: "B2", length: "4n", correct: false, countTime: 2445},
                {x: 116, y: -140, start: -140, tone: "C3", length: "4n", correct: false, countTime: 2480},
                {x: 278, y: -140, start: -140, tone: "E3", length: "4n", correct: false, countTime: 2515},
                {x: 116, y: -140, start: -140, tone: "G3", length: "4n", correct: false, countTime: 2550},
                {x: 278, y: -140, start: -140, tone: "G3", length: "4n", correct: false, countTime: 2585},
                {x: 35, y: -140, start: -140, tone: "A3", length: "4n", correct: false, countTime: 2620},
                {x: 278, y: -140, start: -140, tone: "G3", length: "4n", correct: false, countTime: 2655},
                {x: 116, y: -140, start: -140, tone: "F3", length: "4n", correct: false, countTime: 2690},
                {x: 197, y: -140, start: -140, tone: "A3", length: "4n", correct: false, countTime: 2725},
                {x: 35, y: -140, start: -140, tone: "G3", length: "4n", correct: false, countTime: 2760},
                {x: 197, y: -140, start: -140 , tone: "F3", length: "4n", correct: false, countTime: 2795},
                {x: 116, y: -140, start: -140, tone: "E3", length: "4n", correct: false, countTime: 2830},
                {x: 278, y: -140, start: -140, tone: "C3", length: "4n", correct: false, countTime: 2865},
                {x: 35, y: -140, start: -140, tone: "D3", length: "4n", correct: false, countTime: 2900},
                {x: 116, y: -140, start: -140, tone: "E3", length: "4n", correct: false, countTime: 2935},
                {x: 197, y: -140, start: -140 , tone: "F3", length: "4n", correct: false, countTime: 2970},
                {x: 278, y: -140, start: -140, tone: "B2", length: "4n", correct: false, countTime: 3005},
                {x: 35, y: -280, start: -280, tone: "C3", length: "2n", correct: false, countTime: 3040},
                {x: 116, y: -280, start: -280, tone: "G3", length: "2n", correct: false, countTime: 3040},
                {x: 278, y: -280, start: -280, tone: "C4", length: "2n", correct: false, countTime: 3040},

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