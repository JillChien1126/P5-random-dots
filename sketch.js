var spot = {
  x: 100,
  y: 50,
  d: 10,
};

var col = {
  r: 255,
  g: 0,
  b: 0,
};
function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  col.r = random(100, 255);
  col.g = random(50, 205);
  col.b = random(100, 190);
  spot.d = random(0, 10);
  spot.x = random(0, width);
  spot.y = random(0, height);

  fill(col.r, col.g, col.b, 100);
  noStroke();
  ellipse(spot.x, spot.y, spot.d, spot.d);
}
