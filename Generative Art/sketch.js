var x = 0;
var y = 0;
var space = 10
let colors;
let currentColor;

function setup() {
  createCanvas(400, 400);
  background(35); 
  frameRate(30);
  currentColor = color(255, 133, 133);
  colors = [
    color(0, 255, 255),
    color(190, 100, 255),
    color(140, 50, 255),
    color(240, 70, 255),
    color(0, 98, 255), 
    color(0, 179, 255), 
  ]
}

function keyPressed(){
  if (keyCode === ' '){
    clear()
  }
  //When the spacebar is pressed, the canvas would clear up and restart the art.
}

function mousePressed(){
  currentColor = random(colors);
  //When you click your mouse, the lines will turn to one of the colors in the color library.
}

function mouseReleased(){
  currentColor = color(255, 133, 133);
  //When you release your mouse, the lines will turn back to the original pale pink color.
}

function draw() {
  mazeStripes(); 
  //everytime the function loops, stripe lines are drawn, looking like a maze
}

function mazeStripes(){
  stroke(currentColor);
  strokeWeight(3);
  
  //Changes the direction of the lines
  if (random(2) < 1){
    line(x, y, x + space, y + space);
  }
  else{
    line(x, y + space, x + space, y);
  }
  
  x = x + 10
  // Lets the lines go across the canvas
  
  if (x > width){
    x = 0;
    y = y + space;
  }
  
}