const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon,backgroundImage;




function preload() {
  backgroundImage = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle=-PI/4
  
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(145, 350, 200, 350);
  conon= new Canon(180,110,100,50,angle)

}

function draw() {
  background(189);
  image(backgroundImage,width/2,height/2,width,height);
  Engine.update(engine);
 
  ground.display();
  conon.show();
  tower.display();
  
 
}
