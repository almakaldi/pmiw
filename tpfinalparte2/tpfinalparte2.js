//Alma Kaldi, comisión 4
//https://youtu.be/dHbMVwv6S_4
let pantallaPrincipal;  

function preload(){
  soundFormats('mp3');
  personaje = loadImage("data/porcoavion.png");
  enemigos = loadImage("data/pirata.png");
  disparo = loadSound('data/disparo.mp3');
  logo = loadImage("data/logo.png");
  avion = loadImage("data/avion.png");
}
function setup() {
  createCanvas(640, 480); 
  pantallaPrincipal = new Pantalla();  
}

function draw() {
  background(255, 220, 248);
  pantallaPrincipal.dibujar(); 

  if (pantallaPrincipal.estado === 3) {
    pantallaPrincipal.objJuego.dibujar(); 
  }
}

function keyPressed() {
  pantallaPrincipal.keyPressed();   
}
