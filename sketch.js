const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var canvas;
var engine;
var world;
var object;

function setup() {
  canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  //var object_options={ isStatic: true }
  var ground_options={ isStatic: true }
  var ball_options={ restitution : 0.8 }
  //object=Bodies.rectangle(200,100,50,50,object_options);
  ground=Bodies.rectangle(200,390,200,20,ground_options);
  ball= Bodies.circle(200,100,20,ball_options);
  //World.add(world,object);
  World.add(world,ground);
  World.add(world,ball);
  console.log(object);
  //console.log(object.type);
  //console.log(object.position.x);
  //console.log(object.position.y);

}

function draw() {
  background("gold"); 
  Engine.update(engine);
  rectMode(CENTER); 
  //rect(object.position.x,object.position.y,50,50);
  rect(ground.position.x,ground.position.y,50,50);
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20);

}