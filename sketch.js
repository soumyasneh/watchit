
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var obj1;
var obj2;
var obj3;
var obj4;
var obj5;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

var roof;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Ground(800,40,1600,80);

obj1= new paper(500,400,50);
obj2= new paper(600,400,50);
obj3= new paper(700,400,50);
obj4= new paper(800,400,50);
obj5= new paper(900,400,50);

rope1 = new rope(obj1.body,roof.body,-300,0);
rope2 = new rope(obj2.body,roof.body,-200,00);
rope3 = new rope(obj3.body,roof.body,-100,00);
rope4 = new rope(obj4.body,roof.body,0,0);
rope5 = new rope(obj5.body,roof.body,100,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  rope1.display();
  rope2.display();
  rope3.display();	
  rope4.display();
  rope5.display();
 
  obj1.display();
  obj2.display();
  obj3.display();
  obj4.display();
  obj5.display();

  roof.display();

  
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
     Matter.Body.applyForce(obj5.body,obj5.body.position,{x:2,y:2});
     
   }
 }
 
 
  








