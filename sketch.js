
var  r = 0;
var g = 50;
var b=255;

function setup(){

  createCanvas(1200,400);

}


function draw(){
  r=map(mouseX,0,1200,0,255);
  g =map(mouseX,50,900,50,100);
  b= map(mouseX,0,1200,255,0);
  background(r,g,b);
  colorMode(HSB, height, height, height);
  fill(mouseY, height, height);
  ellipse(mouseX,mouseY,150,150);
  fill(mouseX, height, height);
  ellipse(mouseX,mouseY,100,100);
  fill(255);
  ellipse(mouseX,mouseY,30,0);
 fill(mouseY, height, height);
  ellipse(mouseX,mouseY,30,30);
}