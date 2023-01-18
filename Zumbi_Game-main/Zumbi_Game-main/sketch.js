var bg,bgImg;
var player;
var playerImg , playershoot , playershootImg;
var alien1,alien2,nave,alien1Img,alien2Img,naveImg;
var heart_1,heart_2,heart_3,heart_1Img,heart_2Img,heart_3Img;


function preload(){
  bgImg = loadImage("assets/background_soloLunar.webp")
  playerImg = loadImage("assets/p_de_jogo_5.png")
  playershootImg = loadAnimation("assets/p_de_jogo_1.png","assest/p_de_jogo_2.png","assest/p_de_jogo_3.png","assest/p_de_jogo_4.png",)
  alien1Img = loadImage("assets/alien1.gif")
  alien2Img = loadImage("assets/alien2.gif")
  naveImg = loadImage("assets/nave.gif")
  heart_1Img = loadImage("assets/heart_1.png")
  heart_2Img = loadImage("assets/heart_2.png")
  heart_3Img = loadImage("assets/heart_3.png")
}



function setup() {
  createCanvas(windowWidth,windowHeight );
  //adicionar a imagem de fundo
  bg = createSprite(displayWidth/2,displayHeight/2 + 130,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1
}

function draw() {
  background(0); 

  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando touches (toques)

  //libere as balas e mude a imagem do personagem para a posição de tiro quando a tecla espaço for pressionada

  drawSprites();
}
