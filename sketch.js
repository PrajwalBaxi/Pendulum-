const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var chain,ball,ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic : true
  }


  var chain_options={
    isStatic: true
  }

  ground = Bodies.rectangle(200,330,400,20,ground_options)
  World.add(world,ground);

chain = Bodies.rectangle(200,100,200,20,chain_options);
World.add(world,chain);

var ball_options = {

  restitution : 1.0,
  density : 1.0

}

ball  = Bodies.circle(220,200,40,ball_options);
World.add(world,ball);


var options = {
  bodyA : ball,
  bodyB : chain,
  stiffness: 0.004,
  length : 100
}
var string = Constraint.create(options);
World.add(world,string);

fill("WHite");
}


function draw() {
  background(0); 
  Engine.update(engine);

  text("Press space bar to oscillate the pendulam to left and right with mouse",10,20)
  
  fill ("red");
rectMode(CENTER);
rect(chain.position.x,chain.position.y,200,20);

fill(0);
rectMode(CENTER);
//rect(ground.position.x,ground.position.y,400,20);


fill("blue");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40);

strokeWeight(4);
stroke("cyan");
line(ball.position.x,ball.position.y,chain.position.x,chain.position.y)

if(keyCode===32){
ball.position.y = mouseY;
ball.position.x = mouseX;
}
}