function setup() {
  background("white");
  createCanvas(600, 400);
}

function draw() {
  fundo();
  retangulo1();
  retangulo2();
}

function fundo(){
  fill("white");
  stroke("black");
  rect(0, 0, 600, 400);
}

function retangulo1(){
  fill("red");
  rect(250, 0, 60, 400);
}

function retangulo2(){
  fill("red");
  stroke("red");
  rect(0, 180, 600, 60);
}