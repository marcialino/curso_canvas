let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')

let jogador=new Image()

jogador.src="imagens/spritesheetweb.png" 
let numSprite=0
let posIniX=0
let Limagem=0
let largSprite = 0
let numSpries=4

jogador.addEventListener('load', ()=>{

    largSprite = jogador.width/numSpries
    posIniX = largSprite*numSprite
    altSprite = jogador.height/numSpries

    /*dados para chamar uma imagem:(imagem: XiniRecorte, YinicRecorte, Lrecorte, Arecorte, posX, posY, Limagem, Aimagem*/

    ctx.drawImage(jogador, posIniX, 0,largSprite,altSprite,0,0,largSprite,altSprite);
    
})

let anima=setInterval(()=>{
    ctx.clearRect(0, 0, 500, 500);
    
    numSprite++
    if(numSprite>3)
        numSprite=0
    posIniX=largSprite*numSprite
    ctx.drawImage(jogador,posIniX,0,largSprite,altSprite,0,0,largSprite,altSprite)
},200)

