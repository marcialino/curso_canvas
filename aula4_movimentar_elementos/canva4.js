let px = 0
let anima

function desenha(){
    var canvas = document.getElementById('desenho1')

    var ctx = canvas.getContext('2d')

    /*Para limpar o canvas e atualiza a posição*/
    ctx.clearRect(0,0,500,500)
    
    ctx.fillStyle = '#f00'
    ctx.fillRect(px,0,50,50)

/*Animação do quadrado*/ 
    px++
    anima=requestAnimationFrame(desenha)

}



