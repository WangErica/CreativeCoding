let video;

function setup() {
  createCanvas(640, 480);
  
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide(); // Hide the default video element
}

function draw() {
  background(0);
  // Display the captured video

  image(video, 0, 0, width, height);
  // Process the pixels

  loadPixels();

  for (let i = 0; i < pixels.length; i += 4) {
    // Invert colors
    pixels[i] = 255 - pixels[i]; // red
    pixels[i + 1] = 255 - pixels[i + 1]; // green
    pixels[i + 2] = 255 - pixels[i + 2]; // blue
  }

  updatePixels();
}
