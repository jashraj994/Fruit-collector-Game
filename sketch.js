var city;
var god;
var obstacle;

function preload(){
  cityImage = loadImage("city.webp")
  godImage = loadImage("lord.png")
  ravanaImage = loadImage("ravana.png")
  obstacleImage = loadImage("carona1.gif")
  obstacle1Image = loadImage("vaccine.gif")
  drugImage = loadImage("drug.gif")
  antidotImage = loadImage("antidot.gif")
  
  
}

function setup(){
 createCanvas(1200,600)

 city = createSprite(100,300,20,10)
 city.addImage(cityImage)
 city.scale = 5;

 god = createSprite(100,400,20,10)
god.addImage(godImage)
god.scale = 0.4;

ravana = createSprite(1000,300,20,10)
ravana.addImage(ravanaImage)
ravana.scale = 0.5;

obstacle = createSprite(800,300,20,10)
obstacle.addImage(obstacleImage)
obstacle.scale = 0.5;

obstacle.visible = false;

obstacle1 = createSprite(200,300,20,10)
obstacle1.addImage(obstacle1Image)
obstacle1.scale = 0.3;
obstacle1.visible = false;

drug = createSprite(800,300,20,10)
drug.addImage(drugImage)
drug.scale = 0.5;
drug.velocityX = -4;

antidot= createSprite(200,300,20,10)
antidot.addImage(antidotImage)
antidot.scale = 0.3;
antidot.visible = false;

}

function draw(){
background(255)



if(keyIsDown(RIGHT_ARROW)){
  god.velocityX = 2;
}
if(keyIsDown(LEFT_ARROW)){
  god.velocityX = -2;
}
if(keyDown("space")){
  god.velocityX = 0;
}
if(keyDown("enter")){
  obstacle1.visible = true;
  obstacle1.velocityX = 4;
}
if(keyDown("ctrl")){
  antidot.visible = true;
  antidot.velocityX = 4;
}



if(antidot.isTouching(drug)){
  drug.visible = false;
}
if(ravana.isTouching(antidot)){
  antidot.visible = false;
  obstacle.visible = true;
  obstacle.velocityX = -4;
}
if(obstacle1.isTouching(obstacle)){
  obstacle.lifetime = 1;
  
}

drawSprites();
if(obstacle1.isTouching(ravana)){
  ravana.visible = false;
  god.visible = false;
  obstacle1.visible = false;
  textSize(100);
  stroke(10);
  fill("green");
  text("Happy Vijay Dashmi ", 200,300);
  }
}
