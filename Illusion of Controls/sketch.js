let jumpCount;
let jumps
var yBall = 390;
let vel;


function setup() {
  createCanvas(400, 400);
  vel = random([2,5]);
  jumps = random([3, 6]);
  jumpCount = 0;
}

function draw() {
  background(30,220,230, 20); // creates the slow in & slow out effect
  
  fill(0)
  ellipse(200, yBall, 20)
  
  // creates anticipation effect
  if ((yBall <= 200 && jumpCount != jumps) || (yBall >= 400 && jumpCount != jumps)){
    vel = vel * -1
    jumpCount += 1
    console.log(jumpCount)  
  }
  
  if (jumpCount == jumps){
    vel = 8
    }
  
  yBall -= vel
}