let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')

/*Global Alpha: nível de opacidade, definido para todos os elementos
globalAlpha = 1 .... totalmente visível
globalAlpha = 0 .... totalmente invisível
todos os elementos que estiverem depois do glbalAlphal serão afetados pela sua configuração, antes não.
*/


ctx.fillStyle='#00f'
ctx.fillRect(150,150,100,100)


ctx.globalAlpha='0.5'

ctx.fillStyle='#f00'
ctx.fillRect(100,100,100,100)
ctx.fillRect(300, 100, 100, 100)


ctx.globalAlpha='1'

ctx.fillStyle='#0f0'
ctx.fillRect(500,100,100,100)
ctx.fillRect(700,100,100,100)


