let keys = [];

function setup() {
  createCanvas(400, 200);
  noLoop();
  // Generate a random keyboard with 10 keys
  for (let i = 0; i < 10; i++) {
    keys.push({
      x: i * width / 10,
      note: random(["C4", "D4", "E4", "F4", "G4", "A4", "B4"]),
      isPressed: false,
    });
  }
  drawKeyboard();
}

function drawKeyboard() {
  background(220);
  for (let key of keys) {
    fill(key.isPressed ? color(255, 0, 0) : 255);
    rect(key.x, 50, width / 10, 100);
    text(key.note, key.x + 20, 150);
  }
}

function mousePressed() {
  for (let key of keys) {
    if (mouseX > key.x && mouseX < key.x + width / 10 && mouseY > 50 && mouseY < 150) {
      playSound(key.note);
      key.isPressed = true;
      redraw();
    }
  }
}

function mouseReleased() {
  for (let key of keys) {
    key.isPressed = false;
    redraw();
  }
}

function playSound(note) {
  let synth = new p5.Oscillator();
  synth.setType('sine');
  synth.freq(midiToFreq(note));
  synth.amp(0.5);
  synth.start();
  synth.stop(0.5);
}
