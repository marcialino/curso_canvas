let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')

let cores = new Image()
cores.scr="imagens/cores.png"

let numSprite=0
let Limagem=0
let posIniX=0
let largSprite=0
let numSpries=4


cores.addEventListener('load', ()=>{
    Limagem=cores.width
    largSprite=Limagem/numSpries
    posIniX= largSprite*numSprite

    ctx.drawImage(cores, posIniX, 0, largSprite,50,0,0,200,200);
    
})

