function makeSVG(tag, attrs) {
    var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs)
        el.setAttribute(k, attrs[k]);
    return el;

}
// 数据
let data = [10, 20, 30, 40];

let p = document.getElementById('piechart');
let cx = 100,
    cy = 100,
    r = 50,
    x0, y0, x1, y1;
let all = 100;
let startAngle = 0;
let dValue,endAngle;
for (i = 0; i < data.length; i++) {
    if (i === 0) {
        x0 = cx + r * Math.cos((0 * Math.PI) / 180);
        y0 = cy + r * Math.sin((0 * Math.PI) / 180);
        startAngle = startAngle + data[0];
        endAngle = startAngle / all * 360;
        x1 = cx + r * Math.cos((endAngle * Math.PI) / 180);
        y1 = cy + r * Math.sin((endAngle * Math.PI) / 180);
    } else if (i > 0 && i < (data.length - 1)) {
        x0 = cx + r * Math.cos((endAngle * Math.PI) / 180);
        y0 = cy + r * Math.sin((endAngle * Math.PI) / 180);
        startAngle = startAngle + data[i];
        endAngle = startAngle / all * 360;
        x1 = cx + r * Math.cos((endAngle * Math.PI) / 180);
        y1 = cy + r * Math.sin((endAngle * Math.PI) / 180);
    } else {
        x0 = cx + r * Math.cos((endAngle * Math.PI) / 180);
        y0 = cy + r * Math.sin((endAngle * Math.PI) / 180);
        x1 = cx + r * Math.cos((0 * Math.PI) / 180);
        y1 = cy + r * Math.sin((0 * Math.PI) / 180);
    }

    if ((data[i] / all * 360) > 180) {
        dValue = `M${cx} ${cy} L${x0} ${y0} A${r} ${r} 0 0 0 ${x1} ${y1} Z`;
    } else {
        dValue = `M${cx} ${cy} L${x0} ${y0} A${r} ${r} 0 0 1 ${x1} ${y1} Z`;
    }
    let tempPath = makeSVG('path', { 'stroke': 'black', 'stroke-width': '2', 'fill': 'green' });
    tempPath.setAttribute('d', dValue);
    p.appendChild(tempPath);
}


