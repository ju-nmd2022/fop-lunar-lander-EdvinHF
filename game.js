let startMenu = true;
let isGameActive = false;
let isGameWon = false;
let isGameLost = false;
let rocketY = 20;
let velocity = 0.1;
let acceleration = 0.07;
let rocketX = 440;
let enter = "Press Enter to start!";

createCanvas(900, 600);
background(255, 255, 255);

function rocket(x, y) {
  push();
  translate(x, y);

  fill(255, 255, 255);
  stroke(0);
  strokeWeight(1);
  rect(10, 10, 20, 50, 5);

  fill(245, 245, 245);
  noStroke();
  rect(12, 12, 16, 36, 3);

  fill(0, 0, 0);
  noStroke();
  rect(14, 48, 12, 4);

  fill(0, 0, 0);
  noStroke();
  rect(14, 54, 12, 4);

  fill(255, 255, 255);
  stroke(0);
  strokeWeight(1);
  triangle(20, 6, 10, 10, 30, 10);

  fill(255, 255, 255);
  stroke(0);
  strokeWeight(1);
  rect(10, 60, 20, 5, 2);

  fill(229, 46, 44);
  stroke(0);
  strokeWeight(1);
  rect(8, 65, 24, 10, 3);

  fill(0, 0, 0);
  noStroke();
  rect(12, 72, 16, 3);

  fill(255, 255, 255);
  stroke(0);
  strokeWeight(1);
  rect(13, 75, 14, 5, 2);

  fill(0, 0, 0);
  noStroke();
  rect(14, 78, 12, 2);

  fill(245, 245, 245);
  noStroke();
  rect(14, 15, 12, 30, 3);

  pop();
}

function space() {
  background(65, 100, 100);
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
  if (keyCode === 13) {
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
