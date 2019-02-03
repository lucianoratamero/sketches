
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var FRAME_RATE = 60;
var DURATION = getRandomInt(15, 30);

function setup() {
  BG_COLOR = color(27, 27, 27, 20)
  COLOR_1 = color(27, 27, 27, 30)
  COLOR_2 = color(27, 27, 27, 80)
  COLOR_3 = color(27, 27, 27, 180)
  COLOR_4 = color(27, 27, 27, 255)

  drawers = [
    new TiledLinesDrawer(3, 3, COLOR_1),
    new TiledLinesDrawer(3, 3, COLOR_1),
    new TiledLinesDrawer(3, 3, COLOR_1),
    new TiledLinesDrawer(3, 3, COLOR_1),
    new TiledLinesDrawer(3, 3, COLOR_1),
    new TiledLinesDrawer(3, 3, COLOR_1),
    new TiledLinesDrawer(3, 3, COLOR_1),
    new TiledLinesDrawer(3, 3, COLOR_1),
    new TiledLinesDrawer(3, 3, COLOR_1),

    new TiledLinesDrawer(6, 5, COLOR_1),
    new TiledLinesDrawer(7, 5, COLOR_1),
    new TiledLinesDrawer(8, 5, COLOR_1),
    new TiledLinesDrawer(9, 5, COLOR_1),
    new TiledLinesDrawer(6, 5, COLOR_1),
    new TiledLinesDrawer(7, 5, COLOR_1),
    new TiledLinesDrawer(8, 5, COLOR_1),
    new TiledLinesDrawer(9, 5, COLOR_1),

    new TiledLinesDrawer(10, 7, COLOR_2),
    new TiledLinesDrawer(15, 7, COLOR_2),
    new TiledLinesDrawer(25, 7, COLOR_2),
    new TiledLinesDrawer(30, 7, COLOR_2),
    new TiledLinesDrawer(10, 7, COLOR_2),
    new TiledLinesDrawer(15, 7, COLOR_2),
    new TiledLinesDrawer(25, 7, COLOR_2),
    new TiledLinesDrawer(30, 7, COLOR_2),

    new TiledLinesDrawer(50, 20, COLOR_3),
    new TiledLinesDrawer(60, 20, COLOR_3),
    new TiledLinesDrawer(70, 20, COLOR_3),

    new TiledLinesDrawer(150, 40, COLOR_4),
    new TiledLinesDrawer(180, 40, COLOR_4),
  ]

  frameRate(FRAME_RATE);
  createCanvas(WIDTH, HEIGHT);
  strokeCap(PROJECT);
}

function draw() {
  drawers.map(drawer => drawer.draw_lines())
}


class TiledLinesDrawer{

  constructor(step, weight, c=null, lineSize=weight*3, x=0, y=0){
    [this.x, this.y] = [x, y]
    this.step = step
    this.c = c || BLACK
    this.weight = weight
    this.lineSize = lineSize
    this.history = []
    this.decisionHistory = []
  }

  draw_lines(){
    stroke(this.c)
    strokeWeight(this.weight)

    var decision = getRandomInt(1, 3)

    switch (decision) {
      case 1:
        var startingX = this.x + this.weight * 0.695;
        var startingY = this.y + this.weight * 0.695;
        var newX = this.x + this.lineSize;
        var newY = this.y + this.lineSize;
        break;
      case 2:
        var startingX = this.x + this.weight * 0.695;
        var startingY = this.y - this.weight * 0.695;
        var newX = this.x + this.lineSize;
        var newY = this.y - this.lineSize;
        break;
      case 3:
        var startingX = this.x - this.weight * 0.695;
        var startingY = this.y + this.weight * 0.695;
        var newX = this.x - this.lineSize;
        var newY = this.y + this.lineSize;
        break;
      case 4:
        var startingX = this.x - this.weight * 0.695;
        var startingY = this.y - this.weight * 0.695;
        var newX = this.x - this.lineSize;
        var newY = this.y - this.lineSize;
        break;
    }

    if (
      newX >= 0
      && newY >= 0
      && this.x <= window.innerWidth
      && this.y <= window.innerHeight
      && !searchForArray(this.history, [newX, newY])
    ){
      line(startingX, startingY, newX, newY)
      this.x = newX
      this.y = newY
      this.history.push([newX, newY])
    }
  }
}
