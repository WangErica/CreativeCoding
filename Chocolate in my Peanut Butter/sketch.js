let serial; // variable for the serial object
let latestData = "waiting for data"; // variable to hold the data


let square;
//let val = 500

function setup() {
  createCanvas(400, 400);
   // serial constructor
  serial = new p5.SerialPort();

  // serial port to use - you'll need to change this
  serial.open('/dev/tty.usbmodem143201');

  // what to do when we get serial data
  serial.on('data', gotData);
  
  square = new Square(width/2,height/2)
  

}

// when data is received in the serial buffer

function gotData() {
  let currentString = serial.readLine(); // store the data in a variable
  trim(currentString); // get rid of whitespace
  if (!currentString) return; // if there's nothing in there, ignore it
  console.log(currentString); // print it out
  latestData = currentString; // save it to the global variable
}

function draw() {
  background(220);
  rectMode(CENTER)
  square.display()
  

  
  let redSlider = map(latestData,0,1023,200,250)
  let greenSlider = map(latestData,0,1023,100,200)
  let blueSlider = map(latestData,0,1023,0,250)
  let speed = map(latestData,0,1023,1,3)
  let size = map(latestData,0,1023,50,100)
  square.size = size
  
  if(latestData < 500){
    square.x += speed
    if(square.x >= 450){
      square.x = 0
    }
  }else{
    square.x -= speed
    if(square.x <= -40){
      square.x = 400
    }
    
  }
  
  console.log(redSlider ," ", greenSlider," ",blueSlider)
  square.color.setRed(redSlider)
  square.color.setGreen(greenSlider)
  square.color.setBlue(blueSlider)
  
  
}

class Square {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.size = 50
    this.color = color(random(255),random(255),random(255))
    
  }
  
  display(){
    fill(this.color)
    rect(this.x,this.y,this.size,this.size)
  }
}