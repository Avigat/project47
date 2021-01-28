const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg, player, playerImg;
var balls=5, lives=3;

function preload() {
    backgroundImg = loadImage("Images/Background.jpg");
    playerImg = loadImage("Images/Player.png");
}

function setup(){
    var canvas = createCanvas(1300,650);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(650,height,1300,20);

    snowball = new Ball(100,100);

    slingshot = new SlingShot(snowball.body,{x:200,y:300});

    enemy = new Enemy(1100,100,50,50);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
    ground.display();
    
    snowball.display();

    slingshot.display();

    enemy.display();

    textSize(20);
    fill("black");
    text("Snowballs left: "+balls,100,70);
    text("Lives left: "+lives,1000,70);
}

function mouseDragged(){
    Matter.Body.setPosition(snowball.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(snowball.body)
    }
}