
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var COLOR_PALETTE = PALETTES[Math.floor(Math.random()*PALETTES.length)]

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var FRAME_RATE = 60;
var DURATION = getRandomInt(15, 30);

function setup() {
  BG_COLOR = color(27, 27, 27, 200)
  COLOR_1 = color(COLOR_PALETTE[0])
  COLOR_2 = color(COLOR_PALETTE[2])
  COLOR_3 = color(COLOR_PALETTE[4])

  TRANSPARENT_COLOR_1 = color(
    COLOR_1["levels"][0],
    COLOR_1["levels"][1],
    COLOR_1["levels"][2],
    80,
  )
  TRANSPARENT_COLOR_2 = color(
    COLOR_2["levels"][0],
    COLOR_2["levels"][1],
    COLOR_2["levels"][2],
    140,
  )
  TRANSPARENT_COLOR_3 = color(
    COLOR_3["levels"][0],
    COLOR_3["levels"][1],
    COLOR_3["levels"][2],
    180,
  )

  drawer_1 = new TiledLinesDrawer(
    getRandomInt(7, 10),
    getRandomInt(3, 5),
    TRANSPARENT_COLOR_1
  )
  drawer_2 = new TiledLinesDrawer(
    getRandomInt(40, 60),
    getRandomInt(16, 24),
    TRANSPARENT_COLOR_2
  )
  drawer_3 = new TiledLinesDrawer(
    getRandomInt(150, 200),
    getRandomInt(50, 60),
    TRANSPARENT_COLOR_3
  )

  frameRate(FRAME_RATE);
  createCanvas(WIDTH, HEIGHT);
  strokeCap(ROUND);
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
        line(x, y, x, y)
      }
    }
  }
}
