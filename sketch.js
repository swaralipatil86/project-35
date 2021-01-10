//Create variables here
var dog,dogH,dogHappy,dogImage;
var foodS,foodStock;
var database;

function preload()
{
  //load images here
  dogHappy = loadImage("images/dogImg.png");
  dogImage = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  firebase = database.firebase();
  foodStock = database.ref("Food");
  foodStock.on("value",readStock,showError)
  
}


function draw() {  
background(46,139,87)
dog = addImage(dogImage);
  drawSprites();
  //add styles here

  textSize(30);
  fill("yellow");
  stroke("yellow");
  text("Note : press up arrow to feed the dog",200,200)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dogH = addImage(dogHappy);

  }
}

function readStock(data){
foodS = data.val();
}

function showError(){
  console.log("error")
}

function writeStock(x){
if (x <= 0){
  x = 0
}
else{
  x = x-1
}
database.ref('/').update({
  Food:x
})
}



