let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')

/*Jogador*/
const jogadorDados={
    vidas:3,
    energia:100,
    numeroSprite:0,/*posição zero: 1ª figura*/ 
    linhaSprite:0,/*posição zero: 1ª figura*/
    posx:0,
    posy:0,
    velocidade:5,
    img:"imagens/spritesheetweb.png",
    spritesPorLinha:4,
    spritesPorColuna:4,
    largura:200,/*largura e altura real de cada figura*/
    altura:270,
    larguraFinal:70,/*largura e altura que serão mostradas as figuras*/
    alturaFinal:100,
    dirx:0,/*não está movendo no x. dirx-1: move para a esquerda. dirx=1 move para a direita*/
    diry:0,
    esquerda:false,
    direita:false,
    cima:false,
    baixo:false,
    andando:false,
    atrasoSprite:5,
    maxAtrasoSprite:5,
    jogadorImg:new Image(),
    
}
const npcDados={
    vidas:3,
    energia:100,
    numeroSprite:0,/*posição zero: 1ª figura*/ 
    linhaSprite:0,/*posição zero: 1ª figura*/
    posx:800,
    posy:400,
    velocidade:5,
    img:"imagens/spritesheetweb.png",
    spritesPorLinha:4,
    spritesPorColuna:4,
    largura:200,/*largura e altura real de cada figura*/
    altura:270,
    larguraFinal:70,/*largura e altura que serão mostradas as figuras*/
    alturaFinal:100,
    dirx:0,/*não está movendo no x. dirx-1: move para a esquerda. dirx=1 move para a direita*/
    diry:0,
    esquerda:false,
    direita:false,
    cima:false,
    baixo:false,
    andando:false,
    atrasoSprite:5,
    maxAtrasoSprite:5,
    jogadorImg:new Image(),
    
}
const cpuDados={
    vidas:3,
    energia:100,
    numeroSprite:0,/*posição zero: 1ª figura*/ 
    linhaSprite:0,/*posição zero: 1ª figura*/
    posx:800,
    posy:0,
    velocidade:5,
    img:"imagens/spritesheetweb.png",
    spritesPorLinha:4,
    spritesPorColuna:4,
    largura:200,/*largura e altura real de cada figura*/
    altura:270,
    larguraFinal:70,/*largura e altura que serão mostradas as figuras*/
    alturaFinal:100,
    dirx:0,/*não está movendo no x. dirx-1: move para a esquerda. dirx=1 move para a direita*/
    diry:0,
    esquerda:false,
    direita:false,
    cima:false,
    baixo:false,
    andando:false,
    atrasoSprite:5,
    maxAtrasoSprite:5,
    jogadorImg:new Image(),
    
}


const objsJogos=[jogadorDados,cpuDados,npcDados]

/*Função de desenhar genérica, para todos os elementos*/

const desenhar=(ctx,objsJogos)=>{
    objsJogos.forEach((dados)=>{
        dados.jogadorImg.src=dados.img

        /*Controle para não sair da tela*/
        if(dados.posx<0){
            dados.posx=0
        }
        if(dados.posx>ctx.canvas.width-dados.larguraFinal){
            dados.posx=ctx.canvas.width-dados.larguraFinal
        }
        if(dados.posy<0){
            dados.posy=0
        }
        if(dados.posy>ctx.canvas.height-dados.alturaFinal){
            dados.posy=ctx.canvas.height-dados.alturaFinal
        }
    
        /*Controle da movimentação*/ 
        dados.posx+=dados.dirx*dados.velocidade
        dados.posy+=dados.diry*dados.velocidade
    
        /*Definição da linha da tabela Sprite*/
        if(dados.esquerda)dados.linhaSprite=2
        if(dados.direita)dados.linhaSprite=3
        if(dados.cima)dados.linhaSprite=1
        if(dados.baixo)dados.linhaSprite=0
    
        /*ctx.drawImage(imagem, inicioX,inicioY, largura, altura, destinoX, destinoY, larguraFinal, alturaFinal)*/ 
        ctx.drawImage(dados.jogadorImg, (dados.jogadorImg.width/dados.spritesPorLinha)*dados.numeroSprite, (dados.jogadorImg.height/dados.spritesPorColuna)*dados.linhaSprite, dados.largura, dados.altura, dados.posx, dados.posy, dados.larguraFinal,dados.alturaFinal)
    
        /*Controle de mudança do sprite*/ 
        if(dados.andando){
            if(dados.atrasoSprite>0){
                dados.atrasoSprite--
            }else{
                dados.atrasoSprite=dados.maxAtrasoSprite
                if(dados.numeroSprite<dados.spritesPorColuna-1){
                dados.numeroSprite++
             }
            else
                dados.numeroSprite=0
            }
    
        }else{
            dados.numeroSprite=0
        }
        
    })

}
/*movimentação do adversário*/
const npc=()=>{
    if(jogadorDados.posx > npcDados.posx){
        npcDados.posx++
    }
    if(jogadorDados.posx < npcDados.posx){
        npcDados.posx--
    }
    if(jogadorDados.posy > npcDados.posy){
        npcDados.posy++
    }
    if(jogadorDados.posy < npcDados.posy){
        npcDados.posy--
    }
}
/*Eventos do teclado*/

window.addEventListener('keydown',(event)=>{
    if(event.keyCode==37){
        jogadorDados.dirx=-1
        jogadorDados.esquerda=true
        jogadorDados.andando=true
    }else if(event.keyCode==39){
        jogadorDados.dirx=1
        jogadorDados.direita=true
        jogadorDados.andando=true
    }
    if(event.keyCode==38){
        jogadorDados.diry=-1
        jogadorDados.cima=true
        jogadorDados.andando=true
    }else if(event.keyCode==40){
        jogadorDados.diry=1
        jogadorDados.baixo=true
        jogadorDados.andando=true
    }

})
window.addEventListener('keyup',(event)=>{
    if(event.keyCode==37){
        jogadorDados.dirx=0
        jogadorDados.esquerda=false
        jogadorDados.andando=false
    }else if(event.keyCode==39){
        jogadorDados.dirx=0
        jogadorDados.direita=false
        jogadorDados.andando=false
    }
    if(event.keyCode==38){
        jogadorDados.diry=0
        jogadorDados.cima=false
        jogadorDados.andando=false
    }else if(event.keyCode==40){
        jogadorDados.diry=0
        jogadorDados.baixo=false
        jogadorDados.andando=false
    }
    
})
/*Função principal do Game*/ 
function game(timestamp){
    ctx.clearRect(0,0,1000,500)
    desenhar(ctx,objsJogos)
    npc()
    
    window.requestAnimationFrame(game)
}
window.requestAnimationFrame(game)
   

