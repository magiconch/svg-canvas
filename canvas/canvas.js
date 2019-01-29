let testCanvas = document.getElementById('test');
let context =  testCanvas.getContext('2d');
context.beginPath();
context.arc(150, 75, 50, 0, Math.PI*2);
context.strokeStyle = '#f36';
context.stroke();

context.beginPath();
context.arc(100, 100, 20, 0, Math.PI*2);
context.strokeStyle = '#f36';
context.fillStyle = '#000';
context.fill();
context.stroke();

context.beginPath();
context.arc(200, 100, 20, 0, Math.PI*2);
context.strokeStyle = '#f36';
context.fillStyle = '#fff000';
context.fill();
context.stroke();

// 矩形
context.beginPath();
context.rect(250, 20, 100, 100);
context.rect(400, 20, 100, 100);
context.strokeStyle = '#052';
context.fillStyle = '#000';
context.fill();
context.stroke();

// 椭圆
context.beginPath();
context.ellipse(150, 200, 80, 40, Math.PI / 4, 0, 2 * Math.PI);                               
context.stroke();
// 椭圆2
context.beginPath();
context.ellipse(150, 200, 80, 160, 0, Math.PI/2, Math.PI);
context.stroke();

context.beginPath();
context.moveTo(200,200);
context.lineTo(200,300);
context.lineTo(300,300);
context.stroke();

context.beginPath();
