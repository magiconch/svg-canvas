function initDraw() {

}
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

function initDrawCanvas(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
}

function initDrawSvg() {}

/** 
 * 
 * 
 * @param  {Number} startX - 线段起点x轴坐标 
 * @param  {Number} startY - 线段起点y轴坐标 
 * @param {Number} endX - 线段终点x轴坐标
 * @param {Number} endY - 线段终点y轴坐标 
 * @param {Number} lineWidth - 线宽 
 * @param {String} color - 线颜色
 * @param {Array} setLineDash - 点划线间距
 */
lineBaseData = {
    'startX': 0,
    'startY': 0,
    'endX': 0,
    'endY': 0,
    'lineWidth': 0,
    'color': '#000',
    'setLineDash': []
}

/**
 *
 *
 * @param {*} lineBaseData - 描述线段的基础数据
 * @param {boolean} isCanvas - 是否使用canvas作画
 * @param {boolean} isSolid - 是否是实线
 */
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


/**
 * 
 * @param {Number} x - 起点x轴坐标 
 * @param {Number} y - 起点y轴坐标 
 * @param {Number} width - 矩形宽度
 * @param {Number} height - 矩形高度
 * @param {Boolean} isFill - 是否绘制填充，true填充，false设置边框矩形
 * @param {String} color - 线颜色
 * @param {Array} rx - x轴上的圆角半径
 * @param {Number} ry - y轴上的圆角半径
 */
let rectBaseData = {
    'x': 0,
    'y': 0,
    'width': 0,
    'height': 0,
    'isFill': true,
    'color': '#FF0000',
    'rx': 0,
    'ry': 0
}




/**
 *
 *
 * @param {object} rectBaseData - 矩形的数据
 * @param {boolean} isCanvas - 是否采用Canvas作画
 * @param {boolean} isRoundedCorner - 是否是圆角矩形
 */
function drawRect(rectBaseData, isCanvas, isRoundedCorner) {
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
    // 如果 rx或ry大于width,实际值等于的一半
    ctx.save();
    ctx.beginPath();
    const radiusX = rectBaseData['rx'];
    const radiusY = rectBaseData['ry'];
    const rotation = 0;
    let ellipseX = rectBaseData['x'] + rectBaseData['rx'];
    let ellipseY = rectBaseData['y'] + rectBaseData['ry'];
    let startAngle = Math.PI;
    let endAngle = Math.PI * 3 / 2;
    // 左上角
    ctx.ellipse(ellipseX, ellipseY, radiusX, radiusY, rotation, startAngle, endAngle);
    ellipseX = rectBaseData['x'] + rectBaseData['width'] - rectBaseData['rx'];
    startAngle = endAngle;
    endAngle = Math.PI * 2;
    // 右上角
    ctx.ellipse(ellipseX, ellipseY, radiusX, radiusY, rotation, startAngle, endAngle);
    ellipseY = rectBaseData['y'] + rectBaseData['width'] - rectBaseData['ry'];
    startAngle = endAngle;
    endAngle = Math.PI / 2;
    // 左下角
    ctx.ellipse(ellipseX, ellipseY, radiusX, radiusY, rotation, startAngle, endAngle);
    ellipseX = rectBaseData['x'] + rectBaseData['rx'];
    startAngle = endAngle;
    endAngle = Math.PI;
    // 右下角
    ctx.ellipse(ellipseX, ellipseY, radiusX, radiusY, rotation, startAngle, endAngle);
    ctx.closePath();

    if (rectBaseData['isFill']) { // 填充矩形
        ctx.fillStyle = rectBaseData['color'];
        ctx.fill();
    } else {
        ctx.strokeStyle = rectBaseData['color'];
        ctx.stroke();
    }
    ctx.restore();

}

function drawRoundedCornerRectSvg(rectBaseData) {
    let RoundedCornerRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    RoundedCornerRect.setAttribute('x', rectBaseData['x']);
    RoundedCornerRect.setAttribute('y', rectBaseData['y']);
    RoundedCornerRect.setAttribute('width', rectBaseData['width']);
    RoundedCornerRect.setAttribute('height', rectBaseData['height']);
    RoundedCornerRect.setAttribute('rx', rectBaseData['rx']);
    RoundedCornerRect.setAttribute('ry', rectBaseData['ry']);
    if (rectBaseData['isFill']) {
        RoundedCornerRect.setAttribute('fill', rectBaseData['color']);
        RoundedCornerRect.setAttribute('stroke-width', 0);
    } else {
        RoundedCornerRect.setAttribute('fill-opacity', 0);
        RoundedCornerRect.setAttribute('stroke', rectBaseData['color']);

    }
    svg.appendChild(RoundedCornerRect);
}

function drawSimpleRectSvg(rectBaseData) {
    let simpleRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    simpleRect.setAttribute('x', rectBaseData['x']);
    simpleRect.setAttribute('y', rectBaseData['y']);
    simpleRect.setAttribute('width', rectBaseData['width']);
    simpleRect.setAttribute('height', rectBaseData['height']);
    if (rectBaseData['isFill']) {
        simpleRect.setAttribute('fill', rectBaseData['color']);
        simpleRect.setAttribute('stroke-width', 0);
    } else {
        simpleRect.setAttribute('fill-opacity', 0);
        simpleRect.setAttribute('stroke', rectBaseData['color']);

    }
    svg.appendChild(simpleRect);
}

/**
 *
 *
 * @param {*} rectBaseData
 */
function drawSimpleRectCanvas(rectBaseData) {
    ctx.save();
    if (rectBaseData['isFill']) { // 填充矩形
        ctx.fillStyle = rectBaseData['color'];
        ctx.fillRect(rectBaseData['x'], rectBaseData['y'], rectBaseData['width'], rectBaseData['height']);
    } else {
        ctx.strokeStyle = rectBaseData['color'];
        ctx.strokeRect(rectBaseData['x'], rectBaseData['y'], rectBaseData['width'], rectBaseData['height']);
    }
    ctx.restore();
}

function lineTest(isCanvas, isSolid) {
    lineBaseData['startX'] = 10;
    lineBaseData['startY'] = 10;
    lineBaseData['endX'] = 100;
    lineBaseData['endY'] = 150;
    lineBaseData['lineWidth'] = 5;
    lineBaseData['color'] = '#ff0000';
    lineBaseData['setLineDash'] = [2, 10, 2];
    if (isSolid) {
        lineBaseData['startX'] = 50;
        lineBaseData['startY'] = 50;
        lineBaseData['endX'] = 150;
        lineBaseData['endY'] = 200;
    }
    drawLine(lineBaseData, isCanvas, isSolid);
}

function rectTest(isCanvas, isRoundedCorner) {
    rectBaseData['x'] = 10;
    rectBaseData['y'] = 10;
    rectBaseData['width'] = 200;
    rectBaseData['height'] = 200;
    rectBaseData['isFill'] = true;
    rectBaseData['rx'] = 50;
    rectBaseData['ry'] = 100;
    if (isRoundedCorner) {
        rectBaseData['x'] = 300;
        rectBaseData['y'] = 300;
    }
    drawRect(rectBaseData, isCanvas, isRoundedCorner);
}

function arcTest() {}

// lineTest(true, true);
// lineTest(true, false);
// lineTest(false, true);
// lineTest(false, false);
rectTest(true, true);
rectTest(true, false);
rectTest(false, true);
rectTest(false, false);