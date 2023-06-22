let canvas = document.getElementById('desenho1')

let ctx = canvas.getContext('2d')

/*No gradiente radial, a coloração será em forma de círculo*/ 
gradiente1= ctx.createRadialGradient(30, 30, 5, 100, 100, 300)
gradiente1.addColorStop(0, '#774496')
gradiente1.addColorStop(1,'#D9F312')

ctx.fillStyle=gradiente1
ctx.fillRect(0, 0, 300, 300)

