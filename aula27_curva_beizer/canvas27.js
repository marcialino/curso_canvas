let canvas = document.getElementById('desenho1')

let ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.lineTo(300, 100)
ctx.fillStyle='#00f'
/*lado direito do coração*/ 
ctx.quadraticCurveTo(400, 0, 500, 100)
ctx.quadraticCurveTo(600, 200, 500, 320)
ctx.quadraticCurveTo(420,420,300,500)
/*Lado esquerdo do coração. Ele é espelhado. Para calcular as coordenadas:
próximo ponto:
xdif=xanterior-xatual (420-300 = 120)
xpróximo = xatual-xdif (300-120 = 180)
próxima coordenada = (180,420)
*/ 
ctx.quadraticCurveTo(180,420,100,320)
ctx.quadraticCurveTo(0,200,100,100)
ctx.quadraticCurveTo(200,0, 300,100)
ctx.fill()
ctx.stroke();
ctx.closePath()

