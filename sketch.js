var movingrectangle;
var fixedrectangle;





function setup() {
  createCanvas(1200,1200);
 movingrectangle=createSprite(600,600,100,50);
 movingrectangle.shapeColor="purple";
 fixedrectangle=createSprite(800,800,50,100);
 fixedrectangle.shapeColor="purple";
}

function draw() {
  background("yellow");
  movingrectangle.x=World.mouseX;
  movingrectangle.y=World.mouseY;  
  if(movingrectangle.x-fixedrectangle.x<fixedrectangle.width/2+movingrectangle.width/2&&
    fixedrectangle.x-movingrectangle.x<fixedrectangle.width/2+movingrectangle.width/2&&
    movingrectangle.y-fixedrectangle.y<fixedrectangle.height/2+movingrectangle.height/2&&
    fixedrectangle.y-movingrectangle.y<fixedrectangle.height/2+movingrectangle.height/2 ){
    movingrectangle.shapeColor="blue";
    fixedrectangle.shapeColor="blue";
  }else{
    movingrectangle.shapeColor="purple";
    fixedrectangle.shapeColor="purple";
  }
  drawSprites();
}