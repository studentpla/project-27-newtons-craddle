const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var holder,cord1,cord2,cord3,cord4,cord5;

function preload()
{
	
}

function setup() {
	createCanvas(1360, 550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    holder = new Roof(675,250,210,25);
	bob1 = new Bob(590,450,20);
	bob2 = new Bob(630,450,20);
	bob3 = new Bob(670,450,20);
	bob4 = new Bob(710,450,20);
	bob5 = new Bob(750,450,20);
	cord1 = new Rope(bob1.body,holder.body,-90,0);
	cord2 = new Rope(bob2.body,holder.body,-50,0);
	cord3 = new Rope(bob3.body,holder.body,-10,0);
	cord4 = new Rope(bob4.body,holder.body,30,0);
	cord5 = new Rope(bob5.body,holder.body,70,0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(251,122,39);
  
  drawSprites();
 holder.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 cord1.display();
 cord2.display();
 cord3.display();
 cord4.display();
 cord5.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-45,y:-20})
	}
}



