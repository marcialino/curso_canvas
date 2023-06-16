let canvas = document.getElementById('desenho1')

let ctx = canvas.getContext('2d')

let jogador= new Image()
jogador.src="imagens/nave.png"

let numSprite =0
let posInix =0
let Limagem = 0
let largSprite =0
let numSpries = 3
let posX = 0
let posY = 0
let velocidade = 5
let cima=false, baixo=false, esquerda=false,direita=false

jogador.addEventListener('load', ()=>{
  
    largSprite = jogador.width/numSpries
    altSprite = jogador.height/numSpries
    posInix = largSprite*numSprite
    ctx.drawImage(jogador, posInix,0,largSprite, altSprite,posX,posY,largSprite, altSprite)
})


const desenha=()=>{
    ctx.clearRect(0, 0, 500, 500);
    /*ctx.drawImage(jogador, posInix, 0,largSprite, altSprite, posX,posY, largSprite, altSprite)*/

    ctx.drawImage(jogador, 120,80, 100, 200); /*desenhar a imagem, nas posições x e y*. Nas dimensões largura:200 e altura: 300*/
}

window.addEventListener('keydown',(event)=>{
    if(event.key==37){ /*se o apertar a tecla 37 que é seta à esquerda, a posição de x vai uma posição à esquerda*/
        esquerda=true

    }else if(event.key==39){ /*se o apertar a tecla 39 que é seta à direita, a posição de x vai uma posição à direita*/
        direita=true
    }

    if(event.key==38){ /*se o apertar a tecla 38 que é seta para cima, a posição de x vai uma posição para cima*/
        cima=true

    }else if(event.key==40){ /*se o apertar a tecla 40 que é seta para baixo, a posição de x vai uma posição para baixo*/
        baixo=true
    }

})

window.addEventListener('keyup',(event)=>{
    if(event.key==37){ /*se o apertar a tecla 37 que é seta à esquerda, a posição de x vai uma posição à esquerda*/
        esquerda=false

    }else if(event.key==39){ /*se o apertar a tecla 39 que é seta à direita, a posição de x vai uma posição à direita*/
        direita=false
    }

    if(event.key==38){ /*se o apertar a tecla 38 que é seta para cima, a posição de x vai uma posição para cima*/
        cima=false

    }else if(event.key==40){ /*se o apertar a tecla 40 que é seta para baixo, a posição de x vai uma posição para baixo*/
        baixo=false
    }

})

const game =()=>{
    if(cima){
        posY-=velocidade
    }
    if(baixo){
        posY+=velocidade
    }
    if(esquerda){
        posX-=velocidade
    }
    if(direita){
        posX+=velocidade
    }

 
    requestAnimationFrame(game)
    desenha()
}

requestAnimationFrame(game)


  

