 // 假设这里有一个数组
 let arr = [[300,150], [400,200], [500,300]];
 // 静态实现一个折线
 let p = document.getSvg;
 let linePath = document.createElement('path');
 
 linePath.setAttribute('stroke','black');
 linePath.setAttribute('stroke-width', '2');
 linePath.setAttribute('fill', 'none');
//  for (const index of arr) {
//      let beforeD = linePath.getAttribute('d') + ' '+ `L${index[0]} ${index[1]}` ;
//      linePath.setAttribute('d',beforeD);
//      console.log('haha');
//  }
let aa = 'M200 200';
for (const index of arr) {
    aa += ` L${index[0]} ${index[1]}`;
}
linePath.setAttribute('d',aa);
 p.appendChild(linePath);