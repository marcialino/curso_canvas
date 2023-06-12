
var px= 50 /*posição x*/ 
var py= 50 /*posição y*/
var canvas = document.getElementById('desenho1')
var ctx = canvas.getContext('2d')

/*
ctx.fillRect = desenha um retângulo preenchido
ctx.rect: só desenha o quadrado, mas não preenche
ctx.fill: preenche o quadrado desenhado acima.
ctx.clearRect: apaga a cor da área especificada.
*/ 

ctx.fillStyle ='#00f'
ctx.rect(px,py,200,200)
ctx.fill()

ctx.clearRect(100, 100, 100, 100)

