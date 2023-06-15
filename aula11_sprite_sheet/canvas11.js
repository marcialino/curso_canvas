let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')

let jogador = new Image()
jogador.src="imagens/jogador.png"
let numSprite=0/*número de localização do sprite*/ 
let posInix= 0 /*posição inicial do sprite x*/
let Limagem=0  /*largura da imagem*/ 
let largSprite=0 /*Largura do Sprite = largura da imagem dividido pelo nº de sprites da imagem. Corresponde a largura do recorte*/
let numSpries=3 /*quantidade de Sprites*/ 

jogador.addEventListener('load', ()=>{
    
    largSprite = jogador.width/numSpries 
    altSprite = jogador.height/numSpries
    posInix=largSprite*numSprite

    /* imagem, XiniRecorte, YiniRecorte, Lrecorte, Arecorte, posx, posy, Limagem, Aimagem*/ 

    ctx.drawImage(jogador, posInix, 0, largSprite, altSprite,0,0,largSprite,altSprite);
})
/*Animação, de um em um segundo*/
let anima= setInterval(()=>{
    ctx.clearRect(0, 0, 500, 500);
    
    numSprite++
    if(numSprite>3){
        numSprite =0
    }
    posInix=largSprite*numSprite
    ctx.drawImage(jogador, posInix,0,largSprite, altSprite, 0,0,largSprite,altSprite)
},200)