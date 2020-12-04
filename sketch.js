//Create variables here
var dog,happyDog,database,foodS,foodstock;
var database;
function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog =loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,5,5);
  dog.addImage("dog",dogImg,);
  dog.scale = 0.25;
  //dog.addImage()
  
}


function draw() {  
  background("pink");
  dog.display();
  drawSprites();
  //add styles here

}



