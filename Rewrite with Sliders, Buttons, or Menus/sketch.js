let balls = [];
let count = 100;
let speedSlider;
let colorButton;

function setup() {
  createCanvas(600, 400);

  // Create sliders and buttons
  speedSlider = createSlider(1, 5, 3, 0.1); // Speed slider with initial value 3
  speedSlider.position(20, height + 20);

  colorButton = createButton('Change Colors'); // Button to change colors
  colorButton.position(380, height + 20);
  colorButton.mousePressed(changeColors);

  // Initialize balls
  for (let i = 0; i < count; i++) {
    balls[i] = createBall();
  }
}

function draw() {
  background(0);

  for (let i = 0; i < balls.length; i++) {
    fill(balls[i].c);
    circle(balls[i].x, balls[i].y, balls[i].d);
    balls[i].x += random(-speedSlider.value(), speedSlider.value());
    balls[i].y += random(-speedSlider.value(), speedSlider.value());
  }

  checkEdges();
}

// Bounce ball off edges of canvas
function checkEdges() {
  for (let ball of balls) {
    if (ball.x > width || ball.x < 0) {
      ball.xv = -ball.xv;
    }
    if (ball.y < 0 || ball.y > height) {
      ball.yv = -ball.yv;
    }
  }
}

// Create a ball with random properties
function createBall() {
  return {
    x: random(width),
    y: random(height),
    d: 30,
    xv: random(2, 3),
    yv: random(1, 4),
    c: color(random(255), random(255), random(255)),
  };
}

// Change colors of all balls
function changeColors() {
  for (let ball of balls) {
    ball.c = color(random(255), random(255), random(255));
  }
}