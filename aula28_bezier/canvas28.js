let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d');

/*bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);*/ 

/*coração*/ 
ctx.beginPath()
ctx.moveTo(400, 150)
ctx.fillStyle='#0ff'
ctx.bezierCurveTo(500, 0, 800,200,400,500)
ctx.bezierCurveTo(0,200, 300, 0,400,150)
ctx.fill()
ctx.stroke()
ctx.closePath()



