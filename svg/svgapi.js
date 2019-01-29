
function initDrawCanvas(canvas, ctx) { // 不太理解这个初始化的作用
  this.svg = svg
  this.ctx = ctx
}

let svg = document.getElementById('svgtest');
// let canvas = document.getElementById('canvasTest');
// let ctx = canvas.getContext("2d");


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
  let SolidLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
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
  let dottedLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
}
// drawDottedLine(10,10,200,200,2,10,'black');

// 封装直角矩形
// 矩形包括： 填充矩形、边框矩形和清除矩形区域 
// @param {Number} x - 矩形起点的x坐标 
// @param {Number} y - 矩形起点的y坐标 
// @param {Number} width - 矩形宽度 
// @param {Number} height - 矩形高度 
// @param {Boolean} isFill - 是否填充；true绘制填充矩形， false绘制边框矩形 
// @param {String} color - 矩形颜色
function drawRect(x, y, width, height, isFill, color) {
  let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('x',x);
  rect.setAttribute('y',y);
  rect.setAttribute('width',width);
  rect.setAttribute('height',height);
  if (isFill) {
    rect.setAttribute('fill',color);
    rect.setAttribute('stroke-width',0);
  } else {
    rect.setAttribute('fill-opacity',0);
    rect.setAttribute('stroke',color);
  }
  svg.appendChild(rect);
}
drawRect(10, 10, 100, 50, true, 'red');
drawRect(200, 200 , 50, 50, false, 'green');