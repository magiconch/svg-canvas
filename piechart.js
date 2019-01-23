// 创建数据 Sandwich Burger
let arr = {'Sandwich':10, 'Burger':20, 'meet':30, 'ega':40};

// 默认总和是100%
let startAngle=0;
let p = document.getElementById('piechart');
for (const key in arr) {
       // 起始角度
    let deg = arr[key]*3.6 + startAngle;   // 夹角
    // 参数方程
    let x0 = 100+50*Math.cos(startAngle*Math.PI/180);  // 计算起点X坐标
    let y0 = 100-50*Math.sin(startAngle*Math.PI/180);  // 计算起点y坐标
    let x1 = 100+50*Math.cos(deg*Math.PI/180);        // 计算终点x坐标
    let y1 = 100-50*Math.sin(deg*Math.PI/180);        // 计算终点y坐标   
    startAngle = deg;
    let tempPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    tempPath.setAttribute('d', `M100 100 L${x0} ${y0} A100 100 0 0 1 ${x1} ${y1} Z`);
    tempPath.setAttribute('stroke','black');
    tempPath.setAttribute('stroke-width', '2');
    tempPath.setAttribute('fill', 'green');
    p.appendChild(tempPath);
}


