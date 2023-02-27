let startMenu = true;
let isGameActive = false;
let isGameWon = false;
let isGameLost = false;
let rocketY = 20;
let velocity = 0.1;
let acceleration = 0.07;
let rocketX = 90;
let enter = "Press Enter to start!";
let beamHeight = 0;

createCanvas(1050, 600);
function beam(x, y) {
  translate(x, y);
  fill(57, 255, 20);
  triangle(50, 72, 70, 72, 59, beamHeight);
}

function rocket(x, y) {
  push();
  translate(x, y);

  fill(170);
  stroke(255);
  strokeWeight(2);
  ellipse(20, 65, 20, 20);
  fill(230, 230, 230);

  stroke(255);
  strokeWeight(2);
  ellipse(20, 70, 40, 12);

  fill(57, 255, 20);
  noStroke();
  stroke(130);
  ellipse(20, 72, 25, 5);
  pop();
}

function space() {
  createCanvas(1050, 600);
  background(65, 100, 100);
  fill(255);
  noStroke();
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(1, 5);
    ellipse(x, y, size, size);
  }
  fill(22);
  strokeWeight(8);
  stroke(255, 255, 255);
  beginShape();
  vertex(0, 37);
  bezierVertex(0, 37, 20, 20, 20, 550);
  bezierVertex(50, 580, 70, 450, 120, 500);
  bezierVertex(170, 550, 180, 500, 250, 570);
  bezierVertex(320, 640, 400, 350, 460, 500);
  bezierVertex(520, 650, 540, 500, 580, 570);
  bezierVertex(620, 640, 680, 500, 740, 580);
  bezierVertex(800, 660, 840, 470, 870, 590);
  bezierVertex(870, 590, 900, 590, 1000, 590);
  bezierVertex(1050, 580, 1000, 20, 1050, 30);
  vertex(1050, 600);
  vertex(0, 600);
  endShape(CLOSE);
  noStroke();

  strokeWeight(4);
  beginShape();
  vertex(0, 37);
  bezierVertex(0, 37, 20, 20, 20, 550);
  bezierVertex(50, 580, 70, 450, 120, 500);
  bezierVertex(170, 550, 180, 500, 250, 570);
  bezierVertex(320, 640, 400, 350, 460, 500);
  bezierVertex(520, 650, 540, 500, 580, 570);
  bezierVertex(620, 640, 680, 500, 740, 580);
  bezierVertex(800, 660, 840, 470, 870, 590);
  bezierVertex(870, 590, 900, 590, 1000, 590);
  bezierVertex(1050, 580, 1000, 20, 1050, 30);
  vertex(1050, 600);
  vertex(0, 600);
  endShape(CLOSE);

  noStroke();
}

function won(x, y) {
  push();
  translate(0, 0);
  text("Victory Royal! You have landed succesfully! ", 340, 250);
  pop();
}

function lost(x, y) {
  push();
  translate(0, 0);
  text("Slow down cowboy! You lost!", 370, 250);
  pop();
}

function again() {
  text("Press R to restart", 410, 300);
}

function restart() {
  isGameActive = true;
  isGameLost = false;
  isGameWon = false;
  rocketY = 20;
  velocity = 0.1;
  acceleration = 0.09;
  rocketX = 440;
}
function menu() {
  text(enter, 410, 300);
}

function keyPressed() {
  if (
    keyCode === 13 &&
    isGameActive === false &&
    isGameLost === false &&
    isGameWon === false
  ) {
    isGameActive = true;
  }
}
function draw() {
  space();
  rocket(rocketX, rocketY);
  menu();

  if (isGameActive) {
    rocketY = rocketY + velocity;
    velocity = velocity + acceleration;
    moveSideWays = velocity / 3;
    enter = "";

    if (velocity < 0) {
      moveSideWays = velocity * -0.5;
    }

    if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
      velocity = velocity - 0.15;
      beam(rocketX - 40, rocketY + 5);
      beamHeight = beamHeight + moveSideWays;
    }
    if (keyIsDown(LEFT_ARROW)) {
      rocketX = rocketX - moveSideWays - 0.5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      rocketX = rocketX + moveSideWays + 0.5;
    }

    if (rocketY > 520 && velocity < 0.8) {
      isGameActive = false;
      isGameWon = true;
    }
    if (rocketY > 520 && velocity >= 0.8) {
      isGameActive = false;
      isGameLost = true;
    }
  } else if (isGameWon) {
    won();
    again();
    if (keyIsDown(82)) {
      restart();
    }
  } else if (isGameLost) {
    lost();
    again();
    if (keyIsDown(82)) {
      restart();
    }
  }
}
