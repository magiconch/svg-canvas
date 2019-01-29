function initDraw() {

}
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

function initDrawCanvas(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
}

function initDrawSvg() {}

// @param {Number} startX - 线段起点x轴坐标 
// @param {Number} startY - 线段起点y轴坐标 
// @param {Number} endX - 线段终点x轴坐标
// @param {Number} endY - 线段终点y轴坐标 
// @param {Number} lineWidth - 线宽 
// @param {String} color - 线颜色
// @param {Array} setLineDash - 点划线间距
lineBaseData = {
    'startX': 0,
    'startY': 0,
    'endX': 0,
    'endY': 0,
    'lineWidth': 0,
    'color': '#000',
    'setLineDash': []
}

function drawLine(lineBaseData, isCanvas, isSolid) {
    if (isSolid) {
        drawSolidLine(lineBaseData, isCanvas);
    } else {
        drawDashedLine(lineBaseData, isCanvas);
    }
}

// 绘制实线线段 
function drawSolidLine(lineBaseData, isCanvas) {
    if (isCanvas) {
        drawSolidLineCanvas(lineBaseData);
    } else {
        drawSolidLineSvg(lineBaseData);
    }
}

// 绘制虚线
function drawDashedLine(lineBaseData, isCanvas) {
    if (isCanvas) {
        drawDashedLineCanvas(lineBaseData);
    } else {
        drawDashedLineSvg(lineBaseData);
    }
}

function drawSolidLineCanvas(lineBaseData) {
    ctx.save();
    ctx.strokeStyle = lineBaseData['color'];
    ctx.lineWidth = lineBaseData['lineWidth'];
    ctx.beginPath();
    ctx.moveTo(lineBaseData['startX'], lineBaseData['startY']);
    ctx.lineTo(lineBaseData['endX'], lineBaseData['endY']);
    ctx.stroke();
    ctx.restore();
}

function drawSolidLineSvg(lineBaseData) {
    if (lineBaseData['setLineDash']) {
        // TODO
    }
    let solidLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    solidLine.setAttribute('x1', lineBaseData['startX']);
    solidLine.setAttribute('y1', lineBaseData['startY']);
    solidLine.setAttribute('x2', lineBaseData['endX']);
    solidLine.setAttribute('y2', lineBaseData['endY']);
    solidLine.setAttribute('stroke-width', lineBaseData['lineWidth']);
    solidLine.setAttribute('stroke', lineBaseData['color']);
    svg.appendChild(solidLine);
}




function drawDashedLineSvg(lineBaseData) { // 绘制虚线的SVG方法
    let dashedLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    dashedLine.setAttribute('x1', lineBaseData['startX']);
    dashedLine.setAttribute('y1', lineBaseData['startY']);
    dashedLine.setAttribute('x2', lineBaseData['endX']);
    dashedLine.setAttribute('y2', lineBaseData['endY']);
    dashedLine.setAttribute('stroke-width', lineBaseData['lineWidth']);
    dashedLine.setAttribute('stroke', lineBaseData['color']);
    dashedLine.setAttribute('stroke-dasharray', lineBaseData['setLineDash']);
    svg.appendChild(dashedLine);
}

function drawDashedLineCanvas(lineBaseData) { // 绘制虚线的canvas方法
    ctx.save();
    ctx.strokeStyle = lineBaseData['color'];
    ctx.lineWidth = lineBaseData['lineWidth'];
    ctx.beginPath();
    ctx.setLineDash(lineBaseData['setLineDash'])
    ctx.moveTo(lineBaseData['startX'], lineBaseData['startY']);
    ctx.lineTo(lineBaseData['endX'], lineBaseData['endY']);
    ctx.stroke();
    ctx.restore();
}

rectBaseData = {
    'x': 0,
    'y': 0,
    'width': 0,
    'height': 0,
    'isFill': true,
    'color': '#000',
    'rx': 0,
    'ry': 0
}

function drawrect(rectBaseData, isCanvas, isRoundedCorner) {
    if (isRoundedCorner) {
        drawRoundedCornerRect(rectBaseData, isCanvas);
    } else {
        drawSimpleRect(rectBaseData, isCanvas);
    }
}

// 绘制圆角矩形
function drawRoundedCornerRect(rectBaseData, isCanvas) {
    if (isCanvas) {
        drawRoundedCornerRectCanvas(rectBaseData);
    } else {
        drawRoundedCornerRectSvg(rectBaseData);
    }
}

// 绘制普通矩形
function drawSimpleRect(rectBaseData, isCanvas) {
    if (isCanvas) {
        drawSimpleRectCanvas(rectBaseData);
    } else {
        drawSimpleRectSvg(rectBaseData);
    }
}

function drawRoundedCornerRectCanvas(rectBaseData) {

}

function drawRoundedCornerRectSvg(rectBaseData) {

}

function drawSimpleRectSvg(rectBaseData) {

}

function drawSimpleRectCanvas(rectBaseData) {
    ctx.save();
    ctx.strokeStyle = rectBaseData['color'];
    ctx.lineWidth = rectBaseData['lineWidth'];

    if (rectBaseData['isFill']) { // 填充矩形
        ctx.fillStyle = rectBaseData['color'];
        ctx.fill();
    } else {
        // TODO
    }
}

function lineTest(isCanvas, isSolid) {
    // @param {Number} startX - 线段起点x轴坐标 
    // @param {Number} startY - 线段起点y轴坐标 
    // @param {Number} endX - 线段终点x轴坐标
    // @param {Number} endY - 线段终点y轴坐标 
    // @param {Number} lineWidth - 线宽 
    // @param {String} color - 线颜色
    // @param {Array} setLineDash - 点划线间距
    lineBaseData['startX'] = 10;
    lineBaseData['startY'] = 10;
    lineBaseData['endX'] = 100;
    lineBaseData['endY'] = 150;
    lineBaseData['lineWidth'] = 5;
    lineBaseData['color'] = '#fff000';
    lineBaseData['setLineDash'] = [2, 5, 2];
    if (isSolid) {
        lineBaseData['startX'] = 50;
        lineBaseData['startY'] = 50;
        lineBaseData['endX'] = 150;
        lineBaseData['endY'] = 200;
    }
    drawLine(lineBaseData, isCanvas, isSolid);
}
lineTest(true, true);
lineTest(true, false);
lineTest(false, true);
lineTest(false, false);