const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ball;
var stand1;
var ball;
var slingshot;
var polygon_img;

function preload() {
  
  polygon_img=loadImage('photos/hexagon.jpeg');
    
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground=new Ground();
    stand1=new Stand(390,300,250,10);
    

    //first floor
    block8 = new Box(330,235,30,40);
    block9 = new Box(360,235,30,40);
    block10 = new Box(390,235,30,40);
    block11 = new Box(420,235,30,40);
    block12 = new Box(450,235,30,40);

    //second floor
    
    block13=new Box(360,195,30,40);
    block14=new Box(390,195,30,40);
    block15=new Box(420,195,30,40);
  
    //third floor

    block16=new Box(390,155,30,40);
 
    ball=Bodies.circle(50,200,20);
    World.add(world,ball);

    slingshot=new SlingShot(this.ball,{x:100,y:200});
}





function draw() {
  background(000,000,000);  
  drawSprites();

  ground.display();

  fill("gold")
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turqouise")
  block13.display();
  block14.display();
  block15.display();
  fill("purple")
  block16.display();

  stand1.display();

  slingshot.display();
  


}

function mouseDragged(){

Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});

}
function mouseReleased(){

slingshot.fly();

}
