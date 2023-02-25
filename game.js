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
function won(x, y){
    push();
    translate(0, 0);
    text('Victory Royal! You have landed succesfully! ',200 , 250 );
    pop();
}

let isGameActive = true;
let rocketY = 20;
let velocity = 0.1;
let acceleration = 0.07;
let rocketX = 280;
function draw(){
    space();
    rocket(rocketX, rocketY);
   


if(isGameActive){

    rocketY = rocketY + velocity;
    velocity = velocity + acceleration;
    moveSideWays = velocity/3;
    if(velocity < 0){
        moveSideWays = velocity * -1;
    }
    

    if (keyIsDown(UP_ARROW) || keyIsDown(87)){
        velocity = velocity - 0.15;
        
    }
    if (keyIsDown(LEFT_ARROW)){
        rocketX = rocketX  - moveSideWays;
        
    }
    if (keyIsDown(RIGHT_ARROW)){
        rocketX = rocketX + moveSideWays;
    }
    if (rocketY > 460 && velocity < 4){
        //isGameActive = false;
        
         
            won();
    

    }
}
}


