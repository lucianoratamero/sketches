var COLOR_PALETTE = PALETTES[Math.floor(Math.random()*PALETTES.length)]


function setup() {
  arcStrokeWeight = 24;
  smallestDimension = window.innerHeight > window.innerWidth ? window.innerHeight * 1.2 : window.innerWidth * 1.2;

  createCanvas(window.innerWidth, window.innerHeight);
  noFill();
  smooth(8);

  spinners = [];

  spinnerRange = range(1, 21);

  for (let index = 0; index < spinnerRange.length; index++) {
    var currentRadius = spinnerRange[index];
    spinners.push(new Spinner({
      radius: currentRadius,
      weight: ceil(currentRadius * 10)
    }));
  }

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

  constructor({radius, delay=radius/smallestDimension, weight=24}){
    var colorFactor = ceil((1 - (radius / smallestDimension)) * 255);
    this.endoffset = 8;
    this.radius = smallestDimension/4;
    this.weight = weight;
    this.color = color(COLOR_PALETTE[ceil(radius) % 5]);
    this.delay = delay * (radius + 90);
  }

  render(){
    var a = easeInOutN(timeCycle(80, 0), 4);
    var b = easeInOutN(timeCycle(80, this.endoffset), 5);
    var r = timeCycle(80, 0);

    if (a > b) {
      b++;
    }

    push();
    strokeWeight(this.weight);
    translate(width / 2, height / 2);
    rotate(TAU * this.delay);
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
