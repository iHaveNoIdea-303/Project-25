
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Thing=new Can(1400,650,150,20)
	Thing2=new Can(1330,570,20,150)
	Thing3= new Can(1470,570,20,150)
	Floor=new Ground(750,680,1500,50)
	Trash=new Junk(200,650,60)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  text(mouseX+","+mouseY,mouseX,mouseY)
  
 
 
 Thing.display()
 Thing2.display()
 Thing3.display()
 Trash.display()
 Floor.display()
 drawSprites()
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(Trash.body,Trash.body.position,{x:33,y:-23})

	}
}



