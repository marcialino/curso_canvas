let canvas = document.getElementById('desenho1')
let ctx= canvas.getContext('2d');

/*Quando se trabalha com linhas é recomendável começar e fechar*/ 
ctx.beginPath()
ctx.lineTo(200,100)/*pontos onde a curva vai começar*/

ctx.quadraticCurveTo(300,50, 400, 100)/*desenho da curva. Quanto maior o y, mais alta será a curvatura. Para desenhar uma curva precisa de dois pontos de coordenadas, ou seja, dois x e dois y.*/ 
ctx.quadraticCurveTo(500,150,600,100)

ctx.stroke()
ctx.closePath();
/*Para colorir o coração: usa-se o ctx.fillStyle e no final chama o ctx.fill()*/
ctx.beginPath()
ctx.fillStyle='#f00'
ctx.lineTo(200,200)
ctx.quadraticCurveTo(300, 150, 200, 300)
ctx.quadraticCurveTo(100, 150, 200, 200)
ctx.stroke()
ctx.fill()
ctx.closePath()


/*Novo coração Azul*/ 
ctx.beginPath()
ctx.fillStyle='#00f'
ctx.lineTo(300,300)
ctx.quadraticCurveTo(420, 250, 300, 400)
ctx.quadraticCurveTo(180, 240, 300, 300)
ctx.stroke()
ctx.fill()
ctx.closePath()


