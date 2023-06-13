let canvas = document.getElementById('desenho1')

let ctx = canvas.getContext('2d')
/*tamanhos e quantidades de círculos*/

let tamMax =40
let tamMin = 10
let maxCirculos = 50

function desenha(){
for(let i=0; i<maxCirculos; i++){
    ctx.beginPath();
    ctx.fillStyle = 'rgb('+Math.random()*255+','+Math.random()*255+',' +Math.random()*255+')'
    ctx.arc(Math.random()*500, Math.random()*500, Math.random()*tamMax+tamMin,(Math.PI/180)*0, (Math.PI/180)*360, true)
    ctx.fill()
}



}

desenha()