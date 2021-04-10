const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
var engine, world;
var gem, ability;
var gemIMG, abilityIMG
var l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16;
var wind, windIMG;
var henchmen1,henchmen2,henchmen3,henchmen4;

function preload() {}



function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(900,500);
  l1 = new Box(130,175,5 , 280, PI/7);
  l2 = new Box(250, 50, 5, 130, PI/2);
  l3 = new Box(370, 175, 5, 280, PI/-7);
  l4 = new Box(240, 120, 5,80, PI/7);
  l5 = new Box(275, 120, 5, 80, PI/-7);
  l6 = new Box(255, 155, 5, 70, PI/2);
  l7 = new Box(260, 230, 5, 190, PI/2);
  l8 = new Box(260, 190, 5, 170, PI/2);
  l9 = new Box(530, 180, 5, 270, PI);
  l10 = new Box(560, 315, 5, 60, PI/2);
  l11 = new Box(590, 90, 5, 90, PI);
  l12 = new Box(590, 270, 5, 90, PI);
  l13 = new Box(623, 85, 5, 110, PI/6);
  l14 = new Box(623, 275, 5, 110, PI/-6);
  l15 = new Box(643, 140, 5, 100, PI/5);
  l16 = new Box(643, 220, 5, 100, PI/-5);

  wind = new Wind(260, 215);

  henchmen1 = new Spyder(250,20);
  henchmen2 = new Spyder(560,175);
  henchmen3 = new Spyder(130, 415);
  henchmen4 = new Spyder(450, 130);

}



function draw() {
  Engine.update(engine);
  background(0);
  fill("white");
  text(mouseX+","+mouseY, 50, 50);
  l1.display();
  l2.display();
  l3.display();
  l4.display();
  l5.display();
  l6.display();
  l7.display();
  l8.display();
  l9.display();
  l10.display();
  l11.display();
  l12.display();
  l13.display();
  l14.display();
  l15.display();
  l16.display();

  wind.display();

  henchmen1.display();
  henchmen2.display();
  henchmen3.display();
  henchmen4.display();
}

//arya is still just better 
//#arya for pres