var drawBall = function (x, y, r, if_stroke) {
  this.beginPath();
  this.arc(x, y, r, 0, 2 * Math.PI);
  if (if_stroke) {
    this.stroke();
  } else {
    this.fill()
  }
}

var drawRect = function (x, y, w, h, if_stroke) {
  if (if_stroke) {
    this.strokeRect(x, y, w, h)
  } else {
    this.fillRect(x, y, w, h)
  }
}

var get_2d_ctx = function (elmt_id) {
  return document.getElementById(elmt_id).getContext("2d")
}

var c = get_2d_ctx("testcanvas")
drawBall.call(c, 10, 10, 10)
drawRect.call(c, 50, 50, 40, 100, true)
