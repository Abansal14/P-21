var canvas;
var music;
var B1,B2,B3,B4;
var Ball;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
B1=createSprite(0,580,360,30)
B1.shapeColor="red"

B2=createSprite(295,580,200,30)
B2.shapeColor="Green"

B3=createSprite(515,580,200,30)
B3.shapeColor="blue"

B4=createSprite(740,580,220,30)
B4.shapeColor="yellow"


    //create box sprite and give velocity
Ball=createSprite(random(20,750),100,40,40)
Ball.shapeColor="orange"
Ball.velocityX=4;
Ball.velocityY=9;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites()
    Ball.bounceOff(edges)
drawSprites()


    //add condition to check if box touching surface and make it box
    if(B1.isTouching(Ball)&&Ball.bounceOff(B1)){
    Ball.shapeColor="pink"
    music.play()
    }
    if(B3.isTouching(Ball)&&Ball.bounceOff(B3)){
        Ball.shapeColor="Brown"
    }
    if(B4.isTouching(Ball)&&Ball.bounceOff(B4)){
        Ball.shapeColor="grey"
    }
    if(B2.isTouching(Ball)){
        Ball.shapeColor="Black"
        Ball.velocityY=0
        Ball.velocityX=0
        music.stop()
    }

}
