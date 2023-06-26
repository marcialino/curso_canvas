let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')

let img = new Image()

img.src="imagens/sheet.png"
 

img.addEventListener('load', ()=>{
    numeroSprite=0
    linhaSprite=0
    posx=0
    posy=0
    largura=600
    altura=600

    /*dados para chamar uma imagem:(imagem: XiniRecorte, YinicRecorte, Lrecorte, Arecorte, posX, posY, Limagem, Aimagem*/

ctx.drawImage(img, posx, posy,largura, altura,posx, posy,largura, altura)
        
})

