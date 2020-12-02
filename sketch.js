
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall2,wall3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

   
	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
	wall1 = new Wall(400,300,70,22);
	wall2 = new Wall(700,320,70,70);
	wall3 = new Wall(700,320,70,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
drawSprites();
 
  wall1.display();
  wall2.display();
  wall3.display();
  
  
}



