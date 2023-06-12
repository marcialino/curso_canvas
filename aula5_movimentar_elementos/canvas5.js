let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')
let dx = 1 /*direção x*/ 
let px = 0
let py = 10
let anima
let l_ret = a_ret =50 /*largura e altura do retângulo*/
let l_canvas= a_canvas=500  /*largura e altura do canvas*/ 

function desenha(){
    ctx.clearRect(0,0,500,500)

    ctx.fillStyle ='#f00'
    ctx.fillRect(px,py,l_ret,a_ret)

    px+=dx
    if ((px + l_ret >=l_canvas) || (px <=0))
        dx *= -1 /*inverte a direção do quadrado*/
       
    anima=requestAnimationFrame(desenha)
}

/*Chamar a função desenha*/
desenha()