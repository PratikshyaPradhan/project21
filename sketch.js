var bullet, wall, thickness, speed, weight;


function setup(){
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet = createSprite(50, 200, 50, 10);
  wall=createSprite(1200,200,thickness ,height/2);

  bullet.velocityX= speed;
}

function draw(){
  background(0);

 if(hasCollided(bullet,wall)){

  bullet.velocityX=0;

  var Damage = 0.5 * weight * speed * speed/(thickness * thickness* thickness)
  
  if(Damage>10){
    wall.shapeColor = color(255,0,0);
  }
  if (Damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }


}
  drawSprites();
}

function hasCollided(obj1,obj2){

  bulletRightEdge=obj1.x + obj1.width;
  wallLeftEdge=obj2.x;

  if(bulletRightEdge>wallLeftEdge){
    return true;
  }
  else{
    return false;
  }

}