let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')

let cores=new Image()

cores.src='imagens/cores.png'
let numSprite=0
let Limagem=0
let largSprite = 0
let numSpries=4
cores.addEventListener('load', ()=>{
    Limagem=cores.width
    largSprite = Limagem/numSpries
    posIniX = largSprite*numSprite
    /*dados para chamar uma imagem:(imagem: XiniRecorte, YinicRecorte, Lrecorte, Arecorte, posX, posY, Limagem, Aimagem*/
 
    
})
let anima=setInterval(()=>{
    numSprite++
    if(numSprite>3){
        numSprite=0
    }
    posIniX = largSprite*numSprite
    ctx.drawImage(cores,posIniX,0,largSprite,50,0,0,200,200)

},1000)

