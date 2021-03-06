var canvas;
var music;
var a , b, c, d, box;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    a = createSprite(100, 550, 170, 20);
    b = createSprite(300, 550, 170, 20);
    c = createSprite(500, 550, 170, 20);
    d = createSprite(700, 550, 170, 20);
    box = createSprite(450, 150, 20, 20);
edges = createEdgeSprites();
    //create 4 different surfaces

a.shapeColor = "red";
b.shapeColor = "blue";
c.shapeColor = "green";
d.shapeColor = "orange";
box.velocityY = 5;
box.velocityX = -3;
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
box.bounceOff(edges)

if (a.isTouching(box)){
box.shapeColor = "red";
box.bounceOff(a);

}
if (b.isTouching(box)){
    box.shapeColor = "blue";
    box.bounceOff(b);
    music.play();
    }
    if (c.isTouching(box)){
        box.shapeColor = "green";
        box.bounceOff(c);
       
        }
        if (d.isTouching(box)){
            box.shapeColor = "orange";
            box.setVelocity(0, 0);
            music.stop();
            }
            



drawSprites();

    //add condition to check if box touching surface and make it box
}
