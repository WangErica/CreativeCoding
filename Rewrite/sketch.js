let balls = []
let count = 100

function setup() {
  createCanvas(600, 400)

  for (let i = 0; i < count; i++){

  balls[i] = {
      x: random(width),
      y: random(height),
      d: random (15, 30),
      xv: random(2, 3),
      yv: random(1, 4),
      c: color(random(255), random(255), random(255))
    }
  }
}

function draw() {
  background(0);

  for (let i = 0; i < balls.length; i++){
    fill(balls[i].c)
    circle(balls[i].x, balls[i].y, balls[i].d)
    balls[i].x += random(-2, 2);
    balls[i].y += random(-2, 2);
  }

  checkEdges()

}


// Bounce ball off edges of canvas
function checkEdges() {

  for (let ball of balls){
    if (ball.x > width || ball.x < 0) {
      ball.xv = -ball.xv
    }
    if (ball.y < 0 || ball.y > height) {
      ball.yv = -ball.yv
    }
  }

}

function mouseClicked(){
  for (let ball of balls){
    ball.d += 2
  }
}