
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var FRAME_RATE = 60;
var DURATION = getRandomInt(15, 30);

function setup() {
  BLACK = color(27, 27, 27, 12);
  RED = color(181, 32, 10, 6);

  frameRate(FRAME_RATE);
  createCanvas(WIDTH, HEIGHT);
  rectMode(CENTER);
  stroke(BLACK);
  strokeWeight(getRandomInt(6, 18));
  noFill();
}

function draw() {
  if (frameCount > DURATION * FRAME_RATE) {
    noLoop();
  }
  var x_noise_step = frameCount * 0.7;
  var y_noise_step = ((Math.random() * 10000) + frameCount) * 0.8;

  var noise_rate_x = noise(x_noise_step);
  var noise_rate_y = noise(y_noise_step);

  var x_radius = (WIDTH / 2) * noise_rate_x;
  var y_radius = (HEIGHT / 2) * noise_rate_y;

  translate(WIDTH / 2, HEIGHT / 2);
  rotate(radians(1));
  stroke(RED);
  rotate(radians(Math.random() * 100 * frameCount));
  rect(0, 0, x_radius, y_radius);
  stroke(BLACK);
  ellipse(0, 0, x_radius, y_radius);
}
