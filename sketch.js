var starImg,bgImg;
var star, starBody;
var fada, fadaAnimation;
var musica;
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    musica = loadSound("sound/JoyMusic.mp3");
    starImg = loadImage("images/star.png");
    fadaAnimation = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
    
}

function setup() {
    createCanvas(800, 750);

    musica.play();

    fada = createSprite(125,550,20,20);
    fada.addAnimation("fada",fadaAnimation);
    fada.scale = 0.3;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
function draw(){
background(bgImg);
   star.x = starBody.position.x;
   star.y = starBody.position.y;
    if(keyDown("A")){
    fada.x = fada.x - 2;
 }
    if(keyDown("D")){
        fada.x = fada.x + 2;
    }
    if(keyDown("S")){
      Matter.Body.setStatic(starBody,false);
    }
    if(star.y>470&&starBody.position.y>470){
        Matter.Body.setStatic(starBody,true);
    }
    
    drawSprites();
}