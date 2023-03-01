function setup() {
  createCanvas(1050, 600);
}
let startMenu = true;
let isGameActive = false;
let isGameWon = false;
let isGameLost = false;
let rocketY = 20;
let velocity = 0.1;
let acceleration = 0.07;
let rocketX = 90;
let enter = "Press Enter to start!";

noCursor();
frameRate(60);

function beam() {
  fill(200);
  for (let i = 0; i < 5; i++) {
    push();

    strokeWeight(2);
    stroke(57, 255, 20);
    let size = random(1, 20);
    ellipse(rocketX + 19, rocketY + 80, size * 1.2, size / 2.5);
    ellipse(rocketX + 19, rocketY + 92, size * 1.5, size / 2);
    ellipse(rocketX + 19, rocketY + 105, size * 2, size / 2);
    pop();
  }
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
  background(65, 100, 100);
  fill(255);
  noStroke();

  fill(22);

  push();
  fill(14);
  scale(3);
  translate(-400, -400);
  beginShape();

  vertex(0, 50);
  bezierVertex(0, 37, 20, 50, 20, 550);
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
  endShape();

  pop();
  push();
  fill(23);
  scale(2);

  translate(-29, -271);
  beginShape();

  vertex(0, 37);
  bezierVertex(0, 37, 20, 50, 20, 550);
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
  endShape();

  pop();
  fill(40);
  strokeWeight(6);
  stroke(255, 255, 255);
  beginShape();
  vertex(0, 37);
  bezierVertex(0, 37, 20, 50, 20, 550);
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
  endShape();
  noStroke();

  strokeWeight();
  beginShape();
  vertex(0, 37);
  bezierVertex(0, 37, 20, 50, 20, 550);
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
  endShape();

  noStroke();
}

function won() {
  push();

  text("Victory Royal! You have landed succesfully! ", 380, 250);
  pop();
}

function lost(x, y) {
  push();
  translate(0, 0);
  text("Slow down cowboy! You lost!", 415, 250);
  pop();
}

function again() {
  text("Press R to restart", 450, 300);
}

function restart() {
  isGameActive = true;
  isGameLost = false;
  isGameWon = false;
  rocketY = 20;
  velocity = 0.1;
  acceleration = 0.09;
  rocketX = 90;
  beamHeight = 0;
}
function menu() {
  text(enter, 460, 300);
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
      beam();
      beamHeight = moveSideWays * 3;
    }
    if (keyIsDown(LEFT_ARROW)) {
      rocketX = rocketX - moveSideWays - 0.5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      rocketX = rocketX + moveSideWays + 0.5;
    }
    if (rocketY < -50) {
      velocity = -velocity;
    }
    if (rocketY > 513 && rocketX > 865 && velocity < 0.9) {
      isGameActive = false;
      isGameWon = true;
    }
    if (
      rocketX > 980 ||
      (rocketY > 513 && rocketX <= 851) ||
      (rocketY > 513 && velocity >= 0.9) ||
      (rocketX > 770 && rocketX < 865 && rocketY > 480) ||
      (rocketX > 620 && rocketX < 730 && rocketY > 479) ||
      (rocketX > 490 && rocketX < 578 && rocketY > 479) ||
      (rocketX > 320 && rocketX < 450 && rocketY > 390) ||
      (rocketX > 290 && rocketX < 320 && rocketY > 475) ||
      (rocketX > 220 && rocketX < 290 && rocketY > 500) ||
      (rocketX > 116 && rocketX < 220 && rocketY > 460) ||
      (rocketX > 40 && rocketX < 116 && rocketY > 410) ||
      (rocketX < 40 && rocketY > 440) ||
      rocketX < 15
    ) {
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
