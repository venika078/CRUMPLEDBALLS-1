
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var bin1,bin2,bin3;

function preload()
{
	
}

function setup() {
	createCanvas(1200,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground (450,430,1500,20);
paper = new Paper(100,390,55);
bin1= new Dustbin(200,200,1,10);
bin2= new Dustbin(800,350,10,150);
bin3= new Dustbin(950,400,150,20);

	//Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
  if (keyDown ( "UPARROW")) {

	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

 }
 
ground.display();
  paper.display();
 // bin1.display();
  //bin2.display();
  //bin3.display();
    drawSprites();
// keyPressed();
}
function keyPressed() {

}



	



