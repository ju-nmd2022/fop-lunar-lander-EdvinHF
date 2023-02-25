createCanvas(600, 500);
background(255,255,255);
function rocket(x, y)  {
    push();
    translate(x, y);
    fill(0, 0, 0);
    rect(0, 0, 40, 40);
    pop();
}

function space(){
    background(115, 147, 179);
}


let rocketY = 20;
let velocity = 0.1;
let acceleration = 0.07;
let rocketX = 280;
function draw(){
    space();
    rocket(rocketX, rocketY);
    rocketY = rocketY + velocity;
    velocity = velocity + acceleration;
    if (keyIsDown(UP_ARROW)){
        rocketY = rocketY + 1;
    }
}


