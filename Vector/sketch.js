let position;
let velocity;
let ballSize = 50;
let shape;

function setup() {
  createCanvas(windowWidth, windowHeight);
  position = createVector(random(50, width - ballSize), random(50, height - ballSize));
  velocity = createVector(random(1, 5), random(1, 6));
}

function draw() {
  background(0);
  ellipse(position.x, position.y, ballSize);

  position.add(velocity);

  if (position.x + ballSize >= width || position.x <= 0) {
    velocity.x = -velocity.x;
    fill(random(255), random(255), random(255));
    ballSize = random(10, 50);
  }

  if (position.y + ballSize >= height || position.y <= 0) {
    velocity.y = -velocity.y;
    fill(random(255), random(255), random(255));
    ballSize = random(10, 50);
  }
}
