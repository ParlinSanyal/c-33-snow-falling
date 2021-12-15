var backgroundImg;
var snow,snowImg;
var snow2,snow2Img;

function preload(){
  backgroundImg=loadImage("snow2.jpg");
  snowImg=loadImage("snow4.webp");
  snow2Img=loadImage("snow5.webp");

}

function setup() {
  createCanvas(800,400);
 
}

function draw() {
  background(backgroundImg);  
 

  var rand=Math.round(random(1,2))
  if(frameCount%80==0){
     if(rand==1){
       createSnow();
     }    
     else{
       createSnow2();
     }
  }

drawSprites();
}

function createSnow(){
  snow=createSprite(random(50,750),40,10,10);
  snow.addImage(snowImg)
  snow.scale=0.2
  snow.velocityY=6
  snow.lifetime=300;
  snow=Math.round(random(60,10))
}

function createSnow2(){
  snow2=createSprite(random(50,750),40,10,10);
  snow2.addImage(snow2Img)
  snow2.scale=0.1
  snow2.velocityY=6
  snow2.lifetime=300;
  snow2=Math.round(random(60,10))
}
