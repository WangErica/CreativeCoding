function setup() {
    createCanvas(500, 600)
}

function draw() {
    background(255)
    //hair
    // fill(100)
    // arc(50, 50, 20, 20, TWO_PI, PI, CHORD)
    fill(0)
    arc(50, 100, 88, 182, PI, TWO_PI, CHORD)
    //neck
    fill(255, 200, 180);
    rect(44, 80, 12, 14)
    //shoulder
    fill(255)
    arc(35, 119, 50, 50, PI, PI + HALF_PI)
    line(35, 94, 65, 94)
    arc(65, 119, 50, 50, PI + HALF_PI, TWO_PI)
    //face shape
    fill(255, 200, 180);
    ellipse(50, 50, 52, 63)
    //bangs
    // fill(0);
    // arc(62, 18, 47, 26.5, QUARTER_PI, PI);
    // arc(28, 20, 50, 24, 0, HALF_PI);
    //left eye
    fill(255)
    ellipse(38, 44, 15, 8)
    fill(0)
    circle(38, 44, 7)
    //right eye
    fill(255)
    ellipse(62, 44, 15, 8)
    fill(0)
    circle(62, 44, 7)
    //left side glasses
    noFill()
    ellipse(37.5, 44.5, 20, 15)
    //right side glasses
    noFill()
    ellipse(62.5, 44.5, 20, 15)
    //glasses nose bridge?
    line(47.5, 44, 52.5, 44)
    //left 
    line(22, 42, 27.5, 44)
    //right
    line(72.5, 44, 78, 42)
    //nose
    triangle(50, 45, 46, 60, 54, 60)
    //mouth
    // rect(45, 67, 10, 3)
    fill(255, 150, 150)
    ellipse(50, 70, 12, 4)
    
}