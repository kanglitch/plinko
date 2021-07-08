var Engine = Matter.Engine,
World = Matter.World
    Bodies = Matter.Bodies;

Matter
var engine;
var world
var particles=[];
var Plinko=[];
var boundaries=[]
var cols=11;
var rows=10;

function setup() {
  createCanvas(800,600);
  engine= Engine.create();
  world = engine.world
  world.gravity.y = 0.5;
  newParticle();
  var spacing = width / cols;
  for (var j=0; j<cols; j++){
    for (var i=0; i<rows; i++){
      var x =  i*spacing;
      if (j % 2 == 1){
        x += spacing / 2


      }
      var y = spacing + j * spacing;
       var o = new Plinko(x, y,4)
    plinkos.push(o);
    }
    
  }

var b = new boundary ( width /2 ,height + 50, width, 100)
boundaries.push(b);
for (var j=0; j<cols + 1; j++){
  var x =   i * spacing ;
  var h = 100;
  var w =10;
  var y = height - h / 2
  var b = new boundary (x,y,w,h)
}
}
function newParticle( ){
  var p = new Particle( 300, 0 , 10)
  particles.push(p);
}

function draw() {
  if (frameCount % 60 == 0) {
    newParticle();
  }
  background(51);  
  Engine.update(engine);
  
  
 
 
 for (var i = 0 ; i < plinkos.legnth; i++){
  plinkos[i] .show();
}
for (var i= 0; i <boundaries.length; i++){
  boundaries[i].show();
}
}
