
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var FRAME_RATE = 60;
var DURATION = getRandomInt(15, 30);

function range(start, stop, step) {
  if (typeof stop == 'undefined') {
      // one param defined
      stop = start;
      start = 0;
  }

  if (typeof step == 'undefined') {
      step = 1;
  }

  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
      return [];
  }

  var result = [];
  for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
      result.push(i);
  }

  return result;
};

function setup() {
  BG_COLOR = color(27, 27, 27, 20)
  COLOR_1 = color(27, 27, 27, 130)
  COLOR_2 = color(27, 27, 27, 220)
  COLOR_3 = color(27, 27, 27, 255)

  drawer_1 = new TiledLinesDrawer(7, 3, COLOR_1)
  drawer_2 = new TiledLinesDrawer(51, 16, COLOR_2)
  drawer_3 = new TiledLinesDrawer(181, 40, COLOR_3)

  frameRate(FRAME_RATE);
  createCanvas(WIDTH, HEIGHT);
  strokeCap(PROJECT);
}

function draw() {
  // clear()
  background(BG_COLOR)
  drawer_1.draw_lines()
  drawer_2.draw_lines()
  drawer_3.draw_lines()
  noLoop();
}


class TiledLinesDrawer{

  constructor(step, weight, c=null){
    [this.x, this.y] = [0, 0]
    this.step = step
    this.c = c || BLACK
    this.weight = weight
  }

  draw_lines(){
    var new_y = this.y + this.step

    stroke(this.c)
    strokeWeight(this.weight)

    for(var x of range(this.x, width, this.step)){
      for(var y of range(this.y, height, this.step)){
        this.random_line_at(x, y)
      }
    }
  }

  random_line_at(x, y){
    var turn = random(1) > 0.5

    var size = this.step
    if (turn) {
      line(x, y, x + size, y + size)
    } else {
      line(x + size, y, x, y + size)
    }
  }
}
