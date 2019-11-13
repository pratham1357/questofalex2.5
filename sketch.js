const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;
var Alex,Zane,minions;
var backgroundimg;

function preload() {
  //  getBackgroundImg();
    backgroundimg = loadImage("sprites/world1.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    Alex = new Characters(200,320);

    Zane = new Characters(1000,200);

    minion1 = new Characters(500,200);
    minion2 = new Characters(550,200);
    minion3 = new Characters(600,200);
    minion4 = new Characters(650,200);
    minion5 = new Characters(700,200);
   }

function draw(){
   // if(backgroundImg)
        background(backgroundimg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    Alex.display();
    Zane.display();
    minion1.display();
    minion2.display();
    minion3.display();
    minion4.display();
    minion5.display();
}

