let paddleW = 100
let paddleH = 20
let paddleX = 250
let paddleY = 380
let ballX, ballY
let diameter = 30
let radius = diameter / 2
let xvel, yvel
let lives = 3
let img
let imgSize = 100
let level = 0

function setup() {
    createCanvas(600, 400)
    ballX = random(width)
    ballY = 0
    xvel = 3
    yvel = 5

    alert('Press the Enter key to restart the whole game. Click your mouse to continue playing once you have lost a life.')
}

function draw() {
    background(0)

    fill(255)
    rect(paddleX, paddleY, paddleW, paddleH)

    if (keyIsPressed) {
        if (keyCode == LEFT_ARROW && paddleX > 0) {
            paddleX -= 5
        }
        else if (keyCode == RIGHT_ARROW && paddleX + paddleW < width) {
            paddleX += 5
        }

        if (keyCode == ENTER){
            ballX = random(width)
            ballY = 0
            xvel = 3
            yvel = 5
            lives = 3
        }
    }

    fill("RED")
    circle(ballX, ballY, diameter)
    ballX += xvel
    ballY += yvel

    fill('#d9c3f7');
    textSize(24);
    text("Lives Remaining: " + lives, 10, 25);

    if (collide()) {
        yvel = -yvel
    }

    if (hitEdges()) {
        xvel = -xvel
    }

    if (fall()){
        lives = lives - 1
        stop()

    }

    if (noLives()){
        image(img, 35, 30)
        ballX = 32
        ballY = 34
    }
    yvel += 0.05; // Adjust the increment value as needed
}

function fall(){
    if (ballY + radius >= height){
        return true
    }
}

function stop(){
    ballX = random(width)
    ballY = -30

}

function collide() {
    if (ballY + radius >= paddleY && ballX >= paddleX & ballX <= paddleX + paddleW) {
        return true
    }
    if (ballY + radius <= 0){
        return true
    }
}


function hitEdges() {
    if (ballX - radius <= 0 || ballX + radius >= width) {
        return true
    }
}

function mouseClicked(){
    ballX = random(width)
    ballY = 0
    xvel = 3
    yvel = 5
}

function preload(){
    img = loadImage("gameover.png")
}

function noLives(){
    if (lives == 0){
        return true
    }
}