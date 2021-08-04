let boy, boy_running, bomb1, bomb2, bomb3, coin6, coin7, coin8;
let road, still_road, invisibleBoundry1, invisibleBoundry2;
let blast, bomb, power, earn, coin1, coin2, coin3, coin4, coin5;
function preload() {
  //pre-load images
  boy_running = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png");
  still_road = loadImage("path.png");
  bomb = loadImage("bomb.png");
  power = loadImage("power.png");
  earn = loadImage("coin.png");

  // alert("USE MOUSE TO CONTROL THE BOy and " +/n " always alert for bomb")
}

function setup() {
  createCanvas(500, 600);
  //create sprites here
  road = createSprite(250, 300, 200, 400);
  road.addImage("ground", still_road);
  road.scale = 1.5;
  boy = createSprite(200, 450, 50, 100);
  boy.addAnimation("running", boy_running);
  boy.scale = 0.7;
  invisibleBoundry1 = createSprite(-5, 300, 120, 600);
  invisibleBoundry1.visible = false;
  invisibleBoundry2 = createSprite(520, 350, 100, 600);
  invisibleBoundry2.visible = false;
  bomb1 = createSprite(100, -90, 10, 10);
  bomb1.addImage("ground", bomb);
  bomb1.scale = 0.05;
  bomb2 = createSprite(250, -99, 10, 10);
  bomb2.addImage("ground", bomb);
  bomb2.scale = 0.05;
  bomb3 = createSprite(400, 50, 10, 10);
  bomb3.addImage("ground", bomb);
  bomb3.scale = 0.05;

  road.velocityY = 10;
  bomb1.velocityY = 10;
  bomb2.velocityY = 10;
  bomb3.velocityY = 10;
  coin1 = createSprite(120, 100, 50, 100);
  coin1.addImage(earn);
  coin1.scale = 0.3;

  coin2 = createSprite(120, 140, 50, 100);
  coin2.addImage(earn);
  coin2.scale = 0.3;

  coin3 = createSprite(120, 180, 50, 100);
  coin3.addImage(earn);
  coin3.scale = 0.3;

  coin4 = createSprite(280, 200, 50, 100);
  coin4.addImage(earn);
  coin4.scale = 0.3;

  coin5 = createSprite(280, 240, 50, 100);
  coin5.addImage(earn);
  coin5.scale = 0.3;

  coin6 = createSprite(400, 300, 50, 100);
  coin6.addImage(earn);
  coin6.scale = 0.3;

  coin7 = createSprite(400, 340, 50, 100);
  coin7.addImage(earn);
  coin7.scale = 0.3;

  coin8 = createSprite(400, 380, 50, 100);
  coin8.addImage(earn);
  coin8.scale = 0.3;

  blast = createSprite(300, 300, 100, 100);
  blast.addImage("ground", power);
  blast.visible = false;

  coin1.velocityY = 10;
  coin2.velocityY = 10;
  coin3.velocityY = 10;
  coin4.velocityY = 10;
  coin5.velocityY = 10;
  coin6.velocityY = 10;
  coin7.velocityY = 10;
  coin8.velocityY = 10;
}
function draw() {
  background("lightgreen");

  boy.x = mouseX;
  /*if(road.y>=400)
  {
    road.y=300;
  }
 */
  if (road.y > 650) {
    road.y = height / 2;
  }

  if (bomb1.y > 800) {
    bomb1.y = -500;
  }


  if (bomb2.y > 1000) {
    bomb2.y = -480;
  }


  if (bomb3.y > 800) {
    bomb3.y = -500;
  }

  if (boy.isTouching(bomb1)
    || boy.isTouching(bomb2)
    || boy.isTouching(bomb3)) {
    blast.visible = true;
    boy.visible = false;
    road.velocityY = 0;
    coin1.visible = false;
    coin2.visible = false;
    coin3.visible = false;
    coin4.visible = false;
    coin5.visible = false;
    coin6.visible = false;
    coin7.visible = false;
    coin8.visible = false;
    bomb1.visible = false;
    bomb2.visible = false;
    bomb3.visible = false;

  }

  if (boy.isTouching(coin1)) {
    coin1.y = -50;
  }


  if (boy.isTouching(coin2)) {
    coin2.y = -50;
  }


  if (boy.isTouching(coin3)) {
    coin3.y = -50;
  }


  if (boy.isTouching(coin4)) {
    coin4.y = -50;
  }


  if (boy.isTouching(coin5)) {
    coin5.y = -50;
  }


  if (boy.isTouching(coin6)) {

    coin6.y = -50;
  }


  if (boy.isTouching(coin7)) {
    coin7.y = -50;
  }

  if (boy.isTouching(coin8)) {
    coin8.y = -50;
  }

  if (coin1.y > 1000) {
    coin1.y = -500;
  }


  if (coin1.y > 1000) {
    coin1.y = -500;
  }
  if (coin2.y > 1000) {
    coin2.y = -500;
  }
  if (coin3.y > 1000) {
    coin3.y = -500;
  }
  if (coin4.y > 1000) {
    coin4.y = -500;
  }
  if (coin5.y > 1000) {
    coin5.y = -500;
  }
  if (coin6.y > 1000) {
    coin6.y = -500;
  }
  if (coin7.y > 1000) {
    coin7.y = -500;
  }
  if (coin8.y > 1000) {
    coin8.y = -500;
  }

  boy.collide(invisibleBoundry1);
  boy.collide(invisibleBoundry2);


  drawSprites();
}
