var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world; 
	//rectMode(CENTER);
	packageSprite=createSprite(350,150, 10,10);
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	box1 = createSprite(300,610,20,100);
	box1.shapeColor = "white";
	box2 = createSprite(400,650,200,20);
	box2.shapeColor = "white";
	box3 = createSprite(500,610,20,100);
	box3.shapeColor = "white";
	World.add(world,box1,box3);

	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);

	box2 = Bodies.rectangle(400, 630,200,20 , {density:1.2,isStatic:true} );
	 World.add(world, box2);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:false} );
	 World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("black");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



