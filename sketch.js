var obj2,obj1;
var cat1,cat2,cat3,cat4

function setup() {
  createCanvas(800,400);
cat1 = createSprite(100,100,50,50);
cat1.shapeColor = "yellow";

cat2 = createSprite(200,100,50,50);
cat2.shapeColor = "yellow";

cat3 = createSprite(300,100,50,50);
cat3.shapeColor = "yellow";


cat4 = createSprite(400,100,50,50);
cat4.shapeColor = "yellow";

  fixedRect = createSprite(400,200,50,80);
  fixedRect.shapeColor = "green";
 // obj2.debug = true;
//  obj1.debug = true;
  movingRect = createSprite(200,200,80,30);
  movingRect.shapeColor = "green"
  
}

function draw() {
  background("black");  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
 
  
 if( isTouching (movingRect,cat1)){
  movingRect.shapeColor = "red";
  cat1.shapeColor = "red";
 }
else{
  movingRect.shapeColor = "green"
  cat1.shapeColor = "green"
}



  drawSprites();
}
