
// 引入待测试函数
document.write("<script type='text/javascript' src='b.js'></script>");

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

function arcTest() {
    arcBaseData = {
        'x': 100,
        'y': 100,
        'radius': 50,
        'startAngle': 0,
        'endAngle': 270,
        'anticlockwise': false, // 顺时针还是逆时针
        'isFill': false,
        'isOnlyArc': true, // 是否仅绘制弧边
        'color': '#000'
    }
    
    drawArc(arcBaseData,true);

}

function sectorTest() {
    sectorBaseData = {
        'x': 100,
        'y': 100,
        'radius': 50,
        'startAngle': 0,
        'endAngle': 270,
        'anticlockwise': false, // 顺时针还是逆时针
        'isFill': true,
        'color': '#000'
    }

    drawSector(sectorBaseData,true);
}


function polylineTest() {
    polylineBaseData  = {
        'pointList': [[10,10], [50,50],[100,80],[200, 200]],
        'isMountNode': true,
        'color': '#fff00',
        'lineWidth': 1
    }
    drawPolyline(polylineBaseData,true);
}

// lineTest(true, true);
// lineTest(true, false);
// lineTest(false, true);
// lineTest(false, false);
rectTest(true, true);
rectTest(true, false);
rectTest(false, true);
rectTest(false, false);

// arcTest();
// sectorTest();
// polylineTest();