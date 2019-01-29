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
    
}