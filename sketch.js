var ball;
var ground;
var box1, box2, box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


//function preload()
//{
	
//}

function setup() {
	createCanvas(800, 700);
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(200,200,20,20);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );

	box1=createSprite(410, 670, 200, 20);
	box2=createSprite(310, 620, 20, 100);
	box3=createSprite(510, 620, 20, 100);

 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();
	keyPressed();
 	drawSprites();
}
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
	Matter.Body.applyforce(ball.body,ball.position,{x:85,y:85});
	
  }
}

