let canvas = document.getElementById('desenho1')

let ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.lineTo(200, 100)
ctx.fillStyle='#00f'
ctx.quadraticCurveTo(300, 0, 400, 100)
ctx.quadraticCurveTo(500, 200, 400, 320)
ctx.quadraticCurveTo(320,420,200,500)
ctx.fill()
ctx.stroke();
ctx.closePath()


