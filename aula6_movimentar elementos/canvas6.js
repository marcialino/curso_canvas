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

    if((px<=0) && (py<=0)){
        dx =1
        dy =0
    }
    if ((px + l_ret >=l_canvas) && (py <=0)){
        dx=0
        dy=1
    }
    if((px+l_ret >=l_canvas)&& (py+a_ret>=a_canvas)){
        dx=-1
        dy=0
    }
    if((px<=0)&& (py+a_ret>=a_canvas)){
        dx=0
        dy=-1
    }
    anima = requestAnimationFrame(desenha)

}

desenha()