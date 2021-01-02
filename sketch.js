//Create variables here
var dog, happyDog, database
var foodS, foodStock

function preload() {
  //load images here
  dogImg = loadImage("dog.png"); 
  happyImg = loadImage("happyDog.png");
}

function setup() {
  createCanvas(500, 500);
 var dog = Dog.png;
 var happyDog = happyDog.png;
firebaseDatabase = database;
foodStock=database.ref('Food');
foodStock.on("value",readStock);
  
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  drawSprites();
  //add styles here

  textSize
  fill(red)
  stroke(red) 
}

//function to read values from OB
function readStock(data){
  foodS=data.val();
}

//function to write values to OB
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}
