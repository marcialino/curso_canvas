let canvas = document.getElementById('desenho1')

let ctx = canvas.getContext('2d');

function desenha(){
/*Para desenhar em posições aleatória 10 círculos*/
   for(var i=0; i<10; i++) {
    ctx.beginPath();

    /*Para colorir de forma aleatória os círculos*/ 
    ctx.fillStyle= 'rgb('+Math.random()*255+',' +Math.random()*255+','+Math.random()*255+')'
    ctx.arc(Math.random()*500, Math.random()*500, Math.random()*100, (Math.PI/180)*0, (Math.PI/180)*360, true)
    
    ctx.fill()
   }
    

}

desenha()
