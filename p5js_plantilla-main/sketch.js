var ball = {
  x:10,
  y:50,
  r:70,
  vx:0,
  vy:0,
  color:["grey","blue","red"]
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  circle(ball.x, ball.y, ball.r);

  fill(ball.color[2]);
  ball.vx = 1;
  ball.x = ball.x + ball.vx;
  

  
}