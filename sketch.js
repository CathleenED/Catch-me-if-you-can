var car,carImg
var road,roadImg
var theif,theifImg
var theifrun
var caughtImg,caught
var gamestate=PLAY
var PLAY=1
var END=0
var gamestate=END


function preload(){
carImg=loadImage("car.png")
  roadImg=loadImage("road.png")
  theifImg=loadImage("run2.png")
  caughtImg=loadImage("caught.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  
  caught=createSprite(350,350,20,20)
  caught.addImage(caughtImg)
  caught.scale=0.5
  
   road=createSprite(350,350,windowWidth,windowHeight)
  road.addImage(roadImg)
  road.scale=3
  road.velocityX=-50
  road.x=road.width/2
  
 car=createSprite(150,450,windowWidth,windowHeight)
  car.addImage(carImg)
  car.scale=0.4
  
  
  theif=createSprite(450,450,windowWidth,windowHeight)
  theif.addImage(theifImg)
  theif.scale=0.2
  theif.velocityX=150
  
  
 
}

function draw() {
  background ("white")
  
  if(gameState=END) {
    caught.visible=true
theif.addImage(caughtImg)
  }
  
  if (gameState=PLAY) {
  caught.visible=false
  car.y=World.mouseY;
    car.x=World.mouseX;
  
  if (road.x < 0){
      road.x = road.width/2;
    }
  if (frameCount % 100==0) {
    theif.x=theif.width/2
  }
  }
  
  

    
 drawSprites();
}