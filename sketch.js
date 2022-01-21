function setup() {
  createCanvas(800, 800);
}

function draw() {
  if (mouseIsPressed) {
    fill(126);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
