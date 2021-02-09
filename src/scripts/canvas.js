class Canvas {
  constructor(props) {
    this.canvas = document.getElementById("myCanvas");
    this.canvas.width = 280;
    this.canvas.height = 600;
    this.ctx = this.canvas.getContext("2d");
  }

  createCanvas() {
    document.body.append(this.canvas);
  }

  clearCanvas(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);  
  }

}

export default Canvas;

