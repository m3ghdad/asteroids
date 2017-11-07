// function MovingObject(pos, vel, radius, color) {
//   this.pos = pos;
//   this.vel = vel;
//   this.radius = radius;
//   this.color = color;
//
//   function draw(ctx) {

//
//   }
//
//   function move() {
//     pos += vel
//   }
// }

// const canvasEl = document.getElementById("myCanvas");
// canvasEl.width = 500;
// canvasEl.height = 500;
// const ctx = canvasEl.getContext('2d');

const Util = require('./util.js')

const MovingObject = function(pos, vel, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
}

MovingObject.prototype.draw = function draw(ctx) {
  //Draw a circle of the appropiate radius cented at pos
  //fill it with appropiate color

  ctx.fillStyle = this.color;

  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );
  ctx.fill();
};

MovingObject.prototype.move = function move() {
  pos += vel
}

module.exports = MovingObject;
