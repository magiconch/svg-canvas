 // 这是一个需要生成折线图的点集
 let arr = [[300,150], [400,200], [500,300]];
 let p = document.getElementById('test-svg');
 let linePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
 
 linePath.setAttribute('stroke','black');
 linePath.setAttribute('stroke-width', '2');
 linePath.setAttribute('fill', 'none');
let aa = 'M200 200';
for (const index of arr) {
    aa += ` L${index[0]},${index[1]}`;
}
linePath.setAttribute('d',aa);
 p.appendChild(linePath);