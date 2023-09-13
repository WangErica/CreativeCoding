const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2;

function setup() {
  createCanvas(616, 556);

  b1 = color(102,146,172);
  b2 = color(124,93,70);

  angleMode(DEGREES)
}

function draw() {
  //background
  setGradient(0, 0, width, height, b1, b2, Y_AXIS);

  stroke(7)
  strokeWeight(5)
  line(30, 230, 60, 230)
  stroke(3)
  strokeWeight(1)
  line(230, 230, 280, 230)
  stroke(7)
  strokeWeight(6)
  line(350, 230, 616, 230)

  //background details
  stroke(177, 164, 162) //grey
  strokeWeight(25)
  line(10, 10, 10, 170)
  line(35, 60, 35, 150)
  stroke(113,124,133)
  line(142, 50, 142, 70)

  stroke(200, 181, 166) //yellowgrey
  line(35, 20, 35, 30)
  line(35, 150, 35, 160)

  stroke(121, 155, 182) //light blue
  line(300, 10, 300, 30)
  line(325, 20, 325, 50)

  stroke(181, 174, 158) //beigegrey
  line(130, 10, 130, 50)
  line(155, 10, 155, 50)

  stroke(91, 133, 128) //green
  line(70, 20, 70, 30)
  line(70, 140, 70, 150)
  line(500, 60, 500, 70)

  stroke(116, 141, 141) //lighter green
  line(525, 70, 525, 80)
  line(550, 85, 550, 100)
  line(575, 90, 575, 120)
  line(600, 100, 600, 140)

  stroke(136, 145, 143) //grey blue
  line(60, 506, 60, 520)
  line(105, 515, 105, 520)

  stroke(159, 128, 86) //beigebrown
  line(85, 525, 85, 530)
  line(105, 525, 105, 530)

  stroke(155, 114, 66) //brownred
  line(130, 510, 130, 525)
  line(155, 512, 155, 530)
  line(180, 513, 180, 528)
  line(205, 514, 205, 525)



  //shadow of plate
  noStroke()
  fill(50)
  ellipse(320, 417, 380, 130)

  //plate
  noStroke()
  fill(255)
  ellipse(340, 400, 360, 140)
  noStroke()
  fill(240)
  ellipse(340, 400, 280, 100)

  //green apple behind right side pear
  fill(34,82,30)
  ellipse(428, 315, 120, 120)

  //green pear left side
  //https://github.com/Creativeguru97/YouTube_tutorial/blob/master/p5_hacks/Gradient_effect/radical_gradient/sketch.js
  radialGradient(
    360, 280, 0,//Start pX, pY, start circle radius
    125, 140, 380,//End pX, pY, End circle radius
    color(133,141,88), //Start color
    color(19,56,48), //End color
  ); 
  ellipse(150, 240, 170, 150)

  //left bottom pear
  //https://github.com/Creativeguru97/YouTube_tutorial/blob/master/p5_hacks/Gradient_effect/radical_gradient/sketch.js
  radialGradient(
    400, 300, 0,//Start pX, pY, start circle radius
    170, 185, 380,//End pX, pY, End circle radius
    color(204,119,51), //Start color
    color(206,175,26), //End color
  );
  ellipse(270, 340, 158, 158)

  //right bottom pear
  //https://github.com/Creativeguru97/YouTube_tutorial/blob/master/p5_hacks/Gradient_effect/radical_gradient/sketch.js
  radialGradient(
    400, 300, 0,//Start pX, pY, start circle radius
    170, 185, 380,//End pX, pY, End circle radius
    color(215,170,32), //Start color
    color(195,46,1), //End color
  );
  ellipse(410, 360, 170, 185)

  //biggest pear
  
  fill(214,157,36)
  ellipse(360, 180, 180, 183)
}

//p5JS Reference page
function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } 
}

function radialGradient(sX, sY, sR, eX, eY, eR, colorS, colorE){
  let gradient = drawingContext.createRadialGradient(
    sX, sY, sR, eX, eY, eR
  );
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);

  drawingContext.fillStyle = gradient;
}//https://github.com/Creativeguru97/YouTube_tutorial/blob/master/p5_hacks/Gradient_effect/radical_gradient/sketch.js
