class ball {
  constructor(x, y) {
    this.sx = Math.random() * 10 - 5
    this.sy = 0
    this.x = x
    this.y = y
    this.r = Math.random() * 20 + 80
    this.color = colorArray[x % 5]
  }

  move() {
    this.sy += 0.1
    if (this.sx > 0) {
      this.sx -= 0.005
    } else {
      this.sx += 0.005
    }

    if (this.x + this.sx > w - this.r || this.x + this.sx < 0+this.r) {
      this.sx = -0.5 * this.sx
    }
    if (this.y + this.sy > h - this.r || this.y + this.sy < 0+this.r) {
      this.sy = -0.7 * this.sy
    }
    this.x += this.sx
    this.y += this.sy
  }
  
  jump(ang, pow) {
    this.sx = Math.sin(ang)*pow
    this.sy = Math.cos(ang)*pow
  }

  jumpByPos(clicked_x, clicked_y) {
    this.sx = clicked_x - this.x
    this.sx/=2
    this.sy = clicked_y - this.y
    this.sy/=2
  }

  clicked(x, y) {
    if(Math.pow(this.x-x, 2)+Math.pow(this.y-y, 2) <= this.r*this.r && this.x!=x && this.y!=y) {
      return true
    }
    return false
  }
  drawself() {
    this.move()
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false)
    ctx.fill()
  }
}

/** @type {HTMLCanvasElement} */
var c = document.getElementById("testcanvas")
var ctx = c.getContext("2d")
var balls = []
var w, h
var colorArray = ["rgb(65, 105, 225)", "rgb(65, 166, 225)", "rgb(65, 214, 225)", "rgb(65, 225, 190)", "rgb(65, 225, 132)"];
function draw() {
  ctx.clearRect(0, 0, w, h)
  for (let i = 0; i < balls.length; i++) {
    balls[i].drawself()
  }
  requestAnimationFrame(draw);
}
function getWindow_size() {
  w = window.innerWidth;
  h = window.innerHeight;
  c.width = w;
  c.height = h;
}
window.onload = function () {
  getWindow_size()
  document.addEventListener("mousedown", function (event) {
    let flag = 0
    for(let i = 0; i < balls.length; i++) {
      if(balls[i].clicked(event.x, event.y)) {
        flag = 1
        //balls[i].jump(Math.PI, 7)
        balls[i].jumpByPos(event.x, event.y)
      }
    }
    if(!flag) {
      balls.push(new ball(event.x, event.y));
    }
  });
}

draw()


var t = document.getElementById("things")
var t_ctx = t.getContext("2d")

drawBall = function (x, y, r) {
  this.beginPath()
  this.arc(x, y, r, 0, Math.PI * 2)
  this.stroke()
}

drawBall.call(t_ctx,10, 10, 10)
