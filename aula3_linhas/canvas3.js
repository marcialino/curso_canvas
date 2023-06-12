var canvas = document.getElementById('desenho1')
var ctx = canvas.getContext('2d')
var px = 50
var py = 50

ctx.moveTo(0,0)
ctx.lineTo(250,250) /*moveu a linha do 0para 250, tanto no eixo x, quanto no eixo y*/
ctx.lineTo(400,250)
ctx.lineTo(400, 150)
ctx.moveTo(250,250) /*volta o início da linha para o centro*/
ctx.lineTo(200,300)
ctx.stroke() /*para preencher a linha*/








