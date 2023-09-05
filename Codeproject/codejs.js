/** @type {HTMLCanvasElement} **/
const canv = document.getElementById("canvas1");
const ctx = canv.getContext("2d");
const BOX_CORNER_ANGLE = (2 * Math.PI) / 4; // == 90°*(π/180) == (2*π)/4 == 90deg in rad

const NUM_BOXES = 20; // Nice if it can be 360 % ___ === 0

const SHADOW_COLOR = "#00000030"; // Some opacity for overlay effect
const SHADOW_LENGTH = 2000; // Arbitrary Large #

const BASE_HUE = Math.floor(Math.random() * 360);
const HUE_ROTATION = Math.floor(360 / NUM_BOXES);
// const canvasFillColor = window.getComputedStyle(canv).backgroundColor;

let boxesArr = [];
const light = { x: 0, y: 0 }; // is set to Canvas' center in init()

const updateCanvasSize = () => {
  const canv = document.getElementById("canvas1");
  const boundingRect = canv.getBoundingClientRect();
  canv.width = boundingRect.width;
  canv.height = boundingRect.height;
  canvasStartX = boundingRect.x;
  canvasStartY = boundingRect.y;
};

const generateHslColorString = (i) => {
  let hue = BASE_HUE + i * HUE_ROTATION;
  if (hue > 360) {
    hue = Math.floor(hue % 360);
  }

  const saturation = Math.floor(Math.random() * 60) + 40; // between 40 - 100
  return `hsl(${hue}, ${saturation}%, 50%)`;
};

function Box(color) {
  this.size = Math.floor(Math.random() * 20 + 10); // between 10 + 30
  this.x = Math.floor(Math.random() * (canv.width - this.size) + 1); // initial random placement
  this.y = Math.floor(Math.random() * (canv.height - this.size) + 1); // initial random placement
  this.velocity = (60 - this.size) / 40; // 🤷‍♂️ (why not?)
  this.r = Math.random() * Math.PI;
  this.color = color;
  this.directionY = Math.random() < 0.5 ? -1 : 1; //  -1 or +1
  this.directionX = Math.random() < 0.5 ? -1 : 1; //  -1 or +1
  this.directionR = Math.random() < 0.5 ? -1 : 1; //  -1 (clockwise) or +1 (counter-clockwise)

  this.generateBoxCoords = function () {
    const p1 = {
      x: this.x + this.size * Math.sin(this.r),
      y: this.y + this.size * Math.cos(this.r)
    };
    const p2 = {
      x: this.x + this.size * Math.sin(this.r + BOX_CORNER_ANGLE),
      y: this.y + this.size * Math.cos(this.r + BOX_CORNER_ANGLE)
    };
    const p3 = {
      x: this.x + this.size * Math.sin(this.r + BOX_CORNER_ANGLE * 2),
      y: this.y + this.size * Math.cos(this.r + BOX_CORNER_ANGLE * 2)
    };
    const p4 = {
      x: this.x + this.size * Math.sin(this.r + BOX_CORNER_ANGLE * 3),
      y: this.y + this.size * Math.cos(this.r + BOX_CORNER_ANGLE * 3)
    };

    return { p1, p2, p3, p4 };
  };
  this.rotate = function () {
    this.r += this.directionR * this.velocity * 0.01;
    this.x += this.directionX * this.velocity;
    this.y += this.directionY * this.velocity;
  };
  this.draw = function () {
    ctx.save();
    const points = this.generateBoxCoords();
    ctx.beginPath();
    ctx.moveTo(points.p1.x, points.p1.y);
    ctx.lineTo(points.p2.x, points.p2.y);
    ctx.lineTo(points.p3.x, points.p3.y);
    ctx.lineTo(points.p4.x, points.p4.y);
    ctx?.closePath();

    ctx.globalAlpha = 0.8; // Some opacity for boxes overlapping
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx?.stroke();
    ctx.restore();
  };
  this.drawShadow = function () {
    const coords = this.generateBoxCoords();
    var pointsArr = [];
    // var angles = []; ???

    for (point in coords) {
      const angle =
        Math.atan2(light.y - coords[point].y, light.x - coords[point].x) * -1;
      // angles.push(angle); ???
      pointsArr.push({
        startX: coords[point].x,
        startY: coords[point].y,
        endX: coords[point].x + SHADOW_LENGTH * Math.sin(angle - Math.PI / 2),
        endY: coords[point].y + SHADOW_LENGTH * Math.cos(angle - Math.PI / 2)
      });
    }

    for (let i = pointsArr.length - 1; i >= 0; i--) {
      let n = i == 3 ? 0 : i + 1;
      ctx.beginPath();
      ctx.moveTo(pointsArr[i].startX, pointsArr[i].startY);
      ctx.lineTo(pointsArr[n].startX, pointsArr[n].startY);
      ctx.lineTo(pointsArr[n].endX, pointsArr[n].endY);
      ctx.lineTo(pointsArr[i].endX, pointsArr[i].endY);

      // SHADOW GRADIENT
      let shadowGradient = ctx.createLinearGradient(
        this.x,
        this.y,
        this.x + SHADOW_LENGTH,
        this.y + SHADOW_LENGTH
      );
      shadowGradient.addColorStop(0, SHADOW_COLOR);
      shadowGradient.addColorStop(0.1, "transparent");
      ctx.fillStyle = shadowGradient;
      // ctx.fillStyle = SHADOW_COLOR;
      ctx.fill();
    }
  };
  this.updatePosition = function () {
    /**** UPDATE POSITION VARIABLES ON BOX INTERSECTION ****/
    /** BOUNCE Version: **/
    /* Look, you could get fancy trigonometry going to check the
    *  the angle of collision vs angle of rotation to be physics-accurate
    *  but honestly? This is close enough for my purposes...

    if (this.y > canv.height || this.y < 0) {
      this.directionY *= -1;
      this.directionR *= -1;
    }
    if (this.x > canv.width || this.x < 0) {
      this.directionX *= -1;
      this.directionR *= -1;
    }
    */

    /** TELEPORT Version: (through walls a-la Asteroids) **/
    const below = 0 - this.size;
    const above = canv.height + this.size;
    const left = 0 - this.size;
    const right = canv.width + this.size;

    if (this.y >= above) {
      this.y = below;
    } else if (this.y <= below) {
      this.y = above;
    }

    if (this.x <= left) {
      this.x = right;
    } else if (this.x > right) {
      this.x = left;
    }
  };
  this.update = function () {
    this.rotate();
    this.updatePosition();
    this.drawShadow();
    this.draw(); // <~~ Must come *after* drawShadow
  };
}

