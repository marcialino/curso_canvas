let canvas = document.getElementById('desenho1')
let ctx= canvas.getContext('2d')

ctx.fillStyle='#0f0'
ctx.fillRect(0,0,200,200)

ctx.translate(200, 0)

/*2º Quadrado*/
/*Rotacionar o Canvas em */
ctx.rotate(Math.PI / 180 * "45")
ctx.fillStyle='#f00'
ctx.fillRect(0,0,200,200)

/*3º quadrado*/
ctx.translate(200,0)
ctx.fillStyle='#00f'
ctx.fillRect(0,0,200,200)

/*Segundo Canvas - Voltando os quadrados para a posição inicial (0,0,200,200*/
let canvas1 = document.getElementById('desenho2')
let ctx1= canvas1.getContext('2d')

ctx1.fillStyle='#0f0'
ctx1.fillRect(0,0,200,200)

ctx1.translate(200, 0)

/*2º Quadrado*/
/*Rotacionar o Canvas em */
ctx1.rotate(Math.PI / 180 * '45')
ctx1.fillStyle='#f00'
ctx1.fillRect(0,0,200,200)

/*3º quadrado, voltar para a posição original, e rotar -45, em relação à posição do quadrado vermelho.*/
ctx1.rotate(Math.PI/180 * '-45')
ctx1.translate(200,0)
ctx1.fillStyle='#00f'
ctx1.fillRect(0,0,200,200)
