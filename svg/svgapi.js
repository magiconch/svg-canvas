
function initDrawCanvas(canvas, ctx) { // 不太理解这个初始化的作用
  this.svg = svg
  this.ctx = ctx
}

let svg = document.getElementById('');
let canvas = document.getElementById('canvasTest');
let ctx = canvas.getContext("2d");
// svg.getAttributeNS

// 绘制实线线段 
// @param {Number} startX - 线段起点x轴坐标 
// @param {Number} startY - 线段起点y轴坐标 
// @param {Number} endX - 线段终点x轴坐标
// @param {Number} endY - 线段终点y轴坐标 
// @param {Number} lineWidth - 线宽 
// @param {String} color - 线颜色
function drawSolidLineSvg(startX, startY, endX, endY, lineWidth, color) {
  let SolidLine = document.createElementNS('http://www.w3.org/2000/svg', 'line')
  SolidLine.setAttribute('x1', startX)
  SolidLine.setAttribute('y1', endX)
  SolidLine.setAttribute('x2', startY)
  SolidLine.setAttribute('y2', endY)
  SolidLine.setAttribute('stroke-width', lineWidth)
  SolidLine.setAttribute('stroke', color)
  svg.appendChild(SolidLine)
}

function drawSolidLineCanvas(startX, startY, endX, endY, lineWidth, color) {}

// 绘制虚线
// @param {Number} startX - 线段起点x轴坐标 
// @param {Number} startY - 线段起点y轴坐标 
// @param {Number} endX - 线段终点x轴坐标
// @param {Number} endY - 线段终点y轴坐标 
// @param {Number} lineWidth - 线宽
// @param {Array} setLineDash - 点划线间距
// @param {String} color - 线颜色
function drawDashedLineSvg(startX, startY, endX, endY, setLineDash, lineWidth, color) {
  let SolidLine = document.createElementNS('http://www.w3.org/2000/svg', 'line')
  SolidLine.setAttribute('x1', startX)
  SolidLine.setAttribute('y1', endX)
  SolidLine.setAttribute('x2', startY)
  SolidLine.setAttribute('y2', endY)
  SolidLine.setAttribute('stroke-width', lineWidth)
  SolidLine.setAttribute('stroke', color)
  SolidLine.setAttribute('stroke-dasharray', setLineDash)
  svg.appendChild(SolidLine)
}

function drawDottedLineSvg(startX, startY, endX, endY, radius, interval, color) {
  if (!interval) {
    interval = 5
  }
  if (!radius) {
    radius = 3
  }

  let SolidLine = document.createElementNS('http://www.w3.org/2000/svg', 'line')
}

function drawDottedLine(startX, startY, endX, endY, radius, interval, color) {
  if (!interval) {
    interval = 5;
  }
  var isHorizontal = true
  if (startX == endX) {
    isHorizontal = false;
  }
  var len = isHorizontal ? endX - startX : endY - startY
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  var progress = 0;
  while (len > progress) {
    progress += interval;
    if (progress > len) {
      progress = len;
    }
    if (isHorizontal) {
      ctx.moveTo(startX + progress, startY);
      ctx.arc(startX + progress, startY, radius, 0, Math.PI * 2, true);
      ctx.fill();
    } else {
      ctx.moveTo(startX, endX + progress);
      ctx.arc(startX, startY + progress, radius, 0, Math.PI * 2, true);
      ctx.fill();
    }
  }
  ctx.restore();
}
drawDottedLine(10,10,200,200,2,10,'black');
function drawRect(x, y, width, height, isClear) {}