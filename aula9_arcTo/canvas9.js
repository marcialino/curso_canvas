let canvas = document.getElementById('desenho1')

let ctx = canvas.getContext('2d')

function desenha(){
    ctx.clearRect(0,0,500,500)

    /*Função arcTo
    posição inicial: x1 e y1
    posição final: x2 e y2
    raio*/
    ctx.beginPath();
    
    ctx.moveTo(0,0)/*coloca o ponto no inicio do canvas*/ 

    ctx.lineTo(100, 100)/*desenha uma linha da origem até as posições 100, 100. Ponto central*/ 
    
    ctx.arcTo(250,250,500,0,50)/*x1,y1; x2,y2; raio*/

    ctx.lineTo(500, 0)/*para finalizar o desenho depois do arco*/

    ctx.closePath();
    
    ctx.stroke();
    
    




    /*anima=requestAnimationFrame(desenha)*/


}

desenha()