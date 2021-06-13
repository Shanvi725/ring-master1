var canvas;
var PLAY=1;
var END=0;
var gameState = PLAY ;
var END = 0;
var bird,birdImg;
var ring,ringImg;
var bg,bgImg;
var bird,birdImg;
var life, lifeImg;
var l = 120;
var score = 0;

function preload(){
  bgImg = loadImage("images/bg.png");
  birdImg = loadAnimation("images/bird1.png", "images/bird2.png", "images/bird3.png");
  ringImg = loadImage("images/ring.png");
  lifeImg = loadImage("images/life.png");

}

function setup(){
    
  canvas = createCanvas(windowWidth,windowHeight);

  bg = createSprite(900,542);
  bg.addImage(bgImg);
  bg.scale = 2.7;
  bg.depth = 0;

  ring = createSprite(400,200);
  ring.addImage(ringImg);
  ring.scale = 0.3;
  
  birdG = new Group();

  for (i = 30; i < 300; i = i+60) {
    life = createSprite(i,40,20,20);
    life.addImage(lifeImg);
    life.scale = 0.3; 
  }

}

function draw() {

  if (gameState === PLAY){

  

    background(rgb(246,246,246));
    edges=createEdgeSprites();
    ring.bounceOff(edges);

    ring.x = mouseX;
    ring.y = mouseY;

    if(ring.isTouching(birdG) && (keyDown("space"))){
      birdG.destroyEach();
      score = score + 10;
    }
    birdfly();
    
    drawSprites();

    fill("black");
    textSize(30);
    text("SCORE: " +score,1600,60);
  }

  //if(birdG.velocityX > 200){
  //  l = l - 60;
  //  Console.log(l);
  //}

  //if (l = 0){
  //  gameState = END;
  //}

  //if (gameState === END){

  //  ring.velocityX = 0;
  //  ring.velocityY = 0;

  //}

}

function birdfly(){
  if(frameCount%100 === 0){
   
    bird = createSprite(5, 100, 150, 300);
    bird.scale = random(0.3,0.7);
    bird.velocityX = 11;
    bird.addAnimation("bird", birdImg);
    bird.y = random(50,450);
    bird.lifetime = 600;
    birdG.add(bird);
        
   }
  }
