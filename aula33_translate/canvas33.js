let canvas = document.getElementById('desenho1')

let ctx = canvas.getContext('2d')



ctx.fillStyle='#00f'
ctx.fillRect(0,0,200,200)

/*Translate - move o canvas e não o elemento. Muda o valor de x e y.*/
ctx.translate(100, 100);

ctx.fillStyle='#f00'
ctx.fillRect(0,0,200,200);

/*O translate foi a partir da posição do 2º quadrado*/
ctx.translate(100, 100);
ctx.fillStyle='#0f0'
ctx.fillRect(0,0,200,200);