function renderLight() {
  let gradient;
  // DRAW LIGHT AURA
  // ctx.beginPath();
  // ctx.arc(light.x, light.y, 10, 0, 2 * Math.PI);
  // var gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 1000);
  // gradient.addColorStop(0, "#3b4654");
  // gradient.addColorStop(1, "#2c343f");
  // ctx.fillStyle = gradient;
  // ctx.fill();

  // DRAW LIGHT DOT
  ctx.beginPath();
  ctx.arc(light.x, light.y, 20, 0, 2 * Math.PI);
  gradient = ctx.createRadialGradient(
    light.x,
    light.y,
    0,
    light.x,
    light.y,
    50
  );
  gradient.addColorStop(0, "#eee");
  gradient.addColorStop(1, "transparent");
  ctx.fillStyle = gradient;
  ctx.fill();
}

function drawScene() {
  ctx.clearRect(0, 0, canv.width, canv.height);

  boxesArr.forEach((bx) => {
    bx.update();
  });
  renderLight();

  requestAnimationFrame(drawScene);
}

function init() {
  updateCanvasSize(); // --> Reset

  // Place Initial light/mouse coordinates in the center of the canvas
  light.x = canv.width / 2;
  light.y = canv.height / 2;

  // Fill boxesArr[]
  for (let i = 0; i < NUM_BOXES; i++) {
    const colorString = generateHslColorString(i);
    boxesArr.push(new Box(colorString));
  }

  drawScene();
}

/**** EVENT LISTENERS ****/
canv.addEventListener("mousemove", (e) => {
  light.x = e.offsetX;
  light.y = e.offsetY;
});

document.addEventListener("DOMContentLoaded", (event) => {
  init();
});
window.addEventListener("resize", (event) => {
  updateCanvasSize();
});

/*** I'm not using it, but here is a collision detector: ***/
// function collisionDetection(b){
// 	for (var i = boxesArr.length - 1; i >= 0; i--) {
// 		if(i != b){
// 			var dx = (boxesArr[b].x + boxesArr[b].size) - (boxesArr[i].x + boxesArr[i].size);
// 			var dy = (boxesArr[b].y + boxesArr[b].size) - (boxesArr[i].y + boxesArr[i].size);
// 			var d = Math.sqrt(dx * dx + dy * dy);
// 			if (d < boxesArr[b].size + boxesArr[i].size) {
// 			    boxesArr[b].size = boxesArr[b].size > 1 ? boxesArr[b].size-=1 : 1;
// 			    boxesArr[i].size = boxesArr[i].size > 1 ? boxesArr[i].size-=1 : 1;
// 			}
// 		}
// 	}
// }
