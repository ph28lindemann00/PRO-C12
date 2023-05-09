var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage ("path.png")
  boyImg = loadAnimation ("Jake1.png", "Jake2.png", "Jake3.png", "Jake4.png", "Jake5.png")

 
}

function setup(){
  
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg)
  path.velocityY = 2
path.scale=1.2;

 boy=createSprite(180,340,30,30)
 boy.addImage(boyImg)
 
boy.scale=0.08;
  

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visibility = false

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visibility = false
//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  boy.x = World.mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(rightBoundary)
  boy.collide(leftBoundary)
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
