const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,80,80);
    box2 = new Box(900,300,80,80);
    box3 = new Box(750,200,80,80);
    box4 = new Box(850,200,80,80);
    box5 = new Box(800,130,80,80);
    ground = new Ground(1200,height,2400,20);
    pig1= new PIG(800,300);
    pig2= new PIG(800,200);
    log1= new LOG(800,250,300,PI/2);
    log2= new LOG(800,150,300,PI/2);
    log3= new LOG(750,120,150,PI/7);
    log4= new LOG(840,120,150,-PI/7);
    bird= new BIRD(300,400);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log2.display();
    log1.display();
    log3.display();
    log4.display();
    bird.display();
}