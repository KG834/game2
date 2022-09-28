var playercount = 0;
var player;
var database;
var playerIndex = null;
var gamestate = 0;
var game;
var wkey;
var bkey;
var form;
var arr = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A"]
function setup() {
  createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  form = new Form();
  form.display();
  player = new Player();
  player.getCount();
  game = new Game();
  game.getState();
  
}
function preload() {
  wkey = loadImage("wkey.png");
  bkey = loadImage("bkey.png");
}
function setup() {
  
}

function draw() {
  background("white");
  if(playercount == 2){
    game.updateState(1);
  }
 if(gamestate == 1){
  game.start();
 }
  drawSprites();
}
