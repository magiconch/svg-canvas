arcBaseData = {
    'x': 0,
    'y': 0,
    'radius': 5,
    'startAngle': 0,
    'endAngle': 0,
    'anticlockwise': true,
    'isFill': true,
    'isOnlyArc': true, // 是否仅绘制弧边
    'color': '#000'
}

// 绘制圆
function drawArc(arcBaseData, isCanvas) {
    if (isCanvas) {
        drawArcCanvas(arcBaseData);
    } else {
        drawArcSvg(arcBaseData);
    }
}

// 绘制圆弧
function drawSector(sectorBaseData, isCanvas) {
    if (isCanvas) {
        drawSectorCanvas(sectorBaseData);
    } else {
        drawSectorSvg(sectorBaseData);
    }
}

function drawArcCanvas(arcBaseData) {
    if (isFill) {
        ctx.fillStyle = color;
        ctx.save();
        ctx.beginPath();
        ctx.arc(arcBaseData['x'], arcBaseData['y'], arcBaseData['radius'], getAngle(startAngle), getAngle(endAngle), arcBaseData['anticlockwise']);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    } else {
        ctx.strokeStyle = color;
        ctx.save();
        ctx.beginPath();
        ctx.arc(arcBaseData['x'], arcBaseData['y'], arcBaseData['radius'], getAngle(startAngle), getAngle(endAngle), arcBaseData['anticlockwise']);
        if (isOnlyArc) {

        } else {
            ctx.closePath();
        }
        ctx.stroke();
        ctx.restore();
    }

}

function drawArcSvg(arcBaseData) {

}

function drawSectorSvg(sectorBaseData) {

}

function drawSectorCanvas(sectorBaseData) {

}