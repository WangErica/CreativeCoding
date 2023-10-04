let shapes = [];
let totalShapes = 0;
let canvasWidth = 500;
let canvasHeight = 500;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(30); // Adjust the frame rate as needed
}

function draw() {
  background(220);

  // Add new shapes based on the current hour
  let currentHour = hour();
  if (currentHour > shapes.length) {
    let shape = createShape(currentHour);
    shapes.push(shape);
    totalShapes = shapes.length;
  }

  // Update and display each shape
  for (let i = shapes.length - 1; i >= 0; i--) {
    let shape = shapes[i];
    shape.update();
    shape.display();

    // Remove shapes that go out of bounds
    if (shape.isOutOfBounds()) {
      shapes.splice(i, 1);
      totalShapes = shapes.length;
    }
  }
}

function createShape(currentHour) {
  let x = random(width);
  let y = random(height);
  let radius = map(currentHour, 0, 23, 10, 30);
  let xSpeed = random(-2, 2);
  let ySpeed = random(-2, 2);
  let color = randomColor();

  return {
    x,
    y,
    radius,
    xSpeed,
    ySpeed,
    color,
    currentMinute: 0,
    currentSecond: 0,
    update() {
      this.x += this.xSpeed;
      this.y += this.ySpeed;

      // Bounce off the edges
      if (this.x - this.radius < 0 || this.x + this.radius > width) {
        this.xSpeed *= -1;
      }
      if (this.y - this.radius < 0 || this.y + this.radius > height) {
        this.ySpeed *= -1;
      }

      // Change shape for every minute
      let newMinute = minute();
      if (newMinute !== this.currentMinute) {
        this.radius = random(2, 30);
        this.currentMinute = newMinute;
      }

      // Change color for every second
      let newSecond = second();
      if (newSecond !== this.currentSecond) {
        this.color = randomColor();
        this.currentSecond = newSecond;
      }
    },
    display() {
      fill(this.color);
      ellipse(this.x, this.y, this.radius * 2);
    },
    isOutOfBounds() {
      return (
        this.x - this.radius > width ||
        this.x + this.radius < 0 ||
        this.y - this.radius > height ||
        this.y + this.radius < 0
      );
    },
  };
}

function randomColor() {
  return color(random(255), random(255), random(255));
}
