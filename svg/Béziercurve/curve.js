let toChange = document.getElementById('toChange');
let point = document.getElementById('point');
let pointText = document.getElementById('pointText');

function pointMove(e) {

    point.setAttribute('cx', e.x);
    point.setAttribute('cy', e.y);
    pointText.setAttribute('x',e.x+10);
    pointText.setAttribute('y',e.y+5);
    pointText.innerHTML =  `(${e.x}, ${e.y})`;
    toChange.setAttribute('d', `M100 100 Q${e.x} ${e.y} ,300 100`);

}

function pointUp() {
    document.getElementById('curve').removeEventListener('mousemove', pointMove);
    document.getElementById('curve').removeEventListener('mouseup', pointUp);

}

function startChangeLine(e) {
    document.getElementById('curve').addEventListener('mouseup', pointUp);
    document.getElementById('curve').addEventListener('mousemove', pointMove);

}
point.addEventListener('mousedown', startChangeLine);

