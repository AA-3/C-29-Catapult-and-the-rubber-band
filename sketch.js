const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(850,500);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    platform=new Ground(150,380,300,220)

    box1 = new Box(500,420,70,70);
    box2 = new Box(720,420,70,70);
    pig1 = new Pig(610, 450);
    log1 = new Log(610,360,300, PI/2);

    box3 = new Box(500,340,70,70);
    box4 = new Box(720,340,70,70);
    pig3 = new Pig(610, 320);

    log3 =  new Log(610,280,300, PI/2);

    box5 = new Box(610,260,70,70);
    log4 = new Log(560,220,150, PI/7);
    log5 = new Log(670,220,150, -PI/7);

    bird = new Bird(200,110);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:110});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}