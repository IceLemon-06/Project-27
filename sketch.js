const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roofObject = new roof(400,250,230,20);
	bob1 = new bob(320,575,40)
	bob2 = new bob(362,565,40)
	bob3 = new bob(402,565,40)
	bob4 = new bob(442,565,40)
	bob5 = new bob(480,575,40)

	rope1=new rope(bob1.body,roofObject.body,-80, 0)
	rope2=new rope(bob2.body,roofObject.body,-40, 0)
	rope3=new rope(bob3.body,roofObject.body,0, 0)
	rope4=new rope(bob4.body,roofObject.body,40, 0)
	rope5=new rope(bob5.body,roofObject.body,80, 0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  roofObject.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}



function keyPressed() {
	if (keyCode === UP_ARROW) {
	
		 Matter.Body.applyForce( bob1.body, bob1.body.position, {x:-50,y:-45} );
	
		  }
	}