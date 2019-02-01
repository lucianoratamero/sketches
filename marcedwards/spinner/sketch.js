function setup() {
  arcStrokeWeight = 6;

  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(30);
  smooth(8);
  noFill();
  strokeWeight(arcStrokeWeight);

  spinners = [new Spinner()];
}

function draw() {
  background(29);
  spinners.map(spinner => spinner.render());
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Spinner {

  constructor(){
    this.endoffset = 8;
    this.radius = 100;
    this.color = 255;
  }

  render(){
    var a = easeInOutN(timeCycle(40, 0), 4);
    var b = easeInOutN(timeCycle(40, this.endoffset), 5);
    var r = timeCycle(40, 0);

    if (a > b) {
      b++;
    }

    push();
    translate(width / 2, height / 2);
    rotate(TAU * 0.75);
    stroke(this.color);
    arc(0, 0, this.radius, this.radius,
        a * TAU * 0.8 + r * TAU * 0.2 - 0.3,
        b * TAU * 0.8 + r * TAU * 0.2 + 0.3
        );
    pop();
  }
}

function easeInOutN(t, power){
  return t < 0.5 ? 0.5 * pow(2 * t, power) : 1 - 0.5 * pow(2 * (1 - t), power);
}

function timeCycle(totalframes, offset) {
  var step = (frameCount + offset) % totalframes / totalframes;
  return step;
}
