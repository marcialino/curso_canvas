let canvas = document.getElementById('desenho1')

let ctx = canvas.getContext('2d')

/*Scale: mudança na escala. A mudança acontecerá no Canvas e não apenas no elemento.*/ 

ctx.fillStyle='#00f'
ctx.fillRect(0,0,200,200)

ctx.translate(200, 0)
/*Dobrar a escala do canvas. O quadrado continuará com as medidas de 0,0,200,200, ficando maior, porque aumentar a escala do canvas.*/ 

/*Quadrado vermelho*/ 
ctx.scale(2,2)
ctx.fillStyle='#f00'
ctx.fillRect(0,0,200,200)

/*quadrado verde. Como a escala padrão passou a ser a do quadrado vermelho, para voltar para a 1ª escala padrão, deve colocar(0.5, 0.5)*/
ctx.translate(200,0)
ctx.scale(0.5,0.5)
ctx.fillStyle='#0f0'
ctx.fillRect(0,0,200,200)

