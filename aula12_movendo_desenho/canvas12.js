var canvas
var ctx
var x= 250
var y= 100
var dx=5
var dy=5
var WIDTH = 500
var HEIGHT = 200

function Desenhar(){
    let nave = new Image()
    nave.src="imagens/nave.png"
    
    nave.addEventListener('load', ()=>{ /*para carregar a imagem*/ 
    ctx.drawImage(nave, x, y, 100, 200); /*desenhar a imagem, nas posições x e y*. Nas dimensões largura:200 e altura: 300*/
    })
}

function LimparTela(){
    ctx.clearRect(0, 0, 500, 500);
    
    
}
function Iniciar(){
    canvas = document.getElementById('desenho1')
    ctx = canvas.getContext('2d')
    return setInterval(Atualizar, 5)
}
  
function KeyDown (event){
        switch(event.keyCode){
            case 38:
                if(y-dy >0){
                    y -= dy
                }
                break
            case 40:
                if(y+dy < HEIGHT){
                    y+=dy
                }
                break
            case 37:
                if(x-dx > 0){
                    x -= dx
                } 
                break
            case 39:
                if (x + dx < WIDTH){
                    x +=dx
                } 
                break  
        }

    }
    function Atualizar(){
        LimparTela()
        Desenhar()
    }

    window.addEventListener('keydown', KeyDown, true)
    Iniciar()










  