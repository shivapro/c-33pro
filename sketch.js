var snowflakes=[];


function preload(){

bg=loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400);
  
  for(var i = 0; i<25;i++){
    snowflakes.push(new Snow());


  }
}


function draw() {
  background(bg);  
  for(var i = 0; i < snowflakes.length; i++){

      snowflakes[i].display();
      snowflakes[i].update();
  }
  drawSprites();
  
}