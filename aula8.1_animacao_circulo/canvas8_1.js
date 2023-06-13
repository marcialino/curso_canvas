let canvas = document.getElementById('desenho1')

let ctx = canvas.getContext('2d')
/*tamanhos e quantidades de círculos*/
let tamMax =40
let tamMin = 10
let maxCirculos = 50

/*Definição de ângulos*/ 
let angIni = 0
let angFim = 0

function desenha(){

    ctx.clearRect(0,0,500,500)
for(let i=0; i<maxCirculos; i++){
    ctx.beginPath();
    ctx.fillStyle = 'rgb('+Math.random()*255+','+Math.random()*255+',' +Math.random()*255+')'
    ctx.arc(Math.random()*500, Math.random()*500, Math.random()*tamMax+tamMin,(Math.PI/180)*0, (Math.PI/180)*360, true)
    ctx.fill()
}

/*desenhando círculo preto centro do canvas*/
ctx.beginPath();
    ctx.fillStyle = '#000'
    ctx.arc(250, 250, 150,(Math.PI/180)*angIni, (Math.PI/180)*angFim, false)
    ctx.fill()

    angFim++
    if(angFim>360) 
    angFim = 0

    /*Para animar os círculos*/
    anima=requestAnimationFrame(desenha)
}

desenha()