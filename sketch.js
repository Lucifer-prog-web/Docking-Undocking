var iss,issImg,bg,bgImg;
var spacecraft,spacecraftImg,spacecraft2,spacecraftImg2,spacecraft3,spacecraftImg3,spacecraft4,spacecraftImg4;  
var tester,tester2

function preload(){

  spacecraftImg = loadAnimation("Docking-undocking/spacecraft1.png","Docking-undocking/spacecraft2.png","Docking-undocking/spacecraft3.png","Docking-undocking/spacecraft4.png");
  spacecraftImg2 = loadImage("Docking-undocking/spaceCraft1.png");
  issImg = loadImage("Docking-undocking/iss.png");
  bgImg = loadImage("Docking-undocking/spacebg.jpg");
}

function setup() {
  createCanvas(800,400);
 iss = createSprite(400, 250);
 iss.addImage("antriksh",issImg);
 iss.scale = 0.9

 tester = createSprite(340,280)
 tester.scale = 0.1
 //tester.visible = false;

 tester2 = createSprite(340,283)
 tester2.scale = 0.1
 //tester.visible = false;
 

 spacecraft = createSprite(200,125);
 spacecraft.addAnimation("ufo",spacecraftImg);
 spacecraft.scale = 0.14

 spacecraft2 = createSprite(340,313);
 spacecraft2.addImage("udaan",spacecraftImg2);
 spacecraft2.scale = 0.14
 spacecraft2.visible = false;
 

}

function draw() {

  //controlls of the spacecraft
  if(keyDown("up")){
    spacecraft.velocityY -=1 
  }
  if(keyDown("down")){
    spacecraft.velocityY +=1 
  }
  if(keyDown("left")){
    spacecraft.velocityX -=1 
  }
  if(keyDown("right")){
    spacecraft.velocityX +=1 
  }
  
  if(spacecraft.isTouching(tester2)){
    spacecraft.velocityX = 0;
    spacecraft.velocityY = 0;

    text("Docking Successful!");
    fill("white");
    stroke("yellow")

    spacecraft.visible = false;
    spacecraft2.visible = true
    

  }

  background(bgImg);

  drawSprites();
}


