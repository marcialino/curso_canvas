let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')

/*sombra*/ 
ctx.shadowColor='rgba(0,0,0,0.5)'/*cor da sombra*/ 

/*deslocamento da sombra em relação ao objeto*/ 
ctx.shadowOffsetX=10;
ctx.shadowOffsetY=10
ctx.shadowBlur=10 /*embasamento da sombra*/

/*quadrado 1*/ 
ctx.fillStyle='#f00'
ctx.fillRect(100,100,200,200)

/*quadrado 2*/ 
ctx.shadowColor='rgba(0,0,0,0)'/*cor da sombra*/ 
ctx.fillStyle='#00f'
ctx.fillRect(400,100,200,200)

/*quadrado 3*/
ctx.shadowColor='rgba(0,0,0,0.5)'
ctx.shadowOffsetX=-10;
ctx.shadowOffsetY=10
ctx.shadowBlur=10
ctx.fillStyle='#0f0'
ctx.fillRect(700,100,200,200)