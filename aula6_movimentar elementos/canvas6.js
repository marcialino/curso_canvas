let px = 0
let py = 0
let dx = 1
let dy = 0
let anima
let l_ret = a_ret = 50
let l_canvas = a_canvas = 500
let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')

function desenha(){
    ctx.clearRect(0,0,500,500)
    ctx.fillStyle = '#f00'
    ctx.fillRect(px, py, l_ret, a_ret)

    
    /*definir a borda do quadradinho*/
    ctx.lineWidth = 3
    ctx.stokeStyle = '#000'
    ctx.strokeRect(px, py,l_ret, a_ret )

    px+=dx
    py+=dy
   /*Se o quadrado estiver totalmente à esquerda indo para á direita(px<=0) e no topo da tela (py<=0).Então dx =1 e dy=0, ele vai mover apenas para a direita, não saindo do topo.*/
    if((px<=0) && (py<=0)){  
        dx =1
        dy =0
    }

    /* Se o quadrado tiver percorrido toda a extensão de x, ele começa a descer na posição y. Então: dx=0 e dy=1*/
    if ((px + l_ret >=l_canvas) && (py <=0)){
        dx=0
        dy=1
    }
    /*Quando o quadradinho percorrer todo o y do canvas, ele pára de descer e começa a movimentar para a esquerda. Então: dx =-1 e dy =0*/ 
    if((px+l_ret >=l_canvas) && (py+a_ret>=a_canvas)){
        dx=-1
        dy=0
    }

    /*Quando o quadrado percorrer todo o espaço do canvas à direita ele terá que subir no eixo y. Então: dx = 0 e dy = -1*/ 
    if((px<=0)&& (py+a_ret>=a_canvas)){
        dx=0
        dy=-1
    }
    anima = requestAnimationFrame(desenha)

}

desenha()