let sprite;

function setup() {
  createCanvas(400, 400);
  sprite = createSprite(200, 200, 50, 50);
  sprite.draw = function() {
    fill(255, 0, 0);
    textSize(32);
    text("Hola", 0, 0, 50, 50);
  };
}

function draw() {
  background(220);
  drawSprites();
}