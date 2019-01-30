arcBaseData = {
    'x': 0,
    'y': 0,
    'radius': 5,
    'startAngle': 0,
    'endAngle': 0,
    'anticlockwise': true, // 顺时针还是逆时针
    'isFill': true,
    'isOnlyArc': true, // 是否仅绘制弧边
    'color': '#000'
}

sectorBaseData = {
    'x': 0,
    'y': 0,
    'radius': 5,
    'startAngle': 0,
    'endAngle': 0,
    'anticlockwise': true,
    'isFill': true,
    'color': '#fff000'
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
    if (arcBaseData['isFill']) {
        ctx.fillStyle = arcBaseData['color'];
        ctx.save();
        ctx.beginPath();
        ctx.arc(arcBaseData['x'], arcBaseData['y'], arcBaseData['radius'], getAngle(arcBaseData['startAngle']), getAngle(arcBaseData['endAngle']), arcBaseData['anticlockwise']);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    } else {
        ctx.strokeStyle = arcBaseData['color'];
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
    if (sectorBaseData['isFill']) {
        ctx.fillStyle = sectorBaseData['color'];
        ctx.save();
        ctx.beginPath();
        ctx.arc(sectorBaseData['x'], sectorBaseData['y'], sectorBaseData['radius'], getAngle(sectorBaseData['startAngle']), getAngle(sectorBaseData['endAngle']), sectorBaseData['anticlockwise']);
        ctx.lineTo(sectorBaseData['x'], sectorBaseData['y']);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    } else {
        ctx.strokeStyle = sectorBaseData['color'];
        ctx.save();
        ctx.beginPath();
        ctx.arc(sectorBaseData['x'], sectorBaseData['y'], sectorBaseData['radius'], getAngle(sectorBaseData['startAngle']), getAngle(sectorBaseData['endAngle']), sectorBaseData['anticlockwise']);
        ctx.lineTo(sectorBaseData['x'], sectorBaseData['y']);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    }
}

let polylineBaseData  = {
    'pointList': [],
    'isMountNode': true,
    'color': '#ffff00',
    'lineWidth': 2
}

function drawPolyline(polylineBaseData, isCanvas) {
    if (isCanvas) {
        drawPolylineCanvas(polylineBaseData);
    } else {
        drawPolylineSvg(polylineBaseData);
    }
}




/**
 * @todo 这里需要增加折线
 *
 * @param {*} polylineBaseData
 */

function drawPolylineCanvas(polylineBaseData) {
    ctx.strokeStyle = polylineBaseData['color'];
    ctx.save();
    ctx.beginPath();
    ctx.moveTo();
    for (let index = 0; index < polylineBaseData['pointList'].length; index++) {
        let pointX = polylineBaseData['pointList'][index][0];
        let pointY = polylineBaseData['pointList'][index][1];
        ctx.lineTo(pointX,pointY);
        
    }
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = polylineBaseData['color'];
    if (polylineBaseData['isMountNode']) {
        for (let index = 0; index < polylineBaseData['pointList'].length; index++) {
            let pointX = polylineBaseData['pointList'][index][0];
            let pointY = polylineBaseData['pointList'][index][1];
            ctx.arc(pointX, pointY, 3 ,0 ,Math.PI*2);
        }

    }
    ctx.fill();
    ctx.restore();
}

function drawPolylineSvg(polylineBaseData) {

}

