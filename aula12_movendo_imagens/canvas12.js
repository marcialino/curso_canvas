let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')
let jogador= new Image()
jogador.src="imagens/nave.png"

let dx=5 
let dy=5
let x = 250
let y = 100
let WIDTH = 500
let HEIGHT = 500

function Iniciar(){
    let canvas = document.getElementById('desenho1')
    
    let ctx = canvas.getContext('2d')
    
    return setInterval(Atualizar, 10)
    }

const desenhar=()=>{
    ctx.clearRect(0, 0, 500, 500);
    /*ctx.drawImage(jogador, posInix, 0,largSprite, altSprite, posX,posY, largSprite, altSprite)*/

    ctx.drawImage(jogador, 120,80, 100, 200); /*desenhar a imagem, nas posições x e y*. Nas dimensões largura:200 e altura: 300*/
}


window.addEventListener('keyDown',(event)=>{

    switch (evt.keyCode) {
        case 38:  /*seta para cima */
            if (y - dy > 0){
                y -= dy;
            }
            break;
        case 40:  /*set para baixo*/
            if (y + dy < HEIGHT){
                y += dy;
            }
            break;
        case 37:  /*set para esquerda*/
            if (x - dx > 0){
                x -= dx;
            }
            break;
        case 39:  /*seta para direita*/
            if (x + dx < WIDTH){
                x += dx;
            }
            break;
})


/*window.addEventListener('keydown',(event)=>{
    if(event.key==37){ /*se o apertar a tecla 37 que é seta à esquerda, a posição de x vai uma posição à esquerda*/

function Atualizar(){
  desenhar()
}

window.addEventListener('keyDown', KeyDown, true)
Iniciar()
       