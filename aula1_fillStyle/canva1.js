var canvas= document.getElementById('desenho1')
var ctx = canvas.getContext('2d')

/*ctx.fillStyle: determina a cor para o estilo.
ctx.fillRect: determina onde o estilo será aplicado no canvas.
*/ 
ctx.fillStyle= '#00F'
ctx.fillRect(0,0,100,100)

ctx.fillStyle = 'rgba(255, 0, 0, 0.5'/*0.5 é opacidade*/
ctx.fillRect(50, 50, 100, 100)