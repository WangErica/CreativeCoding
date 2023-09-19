let x, y; // ball position
let ballSize = 50
let xvel;
let yvel;
let shape;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(50, width - ballSize);
  y = random(50, height - ballSize);
  xvel = random(1, 5);
  yvel = random(1, 6);
}

function draw() {
  background(0);
  ellipse(x, y, ballSize)

  x += xvel;
  y += yvel;

  if (x + ballSize >= width || x <= 0) {
    xvel = -xvel
    fill(random (255), random(255), random(255))
    ballSize = random(10, 50)
    
  }

  if (y + ballSize >= height || y <= 0) {
    yvel = -yvel
    fill(random (255), random(255), random(255))
    ballSize = random(10, 50)
    
  }
}