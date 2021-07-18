

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	var ballDiameter = 40;
	var posX = width/2;
	var posY = height/4 + 200;

	//Create the Bodies Here.
	ball1 = new Ball(posX - ballDiameter*2, posY, ballDiameter);
	ball2 = new Ball(posX - ballDiameter,posY, ballDiameter);
	ball3 = new Ball(posX,posY,ballDiameter);
	ball4 = new Ball(posX +  ballDiameter, posY, ballDiameter);
	ball5 = new Ball(posX + ballDiameter * 2, posY, ballDiameter);

	roof = new Roof(width/2, height/4, 250, 15);

	rope1 = new Rope(ball1.body,roof.body,-ballDiameter*2,0);
	rope2 = new Rope(ball2.body,roof.body,-ballDiameter*1,0);
	rope3 = new Rope(ball3.body,roof.body,0,0); 
 	rope4 = new Rope(ball4.body,roof.body,ballDiameter*1,0); 
	rope5 = new Rope(ball5.body,roof.body,ballDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("255");
  Engine.update(engine);
  stroke(15)
  fill("red")
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  drawSprites();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-70,y:-60}); } 

}

	function createConstraint(constraint) { 
		ballPosition = constraint.bodyA.position 
		roofPosition = constraint.bodyB.position 
		roofBodyOffset = constraint.pointB; 
		roofBodyX = roofBodyPosition.x + roofBodyOffset.x 
		roofBodyY = roofBodyPosition.y + roofBodyOffset.y 
		line(ballBodyPosition.x, ballBodyPosition.y, roofBodyX, roofBodyY); 
	}

