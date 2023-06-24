
var canvas;//o elemento canvas sobre o qual desenharemos
var ctx;//o "contexto" da canvas que será utilizado (2D ou 3D)
var dx = 5;//a taxa de variação (velocidade) horizontal do objeto
var dy = 5;//a taxa de variação (velocidade) vertical do objeto
var x = 250;//posição horizontal do objeto (com valor inicial)
var y = 100;//posição vertical do objeto (com valor inicial)
var WIDTH = 500;//largura da área retangular
var HEIGHT = 200;//altura da área retangular


/*Função desenhar*/ 
function Desenhar() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2, true);
    ctx.fill()
    ctx.stroke()
    
}

/*Função limpar tela*/

function LimparTela() {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.rect(0, 0, WIDTH, HEIGHT);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

/*Função iniciar*/ 
function Iniciar() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');
    return setInterval(Atualizar, 10);
}


function KeyDown(evt){
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
    }
}
 /*Função atualizar*/ 

 function Atualizar() {
    LimparTela();    
    Desenhar();
}

window.addEventListener('keydown',KeyDown,true);
Iniciar()


